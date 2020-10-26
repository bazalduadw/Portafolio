$(document).ready(function(){
    var acercaDe = $('#acerca-de').offset().top,
        practicas = $('#practicas').offset().top,
        certificaciones = $('#certificados').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: acercaDe - 220
        }, 500);
    });

    $('#btn-practicas').on('click', function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: practicas - 50
        }, 500);
    });

    $('#btn-certificaciones').on('click', function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: certificaciones
        }, 500);
    });
})