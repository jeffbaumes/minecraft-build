var Drone = require('drone');

var easyDrone = function(name, action) {

    exports[name] = function () {
        var d = this, label = 'label-' + Math.random();
        if (!d.up) {
            d = new Drone();
        }
        d.chkpt(label);
        action.apply(this, [d].concat(Array.prototype.slice.call(arguments)));
        d.move(label);
        return d;
    };

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
    d.allcityroads()
    .allskyscrapers();
});

easyDrone('allskyscrapers', function(d) {
    d.right(1)
    .back(9)
    .stoneskyscraper(10 + Math.floor(10*Math.random()))
    .fwd(25)
    .stoneskyscraper(10 + Math.floor(10*Math.random()))
    .fwd(25)
    .stoneskyscraper(10 + Math.floor(10*Math.random()))
    .right(25)
    .stoneskyscraper(10 + Math.floor(10*Math.random()))
    .back(25)
    .stoneskyscraper(10 + Math.floor(10*Math.random()))
    .back(25)
    .stoneskyscraper(10 + Math.floor(10*Math.random()))
    .right(25)
    .stoneskyscraper(10 + Math.floor(10*Math.random()))
    .fwd(25)
    .stoneskyscraper(10 + Math.floor(10*Math.random()))
    .fwd(25)
    .stoneskyscraper(10 + Math.floor(10*Math.random()));
});

easyDrone('allcityroads', function(d) {
    d.fourroads()
    .fwd(50)
    .fourroads()
    .right(50)
    .fourroads()
    .back(50)
    .fourroads();
});

easyDrone('fourroads', function(d) {
    d.cityroads()
        .right(25)
        .cityroads()
        .back(25)
        .cityroads()
        .left(25)
        .cityroads();
});

easyDrone('cityroads', function(d) {
    d.road()
        .fwd(9)
        .crossing()
        .turn(1)
        .road()
        .turn(3)
        .fwd(6)
        .road()
        .turn(3)
        .fwd(6)
        .road();
});

easyDrone('road', function(d) {
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

easyDrone('crossing', function(d) {
    d.left(5)
        .fwd(1)
        .box(blocks.wool.black, 5, 1, 5);
});

easyDrone('stoneskyscraper', function(d, floors) {
    var i;
    d = d.firstfloor()
    .up(5);
    for (i = 0; i < floors - 1; i = i + 1) {
        d = d.floor()
        .up(5);
    }
    d.box('4', 18, 1, 18);
});

easyDrone('firstfloor', function(d) {
    d.box('4', 18, 1, 18)
    .up(1)
    .box0('4', 18, 1, 18)
    .up(1)
    .box0('20', 18, 1, 18)
    .up(1)
    .box0('4', 18, 2, 18)
    .down(2)
    .right(8)
    .door2()
    .left(8)
    .up(2);
});

easyDrone('floor', function(d) {
    d.box('4', 18, 1, 18)
    .up(1)
    .box0('4', 18, 1, 18)
    .up(1)
    .box0('20', 18, 1, 18)
    .up(1)
    .box0('4', 18, 2, 18);
});
