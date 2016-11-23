angular.module('controller', [])
	.controller('indexController', function ($anchorScroll, $location, $state, $timeout, $scope, $ionicScrollDelegate) {

		//播放背景视频
		$scope.playAd = function () {
			var adMp4 = document.getElementById('adMp4');
			adMp4.play();
			$(adMp4).show();
			$('.video_poster').hide();
			$('#playBtn').hide();
			adMp4.addEventListener('ended', function () {
				$(adMp4).hide();
				$('.video_poster').show();
				$('#playBtn').show();
			}, false);
		};
		$scope.playAd();


		//给旋转方块绑定悬停事件
		var changeColor = 0
		$scope.bindHover = function () {
			$('.scrollbox li').each(function (i, e) {
				$(e).mouseover(function () {
					$('.scrollbox li').removeClass('active').eq(changeColor)
						.find('img').attr('src', "img/p3_" + (changeColor + 1) + ".png")
					changeColor = i;
					$(e).addClass('active');
					$(e).find('img').attr('src', "img/p3_wihte_" + (i + 1) + ".png")
				});
				$(e).mouseout(function () {
					//     $(e).find('img').attr('src', "img/p3_" + (i + 1) + ".png")
				})
			})
		};

		//滑动鼠标切换页面
		var part = 0;
		var ph = $('#part1').height();
		var pagest = 0;
		var pageet = 0;
		document.body.onmousewheel = function (event) {
			event = event || window.event;
			pagest = new Date().getTime();
			if (event.wheelDelta < 0 && ( pagest - pageet) > 500) {
				part++;
				part == 8 ? part = 7 : '';
				pageet = new Date().getTime();
			} else if (event.wheelDelta > 0 && ( pagest - pageet) > 500) {
				part--;
				part < 0 ? part = 0 : '';
				pageet = new Date().getTime();
			}
			if (part > 0) {
				$scope.goHash(part);
			}
			$scope.sNavBar(part - 1)
		};

		//点击导航栏跳转到相应部分
		//$scope.goHash = function (e) {
		//    $scope.goScroll((e - 1) * ph)
		//};
		var $scrollBody = $('.scroll-content');
		$scope.goHash = function (e) {
			var dis = (e - 1) * ph * -1;
			dis > 0 ? dis = 0 : '';
			$scrollBody.css('top', (e - 1) * ph * -1);
			$scope.sNavBar(e - 1);
			part = e
		};


		//切换菜单
		$scope.sNavBar = function (e) {
			e == -1 ? e = 0 : '';
			$('.navList li').removeClass('active').eq(e).addClass('active')
		};

		//四部分轮播图绑定Hover事件
		$scope.imgHover = function () {
			$('.simg2,.simg3,.simg1').on('click', function () {
				$scope.changeLoaction($(this))
			})
		};
		$scope.changeLoaction = function (i) {
			var $this = i;
			var img1 = $('.simg1');
			var img2 = $('.simg2');
			var img3 = $('.simg3');
			if ($this.attr('class') == 'simg2') {
				img1.removeClass('simg1').addClass('simg3');
				img2.removeClass('simg2').addClass('simg1');
				img3.removeClass('simg3').addClass('simg2');
			} else if ($this.attr('class') == 'simg3') {
				img1.removeClass('simg1').addClass('simg2');
				img2.removeClass('simg2').addClass('simg3');
				img3.removeClass('simg3').addClass('simg1');
			}
		}
	});