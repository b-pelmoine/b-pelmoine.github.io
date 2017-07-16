(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}).call(this);

$(function() {
    Pace.on('done', function() {
        setTimeout(function() {
            $("#loader").fadeOut();
        }, 500);
        //nameChanger
        var stateParams = 
        {
            States : ["Concept Artist","Bug Fixer","Shader Enthusiast", "Game Addict", "C++ Lover", "2D Artist", "Game Programmer"],
            stateIndex : 0,
            stateSelector : $("#container .headline .state"),
            stateIn : "slideInUp",
            stateOut : "slideOutUp"
        }
        setInterval(function(){rollNewState(stateParams)}, 2000);
    });
});


function rollNewState(state)
{
    console.log("1");
    if(state.stateIndex >= state.States.length)
        state.stateIndex = 0;
    var newState = state.States[state.stateIndex++];
    state.stateSelector.toggleClass(state.stateIn);
    state.stateSelector.toggleClass(state.stateOut);
    setTimeout(function() {
            state.stateSelector.toggleClass(state.stateOut);
            state.stateSelector.text(" " + newState.toLowerCase());
            state.stateSelector.toggleClass(state.stateIn);
        }, 1000);
}

