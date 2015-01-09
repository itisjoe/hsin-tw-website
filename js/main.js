$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#4DC8E5', '#6EC575', '#FAD247'],
        anchors: ['about', 'portfolio', 'contact'],
        menu: '#menu',
        slidesNavigation: true,
        scrollingSpeed: 500
    });
    
    var section = location.href.substring(location.href.indexOf('#'));
    if (section != "#portfolio" && section != "#contact") {
        $('#aboutli').addClass('active');
    }

});
