document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateSections() {
      sections.forEach(section => {
        if (isInViewport(section)) {
          section.classList.add('scroll-animation');
        } else {
          section.classList.remove('scroll-animation');
        }
      });
    }
  
    window.addEventListener('scroll', animateSections);
    window.addEventListener('resize', animateSections);
    animateSections(); // Pour afficher les éléments qui sont déjà dans le champ de la page lors du chargement initial
  });
  
  const menuHamburger = document.querySelector(".menu-hamburger")
  const navLinks = document.querySelector(".nav-links")

  menuHamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('mobile-menu')
  })