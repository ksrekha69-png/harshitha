document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Toggle icon between ☰ and ✕
      if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '&times;';
      } else {
        hamburger.innerHTML = '&#9776;';
      }
    });
  }

  // 3. Scroll Animations using Intersection Observer
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('is-visible');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 85)) {
        displayScrollElement(el);
      }
    })
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Trigger once on load
  handleScrollAnimation();

  // 4. Dynamic Title Typing Effect (Only on index.html)
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const words = ["Web Developer", "Designer", "Problem Solver"];
    let i = 0;
    let timer;

    const typingEffect = () => {
      let word = words[i].split("");
      var loopTyping = () => {
        if (word.length > 0) {
          typingElement.innerHTML += word.shift();
        } else {
          setTimeout(deletingEffect, 2000);
          return false;
        }
        timer = setTimeout(loopTyping, 100);
      };
      loopTyping();
    };

    const deletingEffect = () => {
      let word = words[i].split("");
      var loopDeleting = () => {
        if (word.length > 0) {
          word.pop();
          typingElement.innerHTML = word.join("");
        } else {
          if (words.length > (i + 1)) {
            i++;
          } else {
            i = 0;
          }
          typingEffect();
          return false;
        }
        timer = setTimeout(loopDeleting, 50);
      };
      loopDeleting();
    };

    typingEffect();
  }
});
