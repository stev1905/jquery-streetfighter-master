$(document).ready(function(){
    playRyuTheme();
    $('.hulk-ryu, .ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
        $('.ryu-cool').hide();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.ryu-cool').hide();
        $('.fight').hide();
        $('.dark-hadouken').finish().show().animate(
            {'left': '100px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '750px');
            });
        $('.hadouken').finish().show().animate(
            {'left': '1000px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        $('.fight').hide();
    });
  
});
$(document).keydown(function(e){
    if (e.which == 88){
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.fight').hide();
        $('.ryu-cool').show();
    }
});
$(document).keydown(function(e){
    if (e.which == 13){
        $('.fight').show();
    }
});
$(document).keyup(function(e){
    if (e.which == 88){
        $('.ryu-ready').show();
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
    }
});
function playRyuTheme() {
    $('#theme-sound')[0].volume = 0.5;
    $('#theme-sound')[0].load();
    $('#theme-sound')[0].play();
}
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
