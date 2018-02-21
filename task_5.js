var callbackInside = function() {
    var storage = {};

    var func = function(arg) {
        if (arg in storage) return storage[arg];
        else {
            storage[arg] = Math.round(Math.random() * (1000 - 5) + 5);

            return storage[arg];
        }
    };

    return func;
};

var callback = callbackInside();

var timerInside = function() {
    var lastTime = 0;

    var func = function(arg) {
        var interval = Date.now() - lastTime;
        var DELAY = 2000 //ms
        lastTime = Date.now();

        if (interval > DELAY) return callback(arg);
    };

    return func;
};
