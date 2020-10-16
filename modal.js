$(document).ready(function () {
	var open_modal = $('.open_modal');
	var modal = $('.modal_form');
	var close = $('.exit, #overlay');
	var overlay = $('#overlay');

	open_modal.click(function (event) {
		event.preventDefault();
		var div = $(this).attr('href'); //узнаем селектор
		overlay.fadeIn(400,
			function () {
				$(div)
					.css('display', 'block')
					.animate({ opacity: 1, top: '50%' }, 200);
			});
	});
//закрытие
	close.click(function () {
		modal // все мoдaльные oкнa
			.animate({ opacity: 0, top: '45%' }, 200,
			function () {
				$(this).css('display', 'none');
				overlay.fadeOut(400);
			}
			);
	});
	$(document).on('af_complete', function (event, response) {
		if (response.success) { //Если форма заполнена и нет ошибок
			modal 
				.animate({ opacity: 0, top: '45%' }, 500,
				function () {
					$(this).css('display', 'none');
					overlay.fadeOut(400);
				}
				);
		}
	});
});