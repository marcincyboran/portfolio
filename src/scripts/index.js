import '../styles/index.scss';

import './chart';
import './images';
import './form';

document.querySelector('.main-nav__list').addEventListener('click', (ev) => {
    const switcher = document.querySelector('#menu-switcher');
    if (ev.target.classList.contains('main-nav__link') && switcher.checked ) {
        switcher.checked = false;
    }
});
