
const color=document.getElementById("color")
const colorcode=document.getElementById("colorcode")

const bgcolor=document.getElementById("bgcolor")
// array 

let colorno=[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
]

color.addEventListener("click",()=>{
    const hascolor=generatecolor();
    document.body.style.backgroundColor=hascolor;
    colorcode.textContent=hascolor;
    bgcolor.style.backgroundColor=hascolor   
})

const generatecolor=()=>{
    let hascolor="#"
    for(let i=0;i<6;i++){
        hascolor+=colorno[generaterandom()];
    }
    
   return hascolor;
}

const generaterandom=()=>{
    return Math.floor(Math.random()*colorno.length)  // it create a random no 
}