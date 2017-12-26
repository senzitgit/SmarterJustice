/* -----------------------------------------------------
Knob stats
* ------------------------------------------------------ */

jQuery(".knob").knob();

jQuery('.knob').each(function(){
	
	var currId = jQuery(this).attr("id");
	
	currId = "#" + currId;
		
	if(jQuery(currId).val() == 0) {
		jQuery({value: 0}).animate({value: jQuery(currId).attr("rel")}, {
			duration: 900,
			easing:'swing',
			step: function() {
				jQuery(currId).val(Math.ceil(this.value)).trigger('change');
			}
		})
	}
});

/* -----------------------------------------------------
Fire up Functions on Page Load
* ------------------------------------------------------ */
jQuery(document).ready(function(){
	doTestimonials();
	doTabsType1();
	doTabsType2();
	doAccordion();
	initScrollTop();
	cleanUp();
});


function cleanUp() {
	// Clean up content boxes
	jQuery(".tt-contentbox-content").find('br:first').remove();
	jQuery("body").find('p:empty').remove();
}



/* -----------------------------------------------------
Scroll to Top
* ------------------------------------------------------ */
function initScrollTop() {
    var change_speed = 1200;
    jQuery('a.link-top').click(function () {
        if (!jQuery.browser.opera) {
            jQuery('body').animate({
                scrollTop: 0
            }, {
                queue: false,
                duration: change_speed
            })
        }
        jQuery('html').animate({
            scrollTop: 0
        }, {
            queue: false,
            duration: change_speed
        });
        return false
    })
}

/* -----------------------------------------------------
Bar graph
* ------------------------------------------------------ */
var animatedCount = 0;
var barCount = 0;
	
function animateBar(){

	jQuery('.bar_graph li:not(".animated")').each(function(i){
		var percent = jQuery(this).find('span').attr('data-width');
		jQuery(this).addClass('animated');
		
		jQuery(this).find('span').animate({
			'width' : percent + '%'
		},1700, 'linear',function(){
		});		
		animatedCount++;
		if(animatedCount == barCount){
			clearInterval(barAnimation);
		}		
	});	
}
	
	
	
if( jQuery('.bar_graph').length > 0 ){
	//store the total number of bars that need animating
	jQuery('.bar_graph').each(function(){
		barCount += jQuery(this).find('li').length;
	});
	
	var barAnimation = setInterval(animateBar, 150);
	animateBar();	
}

/* -----------------------------------------------------
Testimonials
* ------------------------------------------------------ */
function doTestimonials(){
	var testimonialsCont = jQuery('.glg_short-testimonials');
	if(testimonialsCont.length < 1){
		return;
	}
testimonialsCont.each(function(){
	var maxHeight = 0, total = 0, dots, circle;
	var testimonials = jQuery(this).children('div');
	testimonials.each(function(){
		maxHeight = jQuery(this).outerHeight() > maxHeight ? jQuery(this).outerHeight() : maxHeight;
	});
	testimonials.css({'position':'absolute', 'display': 'none'});
	if(jQuery(this).parent().hasClass('home_1_sidebar')){
		var gap = 120;
	}else{
		var gap = 100;
	}
	jQuery(this).css({'height': maxHeight + gap + 'px', 'position' : 'relative'});
	testimonials.eq(0).css('display', 'block');
	total = testimonials.length;
	dots = document.createElement('div');
	dots.className = 'glg_short-dots';
	for(var i = 0; i < total; i++){
		circle = document.createElement('div');
		circle.className = 'glg_short-circle';
		if(i == 0){
			circle.className += " current";
		}
		dots.appendChild(circle);
	}
	jQuery(this).append(dots);
	dots = jQuery('.glg_short-dots');
	var dotsWidth = jQuery('.glg_short-circle').length * 51 +'px';
	var mrgLeft = '-' + parseInt(dotsWidth) / 2 + 'px';
	dots.css({'position': 'absolute', 'left' : '50%', 'bottom' : 0, 'width' : dotsWidth, 'margin-left' : mrgLeft});
	doCicleTestimonials(jQuery(this));
});
}

function doCicleTestimonials(testimonialsObj){
	var interval = "6500";//milliseconds
	var currentTestimonial = "0";//always starts at 0
	var testimonials = testimonialsObj.children('.glg_short-testimonial');
	var dotsCont = testimonialsObj.children('.glg_short-dots');
	var dots = dotsCont.children('div');
	var theTimeout;
	theTimeout = setTimeout(cicleTestimonials, interval);
	function cicleTestimonials(){
		testimonials.eq(currentTestimonial).fadeOut();
		dots.eq(currentTestimonial).removeClass('current');
		currentTestimonial++;
		if(currentTestimonial == testimonials.length){
			currentTestimonial = 0;
		}
		testimonials.eq(currentTestimonial).fadeIn();
		dots.eq(currentTestimonial).addClass('current');
		theTimeout = setTimeout(cicleTestimonials, interval);
	}
	dots.click(function(){
		clearTimeout(theTimeout);
		testimonials.eq(currentTestimonial).fadeOut();
		dots.eq(currentTestimonial).removeClass('current');
		currentTestimonial = jQuery(this).index();
		testimonials.eq(currentTestimonial).fadeIn();
		jQuery(this).addClass('current');
		theTimeout = setTimeout(cicleTestimonials, interval);
	});
}

/* -----------------------------------------------------
Tabs - Type 1
* ------------------------------------------------------ */
function doTabsType1(){
	var tabs = jQuery('.glg_short-tabs-vertical');
	if(tabs.length < 1){
		return;
	}
	tabs.append("<span class='glg_short-tabs-vertical_arrow'></span>");
	tabs.each(function(){
		var handlers = jQuery(this).children('dt');
		var tabContentBlocks = jQuery(this).children('dd');
		var currentTab = jQuery(this).find('dd.current');
		var arrow = jQuery(this).children('span').eq(0);
		var handlersWidth = handlers.eq(0).outerWidth();
		var minus = currentTab.prev().index() == 0 ? 18 : currentTab.prev().outerHeight()/2 + 18;
		var firstHandlerY = currentTab.prev().position().top + currentTab.prev().outerHeight() - minus;
		arrow.css({'left': handlersWidth-18 + 'px', 'top': firstHandlerY + 'px'});

		maybeGrowShrinkTab(currentTab.eq(0).prev());

		handlers.click(function(){
			if(jQuery(this).hasClass('current')) return
			currentTab.prev().removeClass('current');
			currentTab.fadeOut('fast');
			arrow.fadeOut('fast');
			var that = this;
			maybeGrowShrinkTab(this, function(){
				currentTab = jQuery(that).next();
				var minus = jQuery(that).index() == 0 ? 18 : jQuery(that).outerHeight()/2 + 18;
				arrowY = jQuery(that).position().top + jQuery(that).outerHeight() - minus;
				arrow.fadeIn('fast');
				arrow.animate({'top':arrowY + 'px'});
				currentTab.fadeIn('slow');
				jQuery(that).addClass('current');
			});
		});
	});
}

function maybeGrowShrinkTab(tab, callback, add){
	var jTab = (tab.nodeName) ? jQuery(tab) :  tab 
	var tabCont = jTab.next();
	var tabsContainer = jTab.parent();
	var handlers = tabsContainer.children('dt');
	var plus = add || 0;//tabs type 2 need a little added height because the handlers are placed on top.

	tabCont.css('height', 'auto');

	var tabContHeight = tabCont.outerHeight();
	tabContHeight += plus;
	var tabsContainerHeight = tabsContainer.outerHeight();
	var totalHandlersHeight = 0;

	handlers.each(function(){
		totalHandlersHeight += jQuery(this).outerHeight();
	});

	if(tabContHeight != tabsContainerHeight){
		if(tabContHeight > totalHandlersHeight){
			tabsContainer.animate({'height': tabContHeight + 'px'}, function(){
				if(typeof callback != 'undefined') callback()
			});
		}else{
			totalHandlersHeight += 60; //Just give it a lil space so it doesn't look too tight
			tabCont.css('height', totalHandlersHeight + 'px');
			tabsContainer.animate({'height': totalHandlersHeight + 'px'}, function(){
				if(typeof callback != 'undefined') callback()
			});
		}
	}else{
		if(typeof callback != 'undefined') callback()
	}
}



/* -----------------------------------------------------
Tabs - Type 2
* ------------------------------------------------------ */
function doTabsType2(){
	var tabs = jQuery('.glg_short-tabs-horizontal');
	if(tabs.length <  1){
		return;
	}
	tabs.append("<span class='glg_short-tabs-horizontal_arrow'></span>");
	tabs.each(function(){
		var handlers = jQuery(this).children('dt');
		var tabContentBlocks = jQuery(this).children('dd');
		//var currentTab = tabContentBlocks.eq(0);
		var currentTab = jQuery(this).find('dd.current');
		var arrow = jQuery(this).children('span').eq(0);
		var handlersWidth = handlers.eq(0).outerWidth();
		var firstHandlerY = handlers.eq(0).position().top + handlers.eq(0).outerHeight() - 18;
		var firstHandlerX = currentTab.prev().position().left + (currentTab.prev().outerWidth() /2) - 2;
		arrow.css({'left': firstHandlerX + 'px'});

		maybeGrowShrinkTab(currentTab.eq(0).prev(), undefined, 70);

		handlers.click(function(){
			currentTab.prev().removeClass('current');
			currentTab.fadeOut('fast');
			arrow.fadeOut('fast');
			var that = this;
			maybeGrowShrinkTab(this, function(){
				currentTab = jQuery(that).next();
				arrowY = jQuery(that).position().left + (jQuery(that).outerWidth() /2) - 2;
				arrow.fadeIn('fast');
				arrow.animate({'left':arrowY + 'px'});
				currentTab.fadeIn('slow');
				jQuery(that).addClass('current');
			}, 70);
		});
	});
}

/* -----------------------------------------------------
Accordions
* ------------------------------------------------------ */
function doAccordion(){
	var accordions = jQuery('.glg_short-accordion');
	if(accordions.length < 1){
		return;
	}
	accordions.each(function(){
		var that = jQuery(this);
		var handlers = jQuery(this).children('dt');
		handlers.click(function(){
			// If statement added to allow closing all accordion elements.
			if(jQuery(this).hasClass('current')){
				jQuery(this).removeClass('current').next().slideUp();
				return;
			}
			that.children('dt.current').removeClass('current').next().slideUp();
			jQuery(this).toggleClass('current');
			jQuery(this).next('dd').slideToggle();
		});
	});
}

/* -----------------------------------------------------
Notification Boxes
* ------------------------------------------------------ */
jQuery(document).ready(function(){

	jQuery('.closeable').closeThis({
		animation: 'fadeAndSlide', 	// set animation
		animationSpeed: 400 		// set animation speed
	});
	
});

(function($)
{
	$.fn.closeThis = function(options)
	{
		var defaults = {
			animation: 'slide',
			animationSpeed: 300
		};
		
		var options = $.extend({}, defaults, options);
		
		return this.each(function()
		{
			var message = $(this);
			
			message.css({cursor: 'pointer'});
			
			message.click(function()
			{
				hideMessage(message);
			});
			
			function hideMessage(object)
			{
				switch(options.animation)
				{
					case 'fade':
						fadeAnimation(object);
						break;
					case 'slide':
						slideAnimation(object);
						break;
					case 'size':
						sizeAnimation(object);
						break;
					case 'fadeThenSlide':
						fadeAndSlideAnimation(object);
						break;
					default:
						fadeAndSlideAnimation(object);
				}
			}
			
			function fadeAnimation(object)
			{
				object.fadeOut(options.animationSpeed);
			}
			
			function slideAnimation(object)
			{
				object.slideUp(options.animationSpeed);
			}
			
			function sizeAnimation(object)
			{
				object.hide(options.animationSpeed);
			}
			
			function fadeAndSlideAnimation(object)
			{
				object.fadeTo(options.animationSpeed, 0, function() { slideAnimation(message) } );
			}
			
		});
	}
})(jQuery);