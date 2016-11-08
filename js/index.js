$(function(){
	var swiper=Swiper($('#content'))
	/*// 点击切换
	$('button').click(function(){
		swiper.scrollTo($('#content').width()*2,5000)
	})*/

	// 获取数据
	var getValue = function getValue(className){
					$ele = $(''+className+'');
					return{
						top:$ele.position().top,
						height:$ele.height()
					}
				}

	// 修正男孩的top
	$('#boy').css({
		top:getValue('.a_bckground_ctr').top+(getValue('.a_bckground_ctr').height)/2-getValue('#boy').height+25+'px'
	})

	// 开始行走
	$('button:first').click(function(){
		$('#boy').addClass('move');
		$('#boy').css({
							'transition-timing-function': 'linear',
							'transition-duration': '3000ms',
							'transform': 'translate3d('+$('#content').width()+'px,0,0)'  //设置页面x轴移动

		})
	})

	// 滑动
	$('button:eq(1)').click(function(){
		$('#boy').addClass('pauseWalk')
	})

	// 暂停
	$('button:eq(2)').click(function(){
		$('#boy').addClass('pauseWalk');
		var left = $('#boy').css('left');
        // 强制做了一个改变目标left的处理
        // 动画是要运行10秒,所以此时动画还是没有结束的
        $('#boy').css({
							'transition-timing-function': 'linear',
							'transition-duration': '300ms',
							'transform': 'translate3d('+left+'px,0,0)'  //设置页面x轴移动

		});
        // 增加暂停的样式
        
		
	})
})