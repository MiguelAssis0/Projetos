const key = "35aaf203735f3f801bc62f5bffc754dc"


function inputData(dados){
    const info = document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".cidade").innerHTML = info
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function loadCity(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    
    inputData(dados)

}


function clickButton(){
    const cidade = document.querySelector(".input-city").value
    loadCity(cidade)
}