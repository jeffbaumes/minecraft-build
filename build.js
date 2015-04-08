var Drone = require('drone');

var easyDrone = function(name, action) {

    exports[name] = function () {
        var d = this, label = 'label-' + Math.random();
        if (!d.up) {
            d = new Drone();
        }
        d.chkpt(label);
        action(d);
        d.move(label);
        return d;
    }

    Drone.extend(name, exports[name]);
};

easyDrone('house', function(d) {
    d.up(1).box(blocks.oak, 5, 1, 5)
        .up(1)
        .box0(blocks.oak, 5, 3, 5)
        .up(3)
        .prism(blocks.birch, 5, 5);
});

easyDrone('path', function(d) {
    d.box(blocks.cobblestone, 3, 1, 21);
});

easyDrone('villiage', function(d) {
    d.path().fwd(11).turn(1).back(9).path()
        .fwd(3).left(6).house()
        .turn(1).fwd(10).left(4).house()
        .turn(-1).fwd(6).house()
        .turn(-1).fwd(6).house();
});

easyDrone('city', function(d) {
    d.cr()
        .fwd(9)
        .cc()
        .turn(1)
        .cr();
});

easyDrone('cr', function(d) {
    d.box('43:5', 1, 1, 10)
        .left(2)
        .box(blocks.wool.black, 2, 1, 10)
        .left(1)
        .box(blocks.wool.yellow, 1, 1, 10)
        .left(2)
        .box(blocks.wool.black, 2, 1, 10)
        .left(1)
        .box('43:5', 1, 1, 10);
});

easyDrone('cc', function(d) {
    d.left(5)
        .fwd(1)
        .box(blocks.wool.black, 5, 1, 5);
});
