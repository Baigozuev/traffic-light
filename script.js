const color = document.querySelector(".color")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")

setTimeout(() => {
    color.style.background = "red"
    color.style . transition = ".8s"
    color3.style.background = ""
},2000);


setTimeout(() => {
    color2.style.background = "yellow"
    color2.style.transition = ".8s"
    color.style.background = ""
},4000)
setTimeout(() => {
    color3.style.background = "greenyellow"
    color3.style.transition = ".8s"
    color2.style.background = ""
},6000)



