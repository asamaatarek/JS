$(document).ready(function(){
    var existingImage = null;
    
    //enterImage
    $('.ima').mouseenter(function(e){
        existingImage = $(this).clone();
        existingImage.removeClass('ima');
        existingImage.addClass('new');
        existingImage.css({
            position: "fixed",
            pointerEvents: "none",
            width: "500px",
        });
        $('body').append(existingImage);
        positionImage(e);
    });
    //insidImage
    $('.ima').mousemove(function(e){
        if (existingImage) {
            positionImage(e);
        }
    });
    //out
    $('.ima').mouseout(function(){
        if (existingImage){
            $('.new').remove();
            existingImage = null;
        }
    });
    $(window).resize(function() {
        if ($('.new').length && existingImage) {
            var lastX = parseInt($('.new').css('left')) - 15;
            var lastY = parseInt($('.new').css('top')) - 15;
  
            var mouseEvent = {
                clientX: lastX,
                clientY: lastY,
            };
            positionImage(mouseEvent);
        }
    });
    function positionImage(e) {
        if (!existingImage) return; 
        var windowWidth = $(window).width();
        var imageWidth = 500; 
        var leftPosition = e.clientX + 15;

        if (leftPosition + imageWidth > windowWidth) {
            leftPosition = windowWidth - imageWidth - 15;
        }
        $('.new').css({
            'top': e.clientY + 15 + 'px',
            'left': leftPosition + 'px'
        });
    }
});