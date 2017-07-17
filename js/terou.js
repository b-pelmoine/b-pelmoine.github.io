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
    });
});


function rollNewState(state)
{
    if(state.stateIndex >= state.States.length)
        state.stateIndex = 0;
    state.stateSelector.text(" " + state.States[state.stateIndex++].toLowerCase());
}

