
		
			function setcookie(name,value,expires,path,domain,secure){
				
			//name=value    encodeURIComponent(name)编码name    ----name:user 、password 等     value---李四
		var cookietext=encodeURIComponent(name)+"="+encodeURIComponent(value);
			
//			var cookietext;
			
			//失效时间  expires=date   instanceof :判断是否属于某个类型
			
			if(expires instanceof Date){
				// document.cookie="name=11;expires="+d;  模版
				cookietext+=";expires="+expires;
				
			}
			//path 路径
			if(path){
				cookietext+=";path="+path;
				
			}
			//后面还有domain  secure等
			
			
			// document.cookie="name=11;expires="+d;  模版
			document.cookie=cookietext; 
			return  document.cookie;  //document.cookie封装好的函数
						
		}
		
	//获取cookie函数
	
	function getcookie(name){
		var cookie=decodeURIComponent(document.cookie);//解码cookie
		
		
		var arr=cookie.split("; ");
		for(var i=0;i<arr.length;i++){
			//name=1    如：user=李飒
			var arr2=arr[i].split("=");
			// arr2=[name,1]
			if(arr2.length=2){
				if(arr2[0]==name){
					return arr2[1];
				}
				
			}
			
		}
		return "";
	}
	
	// 删除cookie
	function removecookie(name){
		var d=new Date();
		document.cookie = encodeURIComponent(name)+"=;expires="+d;
		return document.cookie;
	}

		
			
	

