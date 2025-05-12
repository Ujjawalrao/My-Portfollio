const mode = document.querySelector("#mode");
const body = document.querySelector("#body");
const sun = document.getElementById("mode");
// Function to apply theme
function applyTheme(theme) {
  if (theme === "dark") {
    mode.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
    body.style.background = "#101111";
    body.style.color = "white";
    sun.style.color = "white";
  } else {
    mode.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>';
    body.style.background = "white";
    body.style.color = "black";
    sun.style.color = "black";
  }
}
// Load saved theme or default to light
let modeValue = localStorage.getItem("theme") || "light";
applyTheme(modeValue);
// Toggle theme on click and save it
mode.addEventListener("click", () => {
  modeValue = modeValue === "light" ? "dark" : "light";  
  localStorage.setItem("theme", modeValue);
  applyTheme(modeValue);
});
// scroll to top
window.onload = function () {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};

// lenis for smooth

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});
lenis.on('scroll', (e) => {
  // console.log(e);
});

// ----------GSAP animation----------

gsap.from('#profile', {
  y:"20px",
  opacity:.1,
  duration:1,
  filter:"blur(50px)",
  transition:'esay-in'

})
gsap.from('#About', {
  y:"40px",
  opacity:0,
  delay:.3,
  duration:.6,
  filter:"blur(10px)",
  transition:'esay-in'
})
// Tech stack
gsap.from('#tech', {
  y:60,
  opacity:0,
  duration:.5,
  transition:'esay-in',
  scrollTrigger:{
    scroller:'body',
    trigger:'#tech',
    // markers:true,
    start:'top 85%',
    end:'top 40%',
  }
})
  gsap.from("#tech .tech-box", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".tech-box",
      // markers: true,
      start: "top 70%",
      end: "top 40%",
     
    },
  });
// Project
  gsap.from('#Project-title', {
    y:60,
    opacity:0,
    duration:.5,
    transition:'esay-in',
    scrollTrigger:{
      scroller:'body',
      trigger:'#Project-title',
      // markers:true,
      start:'top 85%',
      end:'top 40%',
    }
  })
  gsap.from('#Project-1', {
    y:60,
    opacity:0,
    duration:.5,
    transition:'esay-in',
    scrollTrigger:{
      scroller:'body',
      trigger:'#Project-1',
      // markers:true,
      start:'top 70%',
      end:'top 40%',
    }
  })
  gsap.from('#Project-2', {
    y:60,
    opacity:0,
    duration:.5,
    transition:'esay-in',
    scrollTrigger:{
      scroller:'body',
      trigger:'#Project-2',
      // markers:true,
      start:'top 70%',
      end:'top 40%',
    }
  })
  gsap.from('#Project-3', {
    y:60,
    opacity:0,
    duration:.5,
    transition:'esay-in',
    scrollTrigger:{
      scroller:'body',
      trigger:'#Project-3',
      // markers:true,
      start:'top 70%',
      end:'top 40%',
    }
  })
  gsap.from('#Project-4', {
    y:60,
    opacity:0,
    duration:.5,
    transition:'esay-in',
    scrollTrigger:{
      scroller:'body',
      trigger:'#Project-4',
      // markers:true,
      start:'top 70%',
      end:'top 40%',
    }
  })
// soft skills
gsap.from('#soft-skill-title', {
  y:60,
  opacity:0,
  duration:.5,
  transition:'esay-in',
  scrollTrigger:{
    scroller:'body',
    trigger:'#soft-skill-title',
    // markers:true,
    start:'top 95%',
    end:'top 80%'
  }
})
// Contact
gsap.from('#Contact', {
  y:60,
  opacity:0,
  duration:.5,
  transition:'esay-in',
  scrollTrigger:{
    scroller:'body',
    trigger:'#Contact',
    // markers:true,
    start:'top 105%',
    end:'top 80%'
  }
})