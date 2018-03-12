$(document).ready(function()
{

    /*------VARIABLES-----*/
    var $body_width = $('body').width();
    var $header_width = $('header').width();
    var $tutorials_ul_li =  $('.tutorialsdiv ul li .overlay');

    /*------FOR MOBILE PHONES------*/
    if($body_width < 600)
	{
		$('.footer-icons a:nth-child(1)').attr("href", "fb://facewebmodal/f?href=https://www.facebook.com/nemanja.glumicic");
		$('.footer-icons a:nth-child(3)').attr("href", "instagram://user?username=nemanjaglumicic");
		$('.footer-mail').attr("href", "mailto:necaglumicic@gmail.com");
    }

    var counter;

    $("#burger-nav").on("click", function()
    {
		if(counter === 1)
		{
			$("#burger-nav").css({"background": "url(Home%20Page/Images/burger.png) no-repeat 98% center"});
			$("header nav ul").removeClass("open");
			counter = 0;
		} 
		else
		{
			$("#burger-nav").css({"background": "url(Home%20Page/Images/closed.png) no-repeat 98% center"});
			$("header nav ul").addClass("open");
			counter = 1;
		}
	});
    
    if($body_width >= 640)
    {
        $('header').css({"position": "fixed", "width": "100%", "z-index": "5"})
    }

    if($body_width < 800)
    {
        $($tutorials_ul_li).css({'height': '35%'});

        $('.transformationsdiv ul li .overlay2').css({'bottom': '0', 'height': '100%'});

        $('aside').removeClass('parallax2');

        $('.opacity').removeClass('opacity');
        $('.opacity2').removeClass('opacity2');

        $('p.tutorialsp')
            .html("Before starting any of the programs listed above please make sure that you have the best tehnique posible. Without it you are putting your self at risk of getting hurt, and, you will never be at your full potencial.<br/><br/><span>Listed below are 3 general groups of tutorials...</span><br/><br/>")
            .css({"padding": "0 10px"});

        var ul = $('.tutorialsul').width();
        var li = $('.tutorialsul li').width();

        margin = (ul - li) / 2;

        $('.tutorialsul li').css('margin-left', margin);

        ul = $('.transformationsdiv ul').width();
        li = $('.transformationsdiv ul li').width();

        margin = (ul - li) / 2;

        $('.transformationsdiv ul li').css('margin-left', margin);

        $('.tutorialsul li:nth-child(1)').css({"margin-bottom": "17px"});
        $('.tutorialsul li:nth-child(2)').css({"margin-bottom": "17px"});

        $('.transformationsp')
            .html("Listed below are some <q>SUCCESS</q> stories of the programs listed above. The reason it exists isto show <span>YOU</span> that <span>anything is possible!</span><br/><br/><br/>")
            .css({"padding": "0 10px", "font-size": "20px"});

        $('#s li:nth-child(1)').css({"margin-bottom": "17px"});
        $('#s li:nth-child(2)').css({"margin-bottom": "17px"});
    }
});

/*-----ANIMATIONS-----*/
$(window).scroll(function() {

    $body_width = $('body').width();

    if($(this).scrollTop() > 400 && $body_width > 800)
    {
        $('.programsul li:nth-child(1)').addClass('rotateInDownLeft').removeClass('opacity');

        $('.programsul li:nth-child(2)').addClass('fadeInUp').removeClass('opacity');

        $('.programsul li:nth-child(3)').addClass('rotateInDownRight').removeClass('opacity');
    }

    if($(this).scrollTop() > 1000 && $body_width > 800)
    {
        $('.tutorialsp').addClass('fadeInDown').removeClass('opacity');

        $('.tutorialsul li:nth-child(1)').addClass('fadeInLeft').removeClass('opacity');

        $('.tutorialsul li:nth-child(2)').addClass('fadeIn').removeClass('opacity');

        $('.tutorialsul li:nth-child(3)').addClass('fadeInRight').removeClass('opacity');
    }

    if($(this).scrollTop() > 1600 && $body_width > 800)
    {
        $('.transformationsp').addClass('fadeInDown').removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(1)')
            .addClass('fadeInUp')
            .css({"animation-delay": ".2s"})
            .removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(2)')
            .addClass('fadeInUp')
            .css({"animation-delay": ".3s"})
            .removeClass('opacity');

        $('.transformationsdiv ul li:nth-child(3)')
            .addClass('fadeInUp')
            .css({"animation-delay": ".4s"})
            .removeClass('opacity');


        $('.transformationsdiv ul').addClass('fadeIn').removeClass('opacity');
    }
});

/*------PROGRAMS IMAGE HOVER------*/
$(document).ready(function()
{
    $('.programsimg').hover(function() 
    {
        $(this)
            .addClass('zoomhover')
            .removeClass('zoomleave')

    }, function()
    {
        $(this)
            .removeClass('zoomhover')
            .addClass('zoomleave')
    });
});

/*------SMOOTH TRANSITION FOR THE NAV LINKS------*/
jQuery.easing.def = "easeInOutCubic";

$(document).ready(function($) 
{
    $(".scroll").click(function(event)
    {		
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
});

/*-----PARALLAX-----*/
$(document).ready(function()
{
	$(window).bind('scroll',function(e)
    {
   		parallaxScroll();
   	});
 
   	function parallaxScroll()
    {
   		var scrolledY = $(window).scrollTop();
		$('.parallax2').css('background-position','center -'+((scrolledY*.2))+'px');
   	}
});