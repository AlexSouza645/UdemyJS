
// npm i node-schedule
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 4', function () {
    console.log('executando tarefa 1!', new Date().getSeconds())
})//vai disparar a cada 5 seg, as 16hrs ignora o dia do mes, o mês.0 domingo, então 5 é igual a quinta

//como cancelar um evento
setTimeout(function () {
    tarefa1.cancel()//cancela um temporizador
    console.log('cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()//regra recorrente
regra.dayOfWeek = [new schedule.Range(1, 5)]//dias da semana de segunda a sexta
regra.hour = 16
regra.second = 30
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('executadno tarefa 2', new Date().getSeconds())
})


//eu consegui kkkk