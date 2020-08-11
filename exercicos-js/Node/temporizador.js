const schedule = require('node-schedule')

const tarefa = schedule.scheduleJob('*/5 * 14 * * 2', function(){
 console.log('Executando Tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
  tarefa.cancel()
  console.log("Cancelando Tarefa 1")
},20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 15
regra.second = 05

const tarefa2 = schedule.scheduleJob(regra,function(){
  console.log('Executando Tarefa 2!', new Date().getSeconds())
})