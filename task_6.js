var callbackInside = function() {
    var storage = {};
    return function(arg) {
        if (arg in storage) return storage[arg];
        else {
            storage[arg] = Math.round(Math.random() * (1000 - 5) + 5);

            return storage[arg];
        }
    }
};
var callback = callbackInside();

var timerInside = function() {
    var lastTime = 0;

    return function(arg) {
        var interval = Date.now() - lastTime;
        lastTime = Date.now();

        if (interval > 500) return callback(arg) + ' ' + Date();
    }
};

var timer = timerInside();

setInterval(function() {
    console.log(timer(Date.now()))
}, 600);