function getHours (){
    const hora = document.querySelectorAll("span")[0]
    const minuto = document.querySelectorAll("span")[1]
    const segundo = document.querySelectorAll("span")[2]

    const data = new Date()
    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()
    const hour = horas < 10 ? `0${horas}` : horas
    const minute = minutos < 10 ? `0${minutos}` : minutos
    const second = segundos < 10 ? `0${segundos}` : segundos
    hora.innerHTML = `${hour}`
    minuto.innerHTML = `${minute}`
    segundo.innerHTML = `${second}`    
}

setInterval(() => {
    getHours()
  }, 1000)

