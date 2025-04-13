$(document).ready(function() {
    // Audio setup
    var audio = new Audio('https://s57.radiolize.com/radio/8090/radio.mp3');
    var lastVolume = 0.5;
    audio.volume = lastVolume;
    var isMuted = false;
    var isPlaying = false;
    
    // Initialize visualizer
    for (var i = 0; i < 20; i++) {
        $('#visualizer').append('<div class="radio-player__bar"></div>');
    }
    
    // Hide visualizer initially
    $('#visualizer').hide();
    
    // Radio modal handling - updated to use ID instead of href
    $('#comunicaciones-link').on('click', function(e) {
        e.preventDefault();
        $('#radioModal').modal('show');
    });
    
    // Fallback for href selector (in case the ID approach fails)
    $('a[href="#comunicaciones"]').on('click', function(e) {
        e.preventDefault();
        $('#radioModal').modal('show');
        return false; // Stop event propagation to prevent other handlers
    });
    
    // Play button
    $('#playButton, #minimizedPlayButton').on('click', function() {
        audio.play();
        $('#visualizer').show();
        isPlaying = true;
        
        // Animate bars to mimic music rhythm
        startVisualizerAnimation();
    });
    
    // Pause button
    $('#pauseButton, #minimizedPauseButton').on('click', function() {
        audio.pause();
        $('#visualizer').hide();
        isPlaying = false;
        
        // Stop animation
        stopVisualizerAnimation();
    });
    
    // Volume slider
    $('#volumeSlider').on('input', function() {
        var volume = $(this).val() / 100;
        audio.volume = volume;
        if (volume === 0) {
            isMuted = true;
            $('#volumeIcon').removeClass('fa-volume-up').addClass('fa-volume-mute');
        } else {
            isMuted = false;
            lastVolume = volume;
            $('#volumeIcon').removeClass('fa-volume-mute').addClass('fa-volume-up');
        }
    });
    
    // Volume icon
    $('#volumeIcon').on('click', function() {
        if (isMuted) {
            audio.volume = lastVolume;
            $('#volumeSlider').val(lastVolume * 100);
            isMuted = false;
            $('#volumeIcon').removeClass('fa-volume-mute').addClass('fa-volume-up');
        } else {
            lastVolume = audio.volume;
            audio.volume = 0;
            $('#volumeSlider').val(0);
            isMuted = true;
            $('#volumeIcon').removeClass('fa-volume-up').addClass('fa-volume-mute');
        }
    });
    
    // Update progress bar
    audio.addEventListener('timeupdate', function() {
        var progress = (audio.currentTime / audio.duration) * 100;
        $('#progressBarFill').css('width', progress + '%');
    });
    
    // Improve minimize radio modal functionality
    $('#minimizeRadioBtn').off('click').on('click', function() {
        $('#radioModal').modal('hide');
        setTimeout(function() {
            $('#minimizedRadioPlayer').fadeIn();
        }, 300);
    });
    
    // Improve maximize radio modal functionality
    $('#maximizeRadioBtn').off('click').on('click', function() {
        $('#minimizedRadioPlayer').hide();
        setTimeout(function() {
            $('#radioModal').modal('show');
        }, 100);
    });
    
    // Close button handling - properly close and stop the radio
    $('.close[data-dismiss="modal"]').on('click', function() {
        audio.pause();
        isPlaying = false;
        stopVisualizerAnimation();
        $('#radioModal').modal('hide');
        $('#minimizedRadioPlayer').hide();
    });
    
    // Clean up when modal is closed with X button
    $('#radioModal').on('hidden.bs.modal', function(e) {
        // Only show minimized player if audio is playing AND 
        // we didn't trigger this from the close button
        if (isPlaying && $(e.target).hasClass('modal') && $('#minimizedRadioPlayer').css('display') === 'none') {
            $('#minimizedRadioPlayer').fadeIn();
        }
    });
    
    // Visualizer animation variables
    var visualizerInterval;
    
    function startVisualizerAnimation() {
        // Clear any existing interval
        if (visualizerInterval) {
            clearInterval(visualizerInterval);
        }
        
        visualizerInterval = setInterval(function() {
            if (isPlaying) {
                $('.radio-player__bar').each(function() {
                    var height = Math.random() * 100;
                    $(this).css('height', height + 'px');
                });
            } else {
                $('.radio-player__bar').css('height', '20px');
            }
        }, 200);
    }
    
    function stopVisualizerAnimation() {
        if (visualizerInterval) {
            clearInterval(visualizerInterval);
            visualizerInterval = null;
        }
        $('.radio-player__bar').css('height', '20px');
    }
});
