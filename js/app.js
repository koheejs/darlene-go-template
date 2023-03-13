'use strict';

(function () {
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

(function () {
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
