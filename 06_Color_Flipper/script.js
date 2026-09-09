const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16 )];
    }

    return color;
}

// console.log(randomColor());
let intervalID;
const startChangingColor = function(){
    // this is due to the access for clear interval in stopChnaginColor, that doesn't work without it
    if(!intervalID){
        intervalID = setInterval(changeBG, 500)
    }

    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangingColor = function(){
    clearInterval(intervalID)
    intervalID = null;
}

document.querySelector("#start").addEventListener
    ("click", startChangingColor)

document.querySelector("#stop").addEventListener
    ("click", stopChangingColor)