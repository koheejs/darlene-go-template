'use strict';

/**
 * =================================================================
 * Mobile menu handling module
 * =================================================================
 */

(function menuMobile() {
  const classFreezeBody = 'freeze-body';
  const classActive = 'active';

  const body = document.body;
  const mobileMenuButton = document.querySelector('.mobile-button');
  const mobileMenu = document.querySelector('.mobile-nav');

  mobileMenuButton.addEventListener('click', function () {
    body.classList.toggle(classFreezeBody);
    mobileMenu.classList.toggle(classActive);
  });
})();

/**
 * =================================================================
 * Offering group accordion module
 * =================================================================
 */

(function offeringAccordion() {
  const offeringGroups = document.querySelectorAll('.offering-group');

  function toggle(element, isShow) {
    const classAct = isShow ? 'add' : 'remove';
    element.classList[classAct]('active');
    const content = element.querySelector('.content');
    content.style.height = (isShow ? content.scrollHeight : 0) + 'px';
  }

  for (let i = 0; i < offeringGroups.length; i++) {
    const element = offeringGroups[i];
    element.addEventListener('click', function () {
      offeringGroups.forEach((item, index) => {
        if (index === i) return;
        toggle(item);
      });

      if (!this.classList.contains('active')) {
        toggle(this, true);
      } else {
        toggle(this);
      }
    });
  }
})();

/**
 * =================================================================
 * Solution platforms carousel module
 * =================================================================
 */

(function platformCarousel() {
  if (!window.Swiper) return;

  const swiper = new Swiper('.solution-platforms', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,

    coverflowEffect: {
      rotate: 30,
      stretch: 50,
      depth: 2,
      modifier: 1,
      slideShadows: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})();

/**
 * =================================================================
 * Count up animation effects module
 * =================================================================
 */

(function countUpAnimate() {
  if (!window.CountUp) return;

  const yearsAnim = new CountUp('years', 7);
  const expAnim = new CountUp('experience', 60, { suffix: '+' });
  const membersAnim = new CountUp('members', 100, { suffix: '+' });

  const handleIntersection = ([entry]) => {
    if (entry.isIntersecting) {
      const elementId = entry.target.id;
      switch (elementId) {
        case 'years':
          yearsAnim.start();
          break;
        case 'experience':
          expAnim.start();
          break;
        case 'members':
          membersAnim.start();
          break;
      }
    }
  };

  const intersectionOptions = {
    root: null,
    threshold: 0,
  };

  // Start observing the target element
  const yearsNumber = document.getElementById('years');
  const expNumber = document.getElementById('experience');
  const membersNumber = document.getElementById('members');

  const yearsObserver = new window.IntersectionObserver(
    handleIntersection,
    intersectionOptions
  );

  const expObserver = new window.IntersectionObserver(
    handleIntersection,
    intersectionOptions
  );

  const membersObserver = new window.IntersectionObserver(
    handleIntersection,
    intersectionOptions
  );

  yearsObserver.observe(yearsNumber);
  expObserver.observe(expNumber);
  membersObserver.observe(membersNumber);
})();

/**
 * =================================================================
 * Feedback carousel module
 * =================================================================
 */

(function feedbackCarousel() {
  if (!window.Swiper) return;

  const swiper = new Swiper('#testimonial-feedbacks', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.testimonial-button-next',
      prevEl: '.testimonial-button-prev',
    },
  });
})();
