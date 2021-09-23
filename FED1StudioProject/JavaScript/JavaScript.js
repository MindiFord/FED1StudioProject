//Custom Lightbox Functionality
//When a user clicks on a thumbnail image, display the lightbox container and insert an <img> tag

$(".thumb").on("click", function () {

    //Find the src attribute of the image that was clicked and store it as a variable
    var imgSrc = $(this).attr("src");

    //Plug an <img> tag into #lightbox-content div -- use imgSrc as the src for the image
    $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" />');

    //Make lightbox visible by fading in
    $("#lightbox-container").fadeIn(500);

    //When the user clicks anywhere in the lightbox-container, fadeOut()
    $("#lightbox-container").on("click", function () {
        $(this).fadeOut(500);
    });

});