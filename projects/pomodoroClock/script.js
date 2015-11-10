var sessionTime = 1500;
var breakTime = 300;
var x;
$(document).ready(function(){
    $('#timeDisplay').text('25:00');
    $('.display').on('click', function() {
        x = setInterval(count, 1000);
    });
    $('.back-button').hover(function() {
        $(this).text('Back');
    },
    function() {
        $(this).text('');
    });
});
function count() {
    if(sessionTime != 0) {
        sessionTime--;
        session_converted = [Math.floor(sessionTime / 60), sessionTime % 60];
        $('#timeDisplay').css('background-color','#2ecc71');
        if(session_converted[1] < 10){
            session_converted_new = '0' + session_converted[1];
            session_converted[1] = session_converted_new;
        }
        $('#timeDisplay').text(session_converted[0] + ":" + session_converted[1]);
        $('#break-or-session').text('In session');
    } else if (breakTime != 0) {
        break_converted = [Math.floor(breakTime / 60), breakTime % 60];
        $('#timeDisplay').css('background-color','#E74C3C');
        if(break_converted[1] < 10){
            break_converted_new = '0' + break_converted[1];
            break_converted[1] = break_converted_new;
        }
        $('#timeDisplay').text(break_converted[0] + ":" + break_converted[1]);
        breakTime--;
        $('#break-or-session').text('In break');
    } else {
        sessionTime = 1500;
        breakTime = 300;
    }
}