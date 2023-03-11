'use strict';

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
