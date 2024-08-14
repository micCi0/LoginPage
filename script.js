const icon = document.querySelector("#change");
const input = document.querySelector("#input-password");
const label = document.querySelector("#text");


icon.addEventListener("click", () => {
    if(icon.classList.contains("ri-eye-off-line")){ 
        icon.classList.replace("ri-eye-off-line" , "ri-eye-line"); 
        input.type = "text";
        label.textContent = "";
    }
    else{
        icon.classList.replace("ri-eye-line" , "ri-eye-off-line");
        input.type = "password";
        label.textContent = input.value ? "Password" : "";
    }
});
