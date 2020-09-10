function animate() {

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

}

function handleClicks(){
    $('[data-action="show-imprint"]').click(function(){
        $('#main-content').fadeOut();
        $('#imprint').fadeIn();
    });

    $('[data-action="back"]').click(function(){
        window.scrollTo(0, 0);
        $('#imprint').hide();
        $('#main-content').fadeIn();
    });
}

$(document).ready(animate());
$(document).ready(handleClicks());