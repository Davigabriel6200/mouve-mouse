document.body.addEventListener("mousemove", e => {
    gsap.to(".circulo", {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.03,
    })
})