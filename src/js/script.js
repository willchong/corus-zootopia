$( document ).ready(function() {

	$('.video-carousel').slick({
	  infinite: true,
	  slidesToShow: 3,
	  centerMode: false,
	  slidesToScroll: 1
	});

	$('.video-thumbnail').on('click', function(){

		console.log($(this).attr('data-video'));
		var theVideo = $(this).attr('data-video');
		var theSource = '';

		switch(theVideo) {
			case '1':
				theSource = '8EKrtSx8fzE';
				break;
			case '2':
				theSource = 'qWiFVM2zTvg';
				break;
			case '3':
				theSource = 'L9WLMiHGOqU';
				break;
		}

		var theEmbed = 'https://www.youtube.com/embed/'+theSource+'?controls=0&showinfo=0&rel=0&autoplay=1';

		$('.video iframe').attr('src', '');
		$('.video iframe').attr('src', theEmbed);

	});

});