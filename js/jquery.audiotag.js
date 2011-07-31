$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Mogwai2009-04-29_acidjack_t16.ogg');
    audioElement.load()
    audioElement.addEventListener("load", function() { 
        audioElement.play(); 
        $(".duration span").html(audioElement.duration);
        $(".filename span").html(audioElement.src);
    }, true);



    
    $('.play').click(function() {
        audioElement.play();
        
    });
    $('.pause').click(function() {
        audioElement.pause();
    });
    $('.volumeMax').click(function() {
        audioElement.volume=1;
    });
        $('.volumestop').click(function() {
        audioElement.volume=0;
    });
    $('.playatTime').click(function() {
        audioElement.currentTime= 35;
        audioElement.play();
    });         
});
