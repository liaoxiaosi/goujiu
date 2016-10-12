jQuery.prototype.lcarousel = function(options){
	console.log(this);
	// 默认参数
	var defaults = {
		width:442,
		height:240,
		page:true,//是否显示页码
		autoPlay:true,//是否自动轮播
		type:'x',//动画类型：水平滚动x, 垂直滚动y, 渐现效果fade
		buttons:true,//是否显示前后按钮
		speed:3000,//轮播图速度
	}
	var opt = $.extend({},defaults,options);

	// 轮播图外框
	var $self = this;

	// 获取当前对象下的ul
	// this.find('ul');
	var $ul = $('ul',$self);
	var $firstImg = $ul.find('img').eq(0);
	var imgHeight,imgWidth;

	// 保证图片加载成功后才执行
	/*$firstImg.load(function(){
		imgHeight = $firstImg.height();
		imgWidth = $firstImg.width();

		// 设定外框的高度
		$self.css({
			height:imgHeight,
			width:imgWidth
		});
	});*/


	// 初始化
	var index = 0;
	var len = $ul.children().length;
	var $page;

	// 生成页码
	if(opt.page){
		$page = $('<div/>').addClass('page');
		for(var i=1;i<=len;i++){
			var $span = $('<span/>');
			if(i==1){
				$span.addClass('active');
			}
			$span.appendTo($page);
		}
		$page.appendTo($self);

		// 点击页码切换
		$page.on('click','span',function(){
			index = $(this).index();
			showPic();
		});
	}

	// 设置样式
	$self.css({
		height:opt.height,
		width:opt.width
	});
	

	// 左右按钮
	if(opt.buttons){
		
		$('<div/>').html('&gt;').addClass('next').appendTo($self);
		$('<div/>').html('&lt;').addClass('previous').appendTo($self);
		$self.on('click','.next',function(){
			index++;
			showPic();
		}).on('click','.previous',function(){
			index--;
			showPic();
		});
	}
	


	// 定时器：每个3s切换一张图片
	if(opt.autoPlay){
		var timer;

		// 鼠标移入移出
		$self.on('mouseenter',function(){
			clearInterval(timer);
		}).on('mouseleave',function(){
			timer = setInterval(function(){
				index++;
				showPic();
			},opt.speed);
		})

		// 模拟事件（手动触发一个事件）
		.trigger('mouseleave');
	}
	


	function showPic(){
		if(index>=len){
			index = 0;
		}else if(index<0){
			index = len - 1;
		}

		// console.log(imgHeight,index)
		$ul.animate({left:-opt.width*index});

		// 页码高亮效果
		if(opt.page) {
			$page.children().removeClass().eq(index).addClass('active');
		}
	}
}
//$('.lbt').xcarousel()