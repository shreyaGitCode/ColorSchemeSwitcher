const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(button => {
    button.addEventListener("click", (event) =>{
        body.style.color = event.target.id;
        if(event.target.id === "red"){
            body.style.backgroundColor = "rgb(128,5,5)";
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = "rgb(8,112,150)";
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = "rgb(175,175,8)";
        }
        if(event.target.id === "purple"){
            body.style.backgroundColor = "rgb(116,11,116)";
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = "white";
        }
        if(event.target.id === "black"){
            body.style.backgroundColor = "black";
        }
    });
});
