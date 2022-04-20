var bg;

const grandom = number =>{
     return Math.floor(Math.random() * number+1) 
}

const change = () =>{
    bg = `rgba(${grandom(255)}, ${grandom(255)}, ${grandom(255)}, ${grandom(255)})`
    document.body.style.backgroundColor = bg
}