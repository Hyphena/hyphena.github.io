$(document).ready(function()
{
    function loop()
    {
        $('#background').css({
            color: '#888',
            fontSize: '18pt',
            opacity: 1,
            'z-index': '1',
        });

        $('#background').animate({
            fontSize: '24pt',
            opacity: '0.5',
        }, 1000, 'linear', function() {
            loop();
        });
    }

    loop();
});