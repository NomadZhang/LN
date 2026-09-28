(() => {
  'use strict';

  const ready = (callback) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  };

  const first = (selectors, root = document) => {
    for (const selector of selectors) {
      const element = root.querySelector(selector);
      if (element) return element;
    }
    return null;
  };

  const all = (selectors, root = document) => {
    const elements = [];
    selectors.forEach((selector) => {
      root.querySelectorAll(selector).forEach((element) => {
        if (!elements.includes(element)) elements.push(element);
      });
    });
    return elements;
  };

  const translations = {
    'nav.home': { zh: '首页', en: 'Home' },
    'nav.about': { zh: '关于我们', en: 'About' },
    'nav.work': { zh: '项目案例', en: 'Work' },
    'nav.contact': { zh: '联系我们', en: 'Contact' },
    'hero.eyebrow': { zh: '设计 · 技术 · 体验', en: 'Design · Technology · Experience' },
    'hero.title': { zh: '让想法发生。', en: 'Make ideas happen.' },
    'hero.description': { zh: '我们用清晰的策略与有温度的设计，打造值得被记住的数字体验。', en: 'We shape memorable digital experiences through clear strategy and thoughtful design.' },
    'hero.cta': { zh: '开始对话', en: 'Start a conversation' },
    'common.learnMore': { zh: '了解更多', en: 'Learn more' },
    'common.menu': { zh: '菜单', en: 'Menu' },
    'common.close': { zh: '关闭', en: 'Close' }
  };

  const pageTranslations = {
    '.skip-link': { zh: '跳转至主要内容', en: 'Skip to content' },
    '.hero__visual figcaption': { zh: '主视觉｜待提供真实案例素材', en: 'Hero visual | Real case-study asset to be provided' },
    '#work-title': { zh: '让作品先<br />说话', en: 'Let the work<br />speak' },
    '#work .section-heading > div > p': { zh: '从影像、品牌叙事到数字体验，每一帧都为真实的故事服务。', en: 'From film and brand narratives to digital experiences, every frame serves a real story.' },
    '.work-card__media': { zh: '待提供真实案例素材', en: 'Real case-study asset to be provided' },
    '.work-card:nth-child(1) .work-card__meta h3': { zh: '奢侈品与生活方式品牌内容', en: 'Luxury & lifestyle brand content' },
    '.work-card:nth-child(1) .work-card__meta p': { zh: '品牌内容', en: 'Brand content' },
    '.work-card:nth-child(2) .work-card__meta h3': { zh: '餐饮品牌活动内容', en: 'Food & hospitality campaigns' },
    '.work-card:nth-child(2) .work-card__meta p': { zh: '活动 / 社交内容', en: 'Campaigns / Social content' },
    '.work-card:nth-child(3) .work-card__meta h3': { zh: '教育品牌社交媒体策略', en: 'Education social strategy' },
    '.work-card:nth-child(3) .work-card__meta p': { zh: '策略 / 内容规划', en: 'Strategy / Content planning' },
    '.work-card:nth-child(4) .work-card__meta h3': { zh: '美容与健康内容制作', en: 'Beauty & wellness content' },
    '.work-card:nth-child(4) .work-card__meta p': { zh: '短视频 / 专业内容', en: 'Short-form / Expert content' },
    '.work-card:nth-child(5) .work-card__meta h3': { zh: '专业服务个人品牌', en: 'Professional personal brand' },
    '.work-card:nth-child(5) .work-card__meta p': { zh: '个人品牌 / 内容表达', en: 'Personal brand / Content expression' },
    '.work-card:nth-child(6) .work-card__meta h3': { zh: '创始人与顾问个人品牌', en: 'Founder & consultant brand' },
    '.work-card:nth-child(6) .work-card__meta p': { zh: '人物定位 / 品牌叙事', en: 'Positioning / Brand narrative' },
    '#services-title': { zh: '从概念到<br />落地', en: 'From concept<br />to reality' },
    '#experience-title': { zh: '经验构成<br />信任', en: 'Experience<br />builds trust' },
    '.experience__copy > p:first-child': { zh: 'LN 是一家位于新加坡的创意媒体与内容工作室。我们与品牌、创始人和文化团队并肩工作，把复杂的想法整理成清楚而有感染力的表达。', en: 'LN is a Singapore-based Creative Media & Content Studio. We work alongside brands, founders, and cultural teams to turn complex ideas into clear, compelling expression.' },
    '.experience__note': { zh: '合作伙伴与真实案例信息将在素材确认后更新。', en: 'Partner and case-study details will be updated once assets are confirmed.' },
    '#process-title': { zh: '一起把<br />故事做好', en: 'Make the story<br />matter' },
    '#process .section-heading > div > p': { zh: '清晰的过程，让创意保持开放，也保持向前。', en: 'A clear process keeps the creative open, focused, and moving forward.' },
    '#contact-title': { zh: '有故事<br />想要发光', en: 'Have a story<br />to illuminate' },
    '#contact h2 + p': { zh: '告诉我们你正在创造什么', en: 'Tell us what you’re making' },
    '.site-footer__top > p': { zh: '新加坡 · 创意媒体与内容工作室', en: 'Singapore · Creative Media & Content Studio' },
    '.site-footer__top > a': { zh: '回到顶部 ↑', en: 'Back to top ↑' },
    '.service-item:nth-child(1) h3': { zh: '社交媒体策略', en: 'Social media strategy' },
    '.service-item:nth-child(1) p': { zh: '品牌定位、内容支柱、平台方向与可执行的发布规划。', en: 'Brand positioning, content pillars, platform direction, and an executable publishing plan.' },
    '.service-item:nth-child(2) h3': { zh: '内容策划与管理', en: 'Content planning & management' },
    '.service-item:nth-child(2) p': { zh: '月度主题、脚本方向、标题、封面、文案和发布节奏规划。', en: 'Monthly themes, scripts, titles, covers, copy, and publishing rhythms.' },
    '.service-item:nth-child(3) h3': { zh: '短视频制作', en: 'Short-form video production' },
    '.service-item:nth-child(3) p': { zh: '从概念、脚本、拍摄到剪辑，制作适合社交平台传播的短视频内容。', en: 'From concept and script to shoot and edit, create short-form content for social platforms.' },
    '.service-item:nth-child(4) h3': { zh: '视频剪辑与后期', en: 'Video editing & post-production' },
    '.service-item:nth-child(4) p': { zh: '将已有素材、采访、活动记录或手机素材整理成可发布内容。', en: 'Shape existing footage, interviews, events, or phone footage into publishable content.' },
    '.service-item:nth-child(5) h3': { zh: '品牌叙事与个人品牌', en: 'Brand narrative & personal brand' },
    '.service-item:nth-child(5) p': { zh: '帮助品牌或专业人士建立清晰、可信、持续的内容表达。', en: 'Build a clear, credible, and consistent expression for brands and professionals.' },
    '.service-item:nth-child(6) h3': { zh: '公司介绍 / 提案 / 网站文案', en: 'Company profiles / proposals / website copy' },
    '.service-item:nth-child(6) p': { zh: '优化公司介绍、销售资料、提案结构和网站表达，让客户更快理解价值。', en: 'Clarify company profiles, sales materials, proposals, and website copy so value is understood faster.' },
    '.process-list li:nth-child(1) h3': { zh: '了解需求', en: 'Understand' },
    '.process-list li:nth-child(1) p': { zh: '通过初步沟通了解品牌、目标客户、当前内容问题和项目目标。', en: 'Understand the brand, audience, content challenges, and project goals through an initial conversation.' },
    '.process-list li:nth-child(2) h3': { zh: '制定方向', en: 'Set direction' },
    '.process-list li:nth-child(2) p': { zh: '确认内容策略、平台方向、主题、制作形式和时间安排。', en: 'Confirm the content strategy, platform direction, themes, formats, and timeline.' },
    '.process-list li:nth-child(3) h3': { zh: '内容制作', en: 'Make the content' },
    '.process-list li:nth-child(3) p': { zh: '进行脚本、拍摄、剪辑、设计、文案等制作工作。', en: 'Develop the scripts, shoot, edit, design, and write the content.' },
    '.process-list li:nth-child(4) h3': { zh: '优化调整', en: 'Refine and optimise' },
    '.process-list li:nth-child(4) p': { zh: '根据反馈和内容表现持续调整方向、选题、形式和表达方式。', en: 'Refine direction, topics, formats, and expression based on feedback and performance.' }
  };

  const getLanguage = () => document.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'zh';

  const setLanguage = (language) => {
    const nextLanguage = language === 'en' ? 'en' : 'zh';
    document.documentElement.lang = nextLanguage === 'en' ? 'en' : 'zh-CN';
    document.documentElement.dataset.language = nextLanguage;

    all(['[data-i18n]', '[data-i18n-key]']).forEach((element) => {
      const key = element.dataset.i18n || element.dataset.i18nKey;
      const value = translations[key]?.[nextLanguage];
      if (value) {
        if (element.matches('input, textarea')) element.placeholder = value;
        else element.textContent = value;
      }
    });

    all(['[data-zh]', '[data-en]']).forEach((element) => {
      const value = element.dataset[nextLanguage];
      if (value) {
        element.textContent = value;
        if (element.classList.contains('hero__intro')) element.classList.toggle('hero__intro--en-active', nextLanguage === 'en');
      }
    });

    Object.entries(pageTranslations).forEach(([selector, copy]) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.innerHTML = copy[nextLanguage];
      });
    });

    document.title = nextLanguage === 'en' ? 'LN — Creative Media & Content Studio' : 'LN — 创意媒体与内容工作室';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', nextLanguage === 'en'
      ? 'LUMINOUS NARRATIVE PTE. LTD. — Singapore-based Creative Media & Content Studio.'
      : 'LUMINOUS NARRATIVE PTE. LTD. — 新加坡创意媒体与内容工作室。');
    const navigation = document.querySelector('#primary-navigation');
    if (navigation) navigation.setAttribute('aria-label', nextLanguage === 'en' ? 'Primary navigation' : '主导航');

    all(['[data-lang]']).forEach((control) => {
      const active = control.dataset.lang === nextLanguage;
      control.classList.toggle('is-active', active);
      control.setAttribute('aria-pressed', String(active));
    });

    all(['[data-language-toggle]', '#language-toggle', '.language-toggle']).forEach((control) => {
      control.setAttribute('aria-label', nextLanguage === 'en' ? '切换为中文' : 'Switch to English');
    });

    try { localStorage.setItem('ln-language', nextLanguage); } catch (_) { /* storage may be unavailable */ }
  };

  const initLanguage = () => {
    let savedLanguage = null;
    try { savedLanguage = localStorage.getItem('ln-language'); } catch (_) { /* ignore */ }

    const controls = all(['[data-lang]']);
    controls.forEach((control) => {
      control.addEventListener('click', () => {
        setLanguage(control.dataset.lang || control.dataset.language);
      });
    });

    all(['[data-language-toggle]', '#language-toggle', '.language-toggle']).forEach((control) => {
      control.addEventListener('click', () => setLanguage(getLanguage() === 'en' ? 'zh' : 'en'));
    });

    setLanguage(savedLanguage === 'en' ? 'en' : getLanguage());
  };

  const initMenu = () => {
    const toggle = first(['[data-menu-toggle]', '#menu-toggle', '.menu-toggle', '.nav-toggle']);
    const menu = first(['[data-mobile-menu]', '#mobile-menu', '.mobile-menu', '.site-nav', 'nav']);
    if (!toggle || !menu) return;

    const closeMenu = () => {
      menu.classList.remove('is-open', 'open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      menu.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    }, { passive: true });
  };

  const initReveal = () => {
    const targets = all(['[data-reveal]', '.reveal', '.animate-on-scroll']);
    if (!targets.length) return;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((element) => element.classList.add('is-visible', 'visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible', 'visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach((element) => observer.observe(element));
  };

  const initCurrentNav = () => {
    const links = all(['nav a[href^="#"]', '[data-nav-link][href^="#"]']);
    const sections = links.map((link) => document.getElementById(link.getAttribute('href').slice(1))).filter(Boolean);
    if (!links.length || !sections.length) return;

    const activate = (id) => links.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .forEach((entry) => activate(entry.target.id));
      }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.5, 0.9] });
      sections.forEach((section) => observer.observe(section));
    }
  };

  const initContact = () => {
    const contactSelectors = ['[data-contact-cta]', '.contact-cta', 'a[href="#contact"]', 'a[href="#联系"]'];
    all(contactSelectors).forEach((cta) => cta.addEventListener('click', (event) => {
      const target = first(['[data-contact-section]', '#contact', '#联系', '.contact-section']);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      target.querySelector('input, textarea, button')?.focus({ preventScroll: true });
    }));

    document.querySelectorAll('form').forEach((form) => form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = getLanguage() === 'en' ? 'Thanks — we will be in touch soon.' : '感谢留言，我们会尽快与您联系。';
    }));
  };

  const initYear = () => all(['[data-current-year]', '.current-year', '#current-year']).forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  ready(() => {
    initMenu();
    initLanguage();
    initReveal();
    initCurrentNav();
    initYear();
    initContact();
  });
})();
