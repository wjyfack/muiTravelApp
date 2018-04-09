
/*
 	页面跳转 通用
 * */	
 window.onload = function(){
	document.getElementById('home').addEventListener('tap',function(){
					//alert('test home');
					mui.openWindow({
						url:'./index.html',
						id:'index.html',
					})
				});
	document.getElementById('discover').addEventListener('tap',function(){
					//alert('test home');
					mui.openWindow({
						url:'./discovery.html',
						id:'discovery.html',
					})
				});
	document.getElementById('service').addEventListener('tap',function(){
					//alert('test home');
					mui.openWindow({
						url:'./service.html',
						id:'service.html',
					})
				});
	//页面跳转my
	document.getElementById('my').addEventListener('tap',function(){
					//alert('text m');
					mui.openWindow({
						url:'./my.html',
						id:'my.html',
					})
				});}