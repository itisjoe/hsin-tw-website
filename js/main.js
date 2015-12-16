$(document).ready(function() {
    $.get( "tools/ig/joe963.php", function( data ) {
        $.supersized({
            fit_portrait: 0,
            slides : [{image:data}]
        });
        $('#supersized').hide().fadeIn(6000);
    });
    
    if ($(document).height() > $('#content').height()) {
        $('#content').css('height',$(document).height());
    }
    if ($(document).width() > 999) {
        $('#content').css('width',$(document).width() * 0.618);
    } else {
        $('#content').css('width',$(document).width());
    }

});

