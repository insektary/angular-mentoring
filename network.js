function Network(name, networkAddress) {
    this.networkAddress = networkAddress;
    this.listOfClients = [];
    this.name = name;
}

Network.prototype.getAddress = function(clientType, link) {
    var newAddress = this.listOfClients.length;
    var RANGE = 999;

    for (var i = 0; i < this.listOfClients.length; i++) {
        if (!this.listOfClients[i]) {
            newAddress = i;
            break;
        }
    }

    if (newAddress > RANGE) {
        console.log('sorry, network are overloaded');

        return;
    }

    this.listOfClients[newAddress] = {type: clientType, status: link.status, name: link.name, link: link};

    return newAddress;
};

Network.prototype.removeClient = function(clientIP) {
    this.listOfClients[clientIP] = undefined;
};

Network.prototype.changeAddress = function(previousAddress, wishAddress) {
    if (!this.listOfClients[wishAddress]) {
        this.listOfClients[wishAddress] = {};
        Object.assign(this.listOfClients[wishAddress], this.listOfClients[previousAddress]);
        this.removeClient(previousAddress);

        return wishAddress;
    }
};

Network.prototype.showAllClients = function() {
    for (var i = 0; i < this.listOfClients.length; i++) {
        if (!this.listOfClients[i]) continue;

        var status = (this.listOfClients[i].status) ? this.listOfClients[i].status : '';
        console.log(i + ' ' + this.listOfClients[i].name + ' ' + this.listOfClients[i].type + ' ' + status);
    }
};

Network.prototype.findServer = function(server) {
    var res;

    this.listOfClients.forEach(function(item, index) {
        if (item.name === server) {
            res = index;
        }
    });

    return res;
};

module.exports = Network;