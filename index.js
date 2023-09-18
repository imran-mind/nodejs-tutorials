const events = require('events');
class Alarm extends events.EventEmitter{}

const fireAlarm = new Alarm();

fireAlarm.on('smoke',(level)=>{
    console.log('Ringing fire alarm with smoke level = '+level)
});
fireAlarm.emit('smoke',1);
const sleepAlarm = new Alarm();

sleepAlarm.on('wakeup',(time)=>{
    console.log("Ringing wakeup alarm at "+time);
});

sleepAlarm.emit('wakeup',7);
sleepAlarm.emit('wakeup',8);

console.log(sleepAlarm.eventNames())
console.log(fireAlarm.eventNames())




