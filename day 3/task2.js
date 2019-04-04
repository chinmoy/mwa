const EventEmitter = require('events');
class Gym extends EventEmitter{
    constructor(){
        super();
    }
    boom(){
        setInterval( ()=>this.emit('Boom'), 1000 );
   }
}

const gym = new Gym();
gym.on('Boom', ()=> console.log('Athlete is working out!'));

gym.boom();