import './../scss/index.scss';
import { toggleMenuNav } from './menu';
import { toggleModalForm } from './modal/modal';
import { submitModalForm } from './modal/submit';

toggleMenuNav(document.querySelector("#menu-button"));

toggleModalForm(document.querySelector("#button-form"), document.querySelector('#modal-close'));
submitModalForm(document.querySelector('#modal-from'));