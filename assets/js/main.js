// Main site JavaScript
(function() {
  'use strict';

  // Smooth scrolling for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          // Close mobile menu if open
          const navToggle = document.getElementById('nav-toggle');
          if (navToggle) {
            navToggle.checked = false;
          }
          
          // Smooth scroll to target
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          history.pushState(null, null, href);
        }
      });
    });
  }

  // Mobile menu toggle
  function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
      // Close menu when clicking a link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navToggle.checked = false;
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (navToggle.checked && 
            !e.target.closest('.navbar') && 
            !e.target.closest('.nav-toggle-label')) {
          navToggle.checked = false;
        }
      });
    }
  }

  // Add active class to nav items based on scroll position
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0) return;
    
    function updateActiveLink() {
      let current = '';
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
  }

  // Animate elements on scroll
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements with animation classes
    document.querySelectorAll('.project-card, .about-card, .tech-category, .achievement-card').forEach(el => {
      observer.observe(el);
    });
  }

  // Header scroll behavior
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Hide header on scroll down, show on scroll up
      if (currentScroll > lastScroll && currentScroll > 500) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      
      lastScroll = currentScroll;
    });
  }

  // Handle hash navigation on page load
  function initHashNavigation() {
    // Prevent automatic scrolling to hash on initial page load
    // The browser naturally scrolls to hash fragments, but we want to start at the top
    
    // If there's a hash in the URL and we just loaded the page
    if (window.location.hash && !sessionStorage.getItem('allowHashScroll')) {
      // Temporarily remove the hash to prevent browser scroll
      const hash = window.location.hash;
      history.replaceState(null, null, ' '); // Clear hash without page reload
      
      // Restore the hash after a moment, so it's in the URL but doesn't trigger scroll
      setTimeout(() => {
        history.replaceState(null, null, hash);
      }, 0);
    }
    
    // Mark that the page has loaded, future hash navigation should work normally
    sessionStorage.setItem('allowHashScroll', 'true');
  }

  // Initialize all features when DOM is ready
  function init() {
    initSmoothScroll();
    initMobileMenu();
    initScrollSpy();
    initScrollAnimations();
    initHeaderScroll();
    initHashNavigation();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
