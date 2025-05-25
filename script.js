// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Initial load animations
const initialAnimations = gsap.timeline();

initialAnimations
    .from('.nav', {
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out'
    })
    .from('.heading', {
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out'
    }, '-=0.5')
    .from('.hero', {
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.5');

// Scroll animations
// Hero section animation
gsap.from('.hero', {
    y: 100,
    scale: 0.95,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.hero-div',
        start: 'top 60%',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play none none reverse'
    }
});

// Cards animations
gsap.from('.cards-1', {
    y: 100,
    scale: 0.95,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.page-2',
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.cards-2', {
    y: 100,
    scale: 0.95,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.page-3',
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play none none reverse'
    }
});

// Icons animations
const iconsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.icon-div',
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play none none reverse'
    }
});

iconsTimeline
    .from('.icon-1', {
        x: -50,
        opacity: 0,
        rotate: -30,
        duration: 1.2,
        ease: 'power2.out'
    })
    .from('.icon-2', {
        x: 50,
        opacity: 0,
        rotate: 30,
        duration: 1.2,
        ease: 'power2.out'
    }, '-=0.8')
    .from('.icon-3', {
        x: -50,
        opacity: 0,
        rotate: 30,
        duration: 1.2,
        ease: 'power2.out'
    }, '-=0.8')
    .from('.icon-4', {
        x: 50,
        opacity: 0,
        rotate: -30,
        duration: 1.2,
        ease: 'power2.out'
    }, '-=0.8')
    .from('.text-para', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power2.out'
    }, '-=0.8');

// Great section animation
gsap.from('.great', {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.great-div',
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play none none reverse'
    }
});

// Testimonials animation
gsap.from('.testi', {
    x: -50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.testi-div',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
        toggleActions: 'play none none reverse'
    }
});

// Britannia section animations
const britTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.brit-div',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
        toggleActions: 'play none none reverse'
    }
});

britTimeline
    .from('.brit-text', {
        y: -30,
        opacity: 0,
        duration: 1
    })
    .from('.brit-img', {
        scale: 1.1,
        opacity: 0,
        duration: 1
    }, '-=0.5');

// Last section animations
const lastSectionTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.last-div',
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play none none reverse'
    }
});

lastSectionTimeline
    .from('.orange', {
        x: -50,
        opacity: 0,
        duration: 1
    })
    .from('.palm', {
        x: 50,
        opacity: 0,
        duration: 1
    }, '-=0.5')
    .from('.footer', {
        y: 20,
        opacity: 0,
        duration: 1
    }, '-=0.5');

