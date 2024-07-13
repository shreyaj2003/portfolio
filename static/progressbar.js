var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.querySelector('#progress-bar');
        var id = setInterval(frame, 50);
        var width = 0;
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            }
            else {
                width++;
                elem.style.width = width + "%"
            };
        };
    };
};

move();