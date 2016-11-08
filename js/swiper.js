
	function Swiper(container){

		// 获取第一个子节点
			var element = container.find(':first'); //ul
			
		//构建一个滑动对象
			var swiper = {};

		//获取容器的宽高
			var width = container.width();
			var height = container.height();

		//li 页面的数量
			var slides = element.find('li');

		// 设置ul页面的宽高
			element.css({
				width:(slides.length*width)+'px',
				height:height + 'px'
			})

		//设置li 宽高
			slides.each(function(){
				$(this).css({
					width:width + 'px',
					height:height + 'px'
				})
			});

		// 监控完成与移动
		swiper.scrollTo = function( x ,speed){
			element.css({
							'transition-timing-function': 'linear',
							'transition-duration': speed+'ms',
							'transform': 'translate3d(-' + x + 'px,0,0)'  //设置页面x轴移动
						})
		}


		return swiper;

	}
