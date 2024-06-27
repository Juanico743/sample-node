const EventEmitter = require('events');

var url = 'http://sasasasas.io/log'

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        this.emit('messageLogged', { id: 1, url:'http//', test: url});
    }
}

module.exports = Logger;