import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePic from './modules/changePic';
import fieldsValidation from './modules/fieldsValidation';
import calc from './modules/calc';
import sendFormAll from './modules/sendFormAll';

// Timer
countTimer('07 september 2021');
// Меню
toggleMenu();
// Popup
togglePopup();
// Табы
tabs();
// Слайдер
slider();
// Смена фото
changePic();
// Валидация полей ввода
fieldsValidation();
// Калькулятор
calc();
// Ajax запрос
sendFormAll();
