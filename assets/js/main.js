// Main site JavaScript
(function() {
  'use strict';

  // Scroll Progress Indicator
  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // Animate skill progress bars when they come into view
  function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    if (skillBars.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          if (width) {
            entry.target.style.width = width + '%';
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '0px'
    });

    skillBars.forEach(bar => {
      bar.style.width = '0%';
      observer.observe(bar);
    });
  }

  // Reveal animations on scroll
  function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .cv-timeline-item');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active', 'visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // Counter animation for stat numbers
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-counter');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const text = target.innerText;
          const match = text.match(/(\d+)/);
          
          if (match) {
            const finalNumber = parseInt(match[0]);
            const suffix = text.replace(match[0], '');
            let current = 0;
            const increment = finalNumber / 30;
            const timer = setInterval(() => {
              current += increment;
              if (current >= finalNumber) {
                target.innerText = finalNumber + suffix;
                clearInterval(timer);
              } else {
                target.innerText = Math.floor(current) + suffix;
              }
            }, 30);
          }
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

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
    if (window.location.hash && !window.sessionStorage.getItem('vgs_initial_load_complete')) {
      // Temporarily remove the hash to prevent browser scroll
      const hash = window.location.hash;
      // Use current pathname and search to maintain URL structure
      history.replaceState(null, null, window.location.pathname + window.location.search);
      
      // Restore the hash after a moment, so it's in the URL but doesn't trigger scroll
      setTimeout(() => {
        history.replaceState(null, null, window.location.pathname + window.location.search + hash);
      }, 0);
    }
    
    // Mark that the page has loaded, future hash navigation should work normally
    window.sessionStorage.setItem('vgs_initial_load_complete', 'true');
  }

  // 3D tilt effect for cards
  function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      });
    });
  }

  // Initialize all features when DOM is ready
  function init() {
    initSmoothScroll();
    initMobileMenu();
    initScrollSpy();
    initScrollAnimations();
    initHeaderScroll();
    initHashNavigation();
    initScrollProgress();
    initSkillBars();
    initRevealAnimations();
    animateCounters();
    initTiltEffect();
    
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
