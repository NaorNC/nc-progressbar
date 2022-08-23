var cancelledTimer = null;

$('document').ready(function() {
    Progressbar = {};

    Progressbar.Progress = function(data) {
        clearTimeout(cancelledTimer);
        $("#progress-label").text(data.label);
        /* $(".progress-button").css("display", "inline-block");      */   
        $(".progress-container").fadeIn('fast', function() {
            $("#progress-bar").stop().css({"width": 0, "background-color": "#1787e2a6"}).animate({
              width: '100%'
            }, {
              duration: parseInt(data.duration),
              complete: function() {
                $(".progress-container").fadeOut('fast', function() {
                    $('#progress-bar').removeClass('cancellable');
                    $("#progress-bar").css("width", 0);
                    $.post('https://nc-progressbar/FinishAction', JSON.stringify({                        
                        })                    
                    );
                    /* $(".progress-button").css("display", "none");   */
                })
              }
            });
        });
    };

    Progressbar.ProgressCancel = function() {
        $("#progress-bar").stop().css( {"width": "0%", "background-color": "rgba(71, 0, 0, 0.8)"});
        $('#progress-bar').removeClass('cancellable');        
        $(".progress-container").fadeOut('fast', function() {
            $("#progress-bar").css("width", 0);
            $.post('https://nc-progressbar/CancelAction', JSON.stringify({
                })
            );
           /*  $(".progress-button").css("display", "none");   */
        });        
    };
    
    window.addEventListener('message', function(event) {
        switch(event.data.action) {
            case 'progress':
                Progressbar.Progress(event.data);
                break;
            case 'cancel':
                Progressbar.ProgressCancel();
                break;
        }
    });
});
