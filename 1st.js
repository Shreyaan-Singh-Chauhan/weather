
const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "9e917667069776bed6d245769f14e2c9";

weatherform.addEventListener("submit", event=> {
    event.preventDefault();
    const city = cityinput.value;
    
    if (city){

    }
    else{
        displayerror("Please enter a city");
    }

})

async function getweatherdata(city) {
    
}

function displayweatherinfo(data){

}

function getweatheremoji(weatherid){

}

function displayerror(message){
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("error");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay);
    


}