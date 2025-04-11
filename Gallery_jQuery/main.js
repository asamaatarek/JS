$(document).ready(function () {
    $.fn.moonGallery=function(){
        let $images = this;
        let imageSources = $images.map(function() {
            return $(this).attr('src');
        }).get();
        let currentIndex = 0;
        if (!$("body").find("#imageGallery").length) {
            const imageGal = `
              <div id="imageGallery" style="display:none;">
                <span class="close">&times</span>
                <img class="gallery-image" src="">
                <span class="nav prev">&#10094;</span>
                <span class="nav next">&#10095;</span>
              </div>
            `;
            $("body").append(imageGal);
          }
          let $modal = $("#imageGallery");
          let $modalImg = $modal.find('.gallery-image');

          function showGallery(index) {
            currentIndex = index;
            $modalImg.attr('src', imageSources[currentIndex]);
            $modal.fadeIn(function() { 
                $('.gallery-image').fadeIn(); 
                $('.nav').fadeIn(); 
            });
        }
        $images.on('click', function() {
            let src = $(this).attr('src');
            let index = imageSources.indexOf(src);
            showGallery(index);
        });
        $modal.on('click', '.close', function() {
            $modal.fadeOut(function() { 
                $('.gallery-image').fadeOut();
                $('.nav').fadeOut(); 
            });
        });
        $(document).on('keydown', function(e) {
            if (e.key === "Escape") {
                $modal.fadeOut(function() {
                    $('.gallery-image').fadeOut();
                    $('.nav').fadeOut();
                });
            }
        });
        $modal.on('click', '.nav.next', function() {
            currentIndex = (currentIndex + 1) % imageSources.length;
            showGallery(currentIndex);
        });
        $modal.on('click', '.nav.prev', function() {
            currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
            showGallery(currentIndex);
        });
        return this;
     }
    $('.images').moonGallery()
});