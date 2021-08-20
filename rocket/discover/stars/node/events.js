const { EventEmitter } = require('events');

const eventEmmiter = new EventEmitter();

eventEmmiter.on('saySomething', data => {
  console.log('saying something', data);
});

eventEmmiter.emit('saySomething', { data: 'testing' });
