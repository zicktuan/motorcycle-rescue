
$(window).load(function() {

    $('#featured').orbit({
        animation: 'horizontal-push', // fade, horizontal-slide, vertical-slide, horizontal-push
        animationSpeed: 600, // how fast animtions are
        timer: true, // true or false to have the timer
        advanceSpeed: 3500, // if timer is enabled, time between transitions
        pauseOnHover: true, // if you hover pauses the slider
        startClockOnMouseOut: true, // if clock should start on MouseOut
        startClockOnMouseOutAfter: 100, // how long after MouseOut should the timer start again
        directionalNav: false, // manual advancing directional navs
        captions: false, // do you want captions?
        captionAnimation: 'fade', // fade, slideOpen, none
        captionAnimationSpeed: 600, // if so how quickly should they animate in
        bullets: true, // true or false to activate the bullet navigation
        bulletThumbs: false, // thumbnails for the bullets
        bulletThumbLocation: '', // location from this file where thumbs will be
        afterSlideChange: function() {
        } 		// empty function
    });
    // $('#popUpIssue').modal('show');
});

function registerRedirect() {
    document.location = "/thanh-vien";
}
$(document).ready(function() {
    $('a.special').lightBox();
});

$(window).load(function() {

    $('#featured').orbit({
        animation: 'horizontal-push', // fade, horizontal-slide, vertical-slide, horizontal-push
        animationSpeed: 600, // how fast animtions are
        timer: true, // true or false to have the timer
        advanceSpeed: 3500, // if timer is enabled, time between transitions
        pauseOnHover: true, // if you hover pauses the slider
        startClockOnMouseOut: true, // if clock should start on MouseOut
        startClockOnMouseOutAfter: 100, // how long after MouseOut should the timer start again
        directionalNav: false, // manual advancing directional navs
        captions: false, // do you want captions?
        captionAnimation: 'fade', // fade, slideOpen, none
        captionAnimationSpeed: 600, // if so how quickly should they animate in
        bullets: true, // true or false to activate the bullet navigation
        bulletThumbs: false, // thumbnails for the bullets
        bulletThumbLocation: '', // location from this file where thumbs will be
        afterSlideChange: function() {
        } 		// empty function
    });
    // $('#popUpIssue').modal('show');


    //close the POPUP if the button with id="close" is clicked
    // $('#hidden-menu-top').slicknav();
});
function showCallUsModal() {

    $("#dvGettingNumberProgress").show();
    $('#dvCallUsModal').modal('show');
    $('#dvCallUsModal').focus();

    getNumberForModal();
}