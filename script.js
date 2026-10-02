const input = document.getElementById("Input");
const btn = document.getElementById("Btn");
const errorMessage = document.getElementById("Error-message");

btn.addEventListener("click",notifyAlert);

function notifyAlert(){
    if(input.value.includes("/") || input.value.includes(" ") || input.value.includes("#"))
        {
        input.classList.add("border");
        errorMessage.classList.add("active");
    }else{
        input.classList.remove("border");
        errorMessage.classList.remove("active");
    }
}