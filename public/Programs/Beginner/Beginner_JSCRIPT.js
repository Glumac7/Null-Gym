$(document).ready(function()
{
    var $header_width = $('header').width();
    var $body_width = $('body').width();

    /*-----HEADER FOR MOBILE PHONES------*/
    $(document).ready(function()
    {
        $('.burger-container').click( function()
        {
            $(this).toggleClass('open');
            $('nav ul').toggleClass('dropdown');
        });
    });
    
    /*------PARALLAX REMOVAL-----*/
    if($body_width < 950)
    {
        $('body').find('.parallax2').removeClass('parallax2');

        $('aside.background').css({'height': '100%'});
    }
    else
        $('section:nth-child(1)').addClass('parallax2');

    if($body_width < 1400)
    {
        $('.quotedowdiv').removeClass('parallax2');
    }

    /*------QUOTE SIZE------*/
    if($body_width < 500)
        $('p.quotep').css({"font-size": "32px"});


    /*------DOWNLOAD BUTTOM ANIMATIONS-----*/
    $('.quotedowp').hover(function() 
    {
        $(this).parent().addClass('zoomhover').removeClass('zoomleave');
    }, function()
    {
        $(this).parent().removeClass('zoomhover').addClass('zoomleave');
    });

    /*-----ANIMATION REMOVAL-----*/
    if($body_width < 800)
    {
        $('.opacity').removeClass('opacity');
        $('.opacity2').removeClass('opacity2');
    }
    
    /*-----ABOUT IMG FOR MOBILE PHONES------*/
    var $why_img  = $('.whydiv ul li:nth-child(1)');
    var $why_li_img = $('.whyimg, .whyimgli');
    var $lastli_width = $('.lastli').width();
    var $lastli = $('.lastli').height();
    var $about_img  = $('.aboutdiv ul li:nth-child(2)');
    var $about_li_img = $('.aboutimg, .aboutimg2, .aboutimgli');
    var $about_li_img2 = $('.aboutimg2');
    var $firstli_width = $('.firstli').width();
    var $firstli = $('.firstli').height();

    if($body_width < 800)
    {
        $($about_img).css({"margin": "0 0 70px 0"});
        $('.firstli').css({"padding-bottom": "70px"});

        $($about_li_img)
            .width($body_width - 122)
            .height('140');
        $($about_li_img2)
            .width($body_width - 122)
            .height('140');

    }
    else
    {
        $($about_li_img).width('300').height('200');
        $($about_li_img2).width('300').height('200');
        $($about_img).css({"margin": "70px 60px"});
    }

    /*------LINKS FOR MOBILE PHONES------*/
    if($body_width < 600)
	{
		$('.footer-icons a:nth-child(1)').attr("href", "fb://facewebmodal/f?href=https://www.facebook.com/nemanja.glumicic");
		$('.footer-icons a:nth-child(3)').attr("href", "instagram://user?username=nemanjaglumicic");
		$('.footer-mail').attr("href", "mailto:necaglumicic@gmail.com");
	}
});

/*------PARALLAX------*/
$(window).bind('scroll',function(e)
{
   	parallaxScroll();
});
 
function parallaxScroll()
{
   	var scrolledY = $(window).scrollTop();
	$('.parallax2').css('background-position','center -'+((scrolledY*.2))+'px');
}
/*------ANIMATIONS------*/
$(window).scroll(function()
{
    $body_width = $('body').width();

    if($(this).scrollTop() > 600 && $body_width > 800)
    {
        $('.aboutp').addClass('fadeInUp').removeClass('opacity');
    }

    
    if($(this).scrollTop() > 600 && $body_width > 800)
    {
        $('.aboutimg').addClass('bounceInRight').removeClass('opacity');
        $('.aboutimg2').addClass('bounceInRight2').removeClass('opacity2');
    }
    
    if($(this).scrollTop() > 1200 && $body_width > 800)
    {
        $('.whyp').addClass('fadeInUp').removeClass('opacity');
        $('.whyimg').addClass('bounceInLeft').removeClass('opacity');
    }
});