$(function () {
	$('[data-info]')
		.on('click', function (e) {
			infoblockId = '#' + $(this).attr('data-info');

			$info = $(infoblockId);

			if ($info.html() == '') {
				$(infoblockId)
					.load('/home/about', function (data) {
						console.log(data);
					})
			}

			if ($(this).hasClass('infoblockOpen')) {
				$info
					.animate({
						top: '-450px'
					}, 800);
				$(this).removeClass('infoblockOpen');
			}
			else {
				$info
					.animate({
						top: '0px'
					}, 800);
				$(this).addClass('infoblockOpen');
			}
		});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('#infoblock')
				.animate({
					top: '-450px'
				}, 800);
			$('.tip').removeClass('infoblockOpen');
		}
	});
})