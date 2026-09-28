/**
 * HP DIESEL SERVICE - Script Minimalista
 * WhatsApp: (94) 99184-1829
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_PHONE = '5594991841829';

  // 1. WhatsApp helper
  function openWhatsApp(message) {
    const encoded = encodeURIComponent(message.trim());
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  }

  // 2. All WhatsApp buttons
  document.querySelectorAll('[data-wa-msg]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(btn.getAttribute('data-wa-msg'));
    });
  });

  // 3. Reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });
    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // 4. Accordion FAQ
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.accordion-item');
      const content = parent.querySelector('.accordion-content');
      const icon = trigger.querySelector('.accordion-icon');
      const isOpen = content.classList.contains('is-open');

      // Close all others
      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) c.classList.remove('is-open');
      });
      document.querySelectorAll('.accordion-icon').forEach(i => {
        if (i !== icon) i.classList.remove('rotated');
      });

      if (!isOpen) {
        content.classList.add('is-open');
        if (icon) icon.classList.add('rotated');
      } else {
        content.classList.remove('is-open');
        if (icon) icon.classList.remove('rotated');
      }
    });
  });

  // 5. Mobile menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // 6. Navbar scroll shadow
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 7. Tracking support
  window.trackWhatsAppLead = function(serviceLabel) {
    console.log(`[Tracking] Lead: ${serviceLabel}`);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        'event_category': 'WhatsApp',
        'event_label': serviceLabel,
        'value': 1.0
      });
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Contact', { content_name: serviceLabel });
    }
  };

  document.querySelectorAll('[data-wa-msg]').forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.getAttribute('data-tracking-label') || 'Geral';
      window.trackWhatsAppLead(label);
    });
  });
});
