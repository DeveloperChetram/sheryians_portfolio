 lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.from('.nav',{
    opacity:0,
    delay:.5,
    duration:.9
})
gsap.from(".cards-1", {

    y: 100,
    scale:0.5,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: {
        start: '40% 80%',
        end: 'bottom bottom',
        // markers  : true,
        scrub: true,
        trigger: '.page-2',
        // stagger:1
        // pin:true
    }

})
gsap.from(".cards-2", {

    y: 100,
    scale:0.5,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: {
        start: '40% 80%',
        end: 'bottom bottom',
        // markers  : true,
        scrub: true,
        trigger: '.page-3',
        // stagger:1
        // pin:true
    }

})

gsap.from('.heading',{
    opacity:0,
    delay:1,
    duration:.9
})
gsap.from(".hero",{
    opacity:0,
    delay:1.3
})
gsap.from(".hero", {
    effects:true,
    // smoothTouch:0.1,
    y: 300,
    scale:.9,
    duration: 2,
    // opacity: 0,
    scrollTrigger: {
        start: 'top 60%',
        end: 'bottom bottom',
        // markers: true,
        // pin:true,
        scrub: true,
        trigger: '.hero-div',
        // stagger:1
        // pin:true
    }

})

gsap.from('.icon-1',{
    x:-200,
    opacity:0,
    duration:1,
    rotate:-75,
    scrollTrigger: {
        start: 'top 70%',
        end: 'bottom bottom',
        // markers: true,
        scrub: true,
        trigger: '.icon-div',
        // stagger:1
        // pin:true
    }


})
gsap.from('.icon-2',{
    x:200,
    opacity:0,
    duration:1,
    rotate:75,
    scrollTrigger: {
        start: 'top 70%',
        end: 'bottom bottom',
        // markers: true,
        scrub: true,
        trigger: '.icon-div',
        // stagger:1
        // pin:true
    }


})
gsap.from('.icon-3',{
    x:-200,
    y:200,
    opacity:0,
    delay:1,
    duration:2,
    rotate:75,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom bottom',
        // markers: true,
        scrub: true,
        trigger: '.icon-div',
        // stagger:1
        // pin:true
    }
})
gsap.from('.icon-4',{
    x:200,
    y:200,
    opacity:0,
    delay:1,
    duration:2,
    rotate:75,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom bottom',
        // markers: true,
        scrub: true,
        trigger: '.icon-div',
        // stagger:1
        // pin:true
    }
})
gsap.from('.text-para',{
    opacity:0,
    delay:1,
    // y:20,
    duration:2,
    scrollTrigger: {
        start: 'top 50%',
        end: 'bottom bottom',
        // markers: true,
        scrub: true,
        trigger: '.icon-div',
        // stagger:1
        // pin:true
    }
})

gsap.from('.great',{
   opacity:0,
   y:50,
   scale:.9,
    duration:2,
    scrollTrigger:{
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub: true,
        trigger:'.great-div',
        stagger:1
        
    }
})

gsap.from(".testi",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        scrub: true,
        // markers:true,
        start:"top 80%",
        end:"top 30%",
        trigger:".testi-div"
    }
})
gsap.from(".brit-img",{
    // x:-100,
    scale:1.2,
    // opacity:0,
    scrollTrigger:{
        scrub: true,
        // markers:true,
        start:"top 80%",
        end:"top 30%",
        trigger:".brit-div"
    }
})
gsap.from(".brit-text",{
    // x:-100,
    // scale:1.2,
    y:-50,
    opacity:0,
    scrollTrigger:{
        scrub: true,
        // markers:true,
        start:"top 80%",
        end:"top 30%",
        trigger:".brit-div"
    }
})

gsap.from(".orange",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        start:"top 70%",
        end:"bottom bottom",
        trigger:".last-div",
        // markers:true,
        scrub:true
     }
})

gsap.from(".palm",{
    x:200,
    opacity:0,

    onComplete(){
        gsap.from(".footer",{
            // x:200,
            y:20,
            delay:.5,
            opacity:0,
            // scrollTrigger:{
            //     start:"top 70%",
            //     end:"bottom bottom",
            //     trigger:".last-div",
            //     markers:true,
            //     scrub:true
            //  }
        })
    },
    scrollTrigger:{
        start:"top 70%",
        end:"bottom bottom",
        trigger:".last-div",
        // markers:true,
        scrub:true
     }
})

