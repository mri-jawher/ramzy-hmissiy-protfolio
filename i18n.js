// Multi-language translation system
class I18n {
  constructor() {
    this.currentLanguage = localStorage.getItem('lang') || 'en';
    this.translations = {};
    this.initializeLanguageSwitcher();
  }

  async loadTranslations() {
    try {
      const response = await fetch('/i18n.json');
      this.translations = await response.json();
      this.applyTranslations();
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.langs span');
    langButtons.forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.textContent.toLowerCase();
        this.setLanguage(lang);
      });
    });
    
    // Set initial active language
    this.updateActiveLanguage();
  }

  setLanguage(lang) {
    if (['en', 'fr', 'ar'].includes(lang)) {
      this.currentLanguage = lang;
      localStorage.setItem('lang', lang);
      this.updateActiveLanguage();
      this.applyTranslations();
      
      // Update HTML lang and dir attributes
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  updateActiveLanguage() {
    const langButtons = document.querySelectorAll('.langs span');
    langButtons.forEach(button => {
      const lang = button.textContent.toLowerCase();
      button.classList.toggle('active', lang === this.currentLanguage);
    });
  }

  get(key, defaultValue = key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue;
      }
    }
    
    return value || defaultValue;
  }

  applyTranslations() {
    // Apply translations to navigation
    this.translateElement('[data-i18n="nav.home"]', 'nav.home');
    this.translateElement('[data-i18n="nav.about"]', 'nav.about');
    this.translateElement('[data-i18n="nav.teaching"]', 'nav.teaching');
    this.translateElement('[data-i18n="nav.experience"]', 'nav.experience');
    this.translateElement('[data-i18n="nav.education"]', 'nav.education');
    this.translateElement('[data-i18n="nav.communities"]', 'nav.communities');

    // Hero section
    this.translateElement('[data-i18n="hero.kicker"]', 'hero.kicker');
    this.translateElement('[data-i18n="hero.headline"]', 'hero.headline');
    this.translateElement('[data-i18n="hero.stat1_value"]', 'hero.stat1_value');
    this.translateElement('[data-i18n="hero.stat1_label"]', 'hero.stat1_label');
    this.translateElement('[data-i18n="hero.stat2_value"]', 'hero.stat2_value');
    this.translateElement('[data-i18n="hero.stat2_label"]', 'hero.stat2_label');
    this.translateElement('[data-i18n="hero.stat3_value"]', 'hero.stat3_value');
    this.translateElement('[data-i18n="hero.stat3_label"]', 'hero.stat3_label');
    this.translateElement('[data-i18n="hero.stat4_value"]', 'hero.stat4_value');
    this.translateElement('[data-i18n="hero.stat4_label"]', 'hero.stat4_label');

    // About section
    this.translateElement('[data-i18n="about.eyebrow"]', 'about.eyebrow');
    this.translateElement('[data-i18n="about.title"]', 'about.title');
    this.translateElement('[data-i18n="about.description"]', 'about.description');

    // Competencies section
    this.translateElement('[data-i18n="competencies.eyebrow"]', 'competencies.eyebrow');
    this.translateElement('[data-i18n="competencies.title"]', 'competencies.title');
    this.translateElement('[data-i18n="competencies.subtitle"]', 'competencies.subtitle');

    // Projects section
    this.translateElement('[data-i18n="projects.eyebrow"]', 'projects.eyebrow');
    this.translateElement('[data-i18n="projects.title"]', 'projects.title');

    // Teaching section
    this.translateElement('[data-i18n="teaching.eyebrow"]', 'teaching.eyebrow');
    this.translateElement('[data-i18n="teaching.title"]', 'teaching.title');

    // Experience section
    this.translateElement('[data-i18n="experience.eyebrow"]', 'experience.eyebrow');
    this.translateElement('[data-i18n="experience.title"]', 'experience.title');
    this.translateElement('[data-i18n="experience.subtitle"]', 'experience.subtitle');

    // Education section
    this.translateElement('[data-i18n="education.eyebrow"]', 'education.eyebrow');
    this.translateElement('[data-i18n="education.title"]', 'education.title');

    // Communities section
    this.translateElement('[data-i18n="communities.eyebrow"]', 'communities.eyebrow');
    this.translateElement('[data-i18n="communities.title"]', 'communities.title');

    // Footer
    this.translateElement('[data-i18n="footer.title"]', 'footer.title');
    this.translateElement('[data-i18n="footer.description"]', 'footer.description');
    this.translateElement('[data-i18n="footer.copyright"]', 'footer.copyright');
    this.translateElement('[data-i18n="footer.location"]', 'footer.location');
    this.translateElement('[data-i18n="footer.theme_toggle"]', 'footer.theme_toggle');
    this.translateElement('[data-i18n="footer.cv_download"]', 'footer.cv_download');
    this.translateElement('[data-i18n="footer.menu"]', 'footer.menu');
  }

  translateElement(selector, key) {
    const elements = document.querySelectorAll(selector);
    const value = this.get(key);
    
    elements.forEach(element => {
      if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
        if (element.placeholder) {
          element.placeholder = value;
        } else {
          element.textContent = value;
        }
      } else {
        element.textContent = value;
      }
    });
  }

  t(key) {
    return this.get(key);
  }
}

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
  window.i18n.loadTranslations();
});
