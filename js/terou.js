(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
}).call(this);

$(function() {
    Pace.on('done', function() {
        $("body").removeClass("stop-scrolling");
        setTimeout(function() {
            $("#loader").fadeOut();
        }, 500);
        //nameChanger
        var stateParams = 
        {
            States : ["Concept Artist","Bug Fixer","Shader Enthusiast", "Game Addict", "C++ Lover", "2D Artist", "Game Programmer"],
            stateIndex : 0,
            stateSelector : $("#container .headline .state"),
        }
        setInterval(function(){rollNewState(stateParams)}, 2000);
        loadImgAsync(".project-BG", "image-src");
    });

    $(window).scroll(function (event) {
        updateNavigator($(window).scrollTop());
    });

    $('.project').click(function()
    {
        loadproject($(this));
    })

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        568:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            autoplay: true,
            autoplayTimeout:3000,
            nav:false
        },
        1024:{
            items:3,
            autoplay: true,
            autoplayTimeout:3000,
            nav:false,
            loop:false,
            rewind: true
        }
    }
})
});

function updateNavigator(scroll)
{
    var height = $(window).height();
    var activePanel;

    if(scroll >= 0 && scroll <= .5*height)
    {
        activePanel = $(".node-headline");
    }
    else{
        if(scroll > height/2 && scroll <= (1.5*height))
            activePanel = $(".node-projects");
        else
            activePanel = $(".node-contact");
    }
    //add-remove active class
    if(!activePanel.hasClass("active"))
            activePanel.addClass("active");
    $(".node.active").not(activePanel).removeClass("active");

    //add-remove headline text
    var newHeadline = activePanel.data("headline");
    if(newHeadline === "")
    {
        $("#navigator-headline").removeClass("active");
    }
    else
    {
        if(!$("#navigator-headline").hasClass("active"))
            $("#navigator-headline").addClass("active");
        $("#navigator-headline").text(newHeadline);
    }
}

function rollNewState(state)
{
    if(state.stateIndex >= state.States.length)
        state.stateIndex = 0;
    state.stateSelector.text(" " + state.States[state.stateIndex++].toLowerCase());
}

function loadImgAsync(selector, tag)
{
    $(selector).each(function() {
        var url = $(this).data(tag);
        $(this).css("background-image", "url("+ url +")");
    }, this);
}

function loadproject(el)
{
    console.log(el.data("content"));
    //works fine :^)
}
