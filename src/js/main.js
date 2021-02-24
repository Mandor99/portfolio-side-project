$(function () {
	const btnFilter = $('.portfolio__btn');

	/********isotope filter plugin ***************** */
	btnFilter.on('click', function (e) {
		e.stopPropagation();
		const selectedFilter = $(e.target).attr('data-filter');
		$('.grid').isotope({
			itemSelector: '.grid-item',
			// layoutMode: 'fitRows', //comment it to be like masonry layout
			filter: selectedFilter,
		});
	});
	$('.portfolio__btn#btn1').trigger('click'); //to like as i have clicked on all button to be like masonry mode

	/********popup plugin ************************ */
	$('.grid .portfolio__popupLink').magnificPopup({
		type: 'image',
		// delegate: 'a',
		gallery: { enabled: true },
	});
});
