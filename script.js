gsap.from("#center h3",{
    opacity:0,
    y:20,
    delay:7,
    duration:3
})
gsap.from("#center p",{
    opacity:0,
    y:20,
    delay:7,
    duration:3
})
gsap.from("#center h1",{
    opacity:0,
    y:40,
    delay:8,
    duration:3
})

gsap.from("#cities img",{

    y:30,
    scrollTrigger:{
        trigger:"#cities img",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})