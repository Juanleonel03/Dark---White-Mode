let black_mode= document.getElementById("black-mode");
let body_black= document.body;


black_mode.addEventListener("click", function(){
    let value= body_black.classList.toggle("black-mode");
    localStorage.setItem("black_mode",value);
})

let local_storage= localStorage.getItem("black_mode");
if(local_storage == "true"){
    body_black.classList.add("black-mode")
}else{
    body_black.classList.remove("black-mode")
}