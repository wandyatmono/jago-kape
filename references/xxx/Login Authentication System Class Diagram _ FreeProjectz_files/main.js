'use strict';
~(function() {
    var
        count = 0,
        easeInOut = Power1.easeInOut,
        bgExit = document.getElementById('bgExit');

    window.init = function() {
        var tl = new TimelineMax({
            onComplete: doLoop
        });
        tl.set('#mainContent', { force3D: false });
        tl.addLabel('frameOne', '+=0.5');
        tl.to('#copyOne', 0.8, { x: 0, rotation: 0.01, ease: easeInOut }, 'frameOne')

        tl.addLabel('frameTwo', '+=2.5');
        tl.to('#bg', 0.8, { x: -137, rotation: 0.01, force3D: false, ease: Sine.easeOut },'frameTwo')
        tl.to('#copyOne',0.7, {x:-180, rotation:0.01, ease: Sine.easeOut},'frameTwo')
        tl.to('#copyTwo', 0.8, { x: 0, rotation: 0.01, ease: easeInOut }, 'frameTwo+=1')
        tl.to('#cta', 0.6, { opacity: 1, rotation:0.01, ease: easeInOut }, 'frameTwo+=3.6')
        tl.add(ctaPulseAnim, 'frameTwo+=4.7')

    };

    function ctaPulseAnim() {
        var ctl = new TimelineMax({ yoyo: true, repeat: 1 });
        ctl.to('#cta', 0.5, { scale: 1.1, force3D: false, ease: Sine.easeInOut })
    }

    function doLoop() {
        count++;
        if (count < 3) {

            var tlLoop = new TimelineMax();
            tlLoop.addLabel('loop', '+=1.65');
            tlLoop.to('#copyTwo', 0.35, { x: -300, opacity: 0, ease: Sine.easeIn }, 'loop')
            tlLoop.to('#cta', 0.25, { opacity: 0, ease: Sine.easeIn }, 'loop')
            tlLoop.to('#bg', 0.7, { x: -424, rotation:0.01}, 'loop+=1')
            tlLoop.set('#copyTwo', { opacity: 1 }, 'loop+=1.25')
            tlLoop.set('#bg', { clearProps: 'all' },'loop+=1.7')
            tlLoop.add(init, 'loop+=1.5');
        }

    }

    bgExit.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(window.clickTag);
    });
})();
window.onload = init();