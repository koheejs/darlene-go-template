'use strict';

/**
 * =================================================================
 * Mobile menu handling module
 * =================================================================
 */

(function menuMobile() {
  const classActive = 'active';
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('.header-nav');
  menuButton.addEventListener('click', function () {
    navigation.classList.toggle(classActive);
  });
})();

/**
 * =================================================================
 * Offering group accordion module
 * =================================================================
 */

(function offeringAccordion() {
  const offeringGroups = document.querySelectorAll('.solution-notes .note');

  function toggle(element, isShow) {
    const classAct = isShow ? 'add' : 'remove';
    element.classList[classAct]('active');
    const content = element.querySelector('.content .description');
    content.style.height = (isShow ? content.scrollHeight : 0) + 'px';
  }

  for (let i = 0; i < offeringGroups.length; i++) {
    const element = offeringGroups[i];
    element.addEventListener('click', function () {
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
 * Benefits description height
 * =================================================================
 */
(function benefitsHeight() {
  const keyBenefitsSection = document.getElementById('key-benefits');

  if (!keyBenefitsSection) {
    return;
  }

  const benefitDescriptions =
    keyBenefitsSection.getElementsByClassName('description');
  const arrayDescriptions = Array.from(benefitDescriptions);

  function adjustHeight() {
    arrayDescriptions.forEach((element) => {
      element.removeAttribute('style');
    });

    if (window.innerWidth <= 960) return;

    let maxHeight = arrayDescriptions[0].clientHeight;

    arrayDescriptions.forEach((element) => {
      maxHeight = Math.max(maxHeight, element.clientHeight);
    });

    arrayDescriptions.forEach((element) => {
      element.style.height = `${Math.ceil(maxHeight)}px`;
    });
  }

  window.addEventListener('resize', adjustHeight);
  window.dispatchEvent(new Event('resize'));
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
