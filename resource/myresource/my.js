$('ul.nav.navbar-nav>li').on('mousedown', function (e) {
  
    $(this).addClass('active'); // current touch button is active only now
});
$('*').on('mouseup', function (e) {
    $('ul.nav.navbar-nav>li').removeClass('active');// remove active from all touch-button
});
// These 2 events above is for navbar elements

// start view-all-courses
var Elements = document.querySelectorAll('.home > .red');
//end view-all-courses


//START validate form

//END validate form
