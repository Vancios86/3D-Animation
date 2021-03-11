//getting the elements
const card = document.querySelector(".card")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const image = document.querySelector(".image img")
const purchase = document.querySelector(".purchase")
const sizes = document.querySelector(".sizes")
const subtitle = document.querySelector(".info h3")



//moving animation events
container.addEventListener("mousemove", e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})

//animate in
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    title.style.transform = "translateZ(200px)"
    image.style.transform = "translateZ(160px)"
    purchase.style.transform = "translateZ(125px)"
    sizes.style.transform = "translateZ(100px)"
    subtitle.style.transform = "translateZ(125px)"
})

//animate out
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = "rotateX(0deg) rotateY(0deg)"
    title.style.transform = "translateZ(0px)"
    image.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"
    subtitle.style.transform = "translateZ(0px)"
})