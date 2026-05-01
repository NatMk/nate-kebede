/* =========================================================
   Nate Kebede · Personal Site
   Behavior: theme, nav, reveal animations, counters, form
   ========================================================= */

(function () {
  'use strict';

  // ---------- Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------- Theme (dark / light) ----------
  const THEME_KEY = 'nk-theme';
  const themeToggle = $('#themeToggle');

  const applyTheme = (theme) => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const initTheme = () => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
      applyTheme(stored);
      return;
    }
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersLight ? 'light' : 'dark');
  };

  initTheme();

  themeToggle?.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  // ---------- Mobile Nav ----------
  const navToggle = $('#navToggle');
  const navLinks = $('.nav-links');

  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  $$('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------- Sticky Nav Shadow on Scroll ----------
  const navbar = $('#navbar');
  const onScroll = () => {
    if (window.scrollY > 12) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    const scrollTopBtn = $('#scrollTop');
    if (window.scrollY > 600) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Resume Dropdown ----------
  const resumeBtn = $('#resumeBtn');
  const resumeMenu = $('#resumeMenu');

  const closeResumeMenu = () => {
    resumeMenu?.classList.remove('open');
    resumeBtn?.setAttribute('aria-expanded', 'false');
  };

  resumeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = resumeMenu.classList.toggle('open');
    resumeBtn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!resumeMenu) return;
    if (!resumeMenu.contains(e.target) && e.target !== resumeBtn) {
      closeResumeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeResumeMenu();
  });

  // Close menu after a download click
  $$('#resumeMenu a').forEach((a) => a.addEventListener('click', closeResumeMenu));

  // ---------- Reveal-on-Scroll ----------
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach((el) => io.observe(el));
  } else {
    $$('.reveal').forEach((el) => el.classList.add('visible'));
  }

  // ---------- Counter Animation ----------
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimal, 10) || 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.floor(value);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = decimals > 0 ? target.toFixed(decimals) : target;
    };

    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    $$('.stat-number').forEach((el) => counterObserver.observe(el));
  }

  // ---------- Active Section Highlight ----------
  const sections = $$('main section[id]');
  const navMap = new Map();
  $$('.nav-links a').forEach((a) => {
    const id = a.getAttribute('href')?.replace('#', '');
    if (id) navMap.set(id, a);
  });

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = navMap.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navMap.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => sectionObserver.observe(s));
  }

  // ---------- Contact Form (mailto) ----------
  const form = $('#contactForm');
  const formSuccess = $('#formSuccess');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const subject = (data.get('subject') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if (!name || !email || !subject || !message) {
      form.reportValidity();
      return;
    }

    const body = `Hi Nate,\n\n${message}\n\nThanks,\n${name}\n${email}`;
    const href = `mailto:nkebe9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;

    if (formSuccess) {
      formSuccess.hidden = false;
      setTimeout(() => { formSuccess.hidden = true; }, 8000);
    }
    form.reset();
  });

  // ---------- Footer year ----------
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Prevent hash-only links from jumping ----------
  $$('a[data-no-link]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
})();
