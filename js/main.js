function whichTransitionEvent(){
    var t, el = document.createElement("fakeelement");
    var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }
    for (t in transitions){
        if (el.style[t] !== undefined){
            return transitions[t];
        }
    }
}

var transitionEvent = whichTransitionEvent();

function move() {
    if (typeof move.counter == 'undefined') {
        move.counter = 0;
    }
    $("body").css("transition", "background-color 1s linear 0s");
    $("#top, #right, #left, #bottom").css("transition", "opacity 1s linear 0s");
    $(".animate").css("transition", "top 1s linear 0s");
    if (move.counter % 2 == 0) {
        $("body").css("background-color", "#000000");
        $("#top, #right, #left, #bottom").css("opacity", "0");
        $("body").one(transitionEvent, function(e) {
            e.stopPropagation();
            $("#block").css("top", "100px");
        });
        $("#content").css("transition", "opacity 0s linear 2s");
        $("#content").css("opacity", "1");
        ++move.counter;
    }
    else {
        $("#content").css("transition", "opacity 0s linear 0s");
        $("#content").css("opacity", "0");
        $(".animate").css("top", "50%");
        $("body").one(transitionEvent, function(e) {
            e.stopPropagation();
            $("body").css("background-color", "#FFFFFF");
            $("#top, #right, #left, #bottom").css("opacity", "1");
        });
        ++move.counter;
    }
}

function sendEmail() {
    window.location = "mailto:samuelwenninger@gmail.com";
}

function goToLinkedIn() {
    window.location = "https://www.linkedin.com/in/swenninger";
}

function goToGitHub() {
    window.location = "https://github.com/samuelwenninger";
}

function goToResume() {
    window.location = "images/resume.pdf";
}
