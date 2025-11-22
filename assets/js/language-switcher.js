// Language Switcher Module
(function() {
  'use strict';

  const DEFAULT_LANGUAGE = 'en';
  let currentLanguage = DEFAULT_LANGUAGE;

  // Get language from localStorage or default
  function getStoredLanguage() {
    return localStorage.getItem('portfolio_language') || DEFAULT_LANGUAGE;
  }

  // Save language to localStorage
  function saveLanguage(lang) {
    localStorage.setItem('portfolio_language', lang);
  }

  // Get translation for a key path (e.g., 'nav.home')
  function getTranslation(keyPath, lang = currentLanguage) {
    const keys = keyPath.split('.');
    let value = translations[lang];
    
    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        return keyPath; // Return key if translation not found
      }
    }
    
    return value || keyPath;
  }

  // Update all elements with data-i18n attribute
  function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getTranslation(key);
      
      if (translation) {
        element.textContent = translation;
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
  }

  // Create language selector dropdown
  function createLanguageSelector() {
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;

    const languages = [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'it', name: 'Italiano', flag: '🇮🇹' }
    ];

    const langItem = document.createElement('li');
    langItem.className = 'nav-item language-selector';
    
    const langButton = document.createElement('button');
    langButton.className = 'nav-link lang-button';
    langButton.setAttribute('aria-label', 'Select Language');
    langButton.setAttribute('aria-haspopup', 'true');
    langButton.setAttribute('aria-expanded', 'false');
    
    // Set initial flag
    const currentLang = languages.find(l => l.code === currentLanguage);
    langButton.innerHTML = `<span class="lang-flag">${currentLang.flag}</span> <span class="lang-code">${currentLang.code.toUpperCase()}</span>`;
    
    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.setAttribute('role', 'menu');
    
    languages.forEach(lang => {
      const option = document.createElement('button');
      option.className = 'lang-option';
      option.setAttribute('data-lang', lang.code);
      option.setAttribute('role', 'menuitem');
      option.innerHTML = `<span class="lang-flag">${lang.flag}</span> ${lang.name}`;
      
      if (lang.code === currentLanguage) {
        option.classList.add('active');
      }
      
      option.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setLanguage(lang.code);
        langButton.innerHTML = `<span class="lang-flag">${lang.flag}</span> <span class="lang-code">${lang.code.toUpperCase()}</span>`;
        dropdown.classList.remove('show');
        langButton.setAttribute('aria-expanded', 'false');
        
        // Update active state
        dropdown.querySelectorAll('.lang-option').forEach(opt => {
          opt.classList.remove('active');
        });
        option.classList.add('active');
        
        // Close mobile menu if open
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) {
          navToggle.checked = false;
        }
      });
      
      dropdown.appendChild(option);
    });
    
    langButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = dropdown.classList.toggle('show');
      langButton.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!langItem.contains(e.target)) {
        dropdown.classList.remove('show');
        langButton.setAttribute('aria-expanded', 'false');
      }
    });
    
    langItem.appendChild(langButton);
    langItem.appendChild(dropdown);
    nav.appendChild(langItem);
  }

  // Set language and update page
  function setLanguage(lang) {
    if (translations[lang]) {
      currentLanguage = lang;
      saveLanguage(lang);
      updatePageContent();
    }
  }

  // Initialize language system
  function init() {
    // Get stored language or default
    currentLanguage = getStoredLanguage();
    
    // Create language selector
    createLanguageSelector();
    
    // Update page content with current language
    updatePageContent();
  }

  // Expose global function for external use
  window.setLanguage = setLanguage;
  window.getCurrentLanguage = () => currentLanguage;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
