$(function(){
/*=====添加购物车=====*/
	var goodnum=0;
	$('.jrgwc p').click(function(){
		goodnum++;
		var s_name=$('.xm_middle .p_shang').html();
		var s_wz=$('.xm_middle .p_xia').text();
		var s_price=$('.xm_middle .price').html();
		var s_pic='../img/detail/p1.jpg';
		var s_sl=$('.xm_middle .shuliang').val();
		var sval={};
		sval.name=s_name;                
		sval.wz=s_wz;
		sval.price=s_price;
		sval.pic=s_pic;
		sval.sl=s_sl;
		var _cookie='good'+goodnum+'='+JSON.stringify(sval);
		document.cookie=_cookie;
		console.log(document.cookie);
		alert('已添加到您的购物车清单');
		
	})
	/*======取出信息 写入购物车=====*/
	$(function(){
		var $all=0
		var last_cookie= document.cookie.split('; ');
		console.log(last_cookie);
		if(last_cookie!=''){
			$.each(last_cookie,function(idx,ele){
				if(ele.split('=')[0].length>=5){
					var ocookie=JSON.parse(ele.split('=')[1]);
					//创建一个li
					var $li='<li class="sp_name" data-goodsname="'+ele.split('=')[0]+'"><p class="left p1"><img src='+ocookie.pic+'/></p><a href="#" class="aa1">'+ocookie.name+'</a></span></p><p class="left p3">￥'+ocookie.price+'</p><p class="left p4">'+ocookie.sl+'</p><p class="left p5">￥'+ocookie.price*ocookie.sl+'</p><span class="delete">删除</span></li>';
					$('.cheche ul').append($li);   //添加到ul
					
					//计算总价
					$all+=ocookie.price*ocookie.sl;
				}
			})
			
			$('.total p span').html($all)
		}
	})
		/*=====清空购物车======*/
	$('.d_gwc').click(function(){
		$('.cheche ul').empty()
		$('.total p span').html(0)
	})
	/*=====点击删除按钮删除该条订单======*/
	$('.cheche').on('click','.delete',function(){
		var oli = $(this).closest('li');
		var goodsname = oli.attr('data-goodsname');
		var $all=0;
		// 把过期时间设置成昨天
		var now = new Date();
		now.setDate(now.getDate()-1);
		$('.cheche ul').empty();
		// 删除cookie
		document.cookie = goodsname + '=null;expires=' + now;
		// location.reload();
		var last_cookie= document.cookie.split('; ');
		$('.total p span').html('0');
		if(last_cookie!=''){
			$.each(last_cookie,function(idx,ele){
				
				if(ele.split('=')[0].length>=5){
					var ocookie=JSON.parse(ele.split('=')[1]);
					
					var $li='<li class="sp_name" data-goodsname="'+ele.split('=')[0]+'"><p class="left p1"><img src='+ocookie.pic+'/></p><a href="#" class="aa1">'+ocookie.name+'</a></span></p><p class="left p3">￥'+ocookie.price+'</p><p class="left p4">'+ocookie.sl+'</p><p class="left p5">￥'+ocookie.price*ocookie.sl+'</p><span class="delete">删除</span></li>';
					$('.cheche ul').append($li);
					
					$all+=ocookie.price*ocookie.sl;
				}
			})
			$('.total p span').html($all);
		}
	})
	

})