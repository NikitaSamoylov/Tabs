window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    //скопировать отсюда
    const fnTab = (selectorHead, selectorBody, selectorHeadActive, selectorBodyActive) => {
        const tabHead = document.querySelectorAll(selectorHead);
        const tabBody = document.querySelectorAll(selectorBody);
        
        tabHead.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabBody.forEach((content) => {
                    content.classList.remove(selectorBodyActive);
                });
                tabHead.forEach((tab) => {
                    tab.classList.remove(selectorHeadActive);
                })
                tabHead[index].classList.add(selectorHeadActive);
                tabBody[index].classList.add(selectorBodyActive);
            });
        });
    }
    fnTab('.tabs-head__item', '.tabs-body__item', 'tabs-head__item--is-active', 'tabs-body__item--is-active');
    // до сюда

});



