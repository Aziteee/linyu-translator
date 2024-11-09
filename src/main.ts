import './style.css'
import 'virtual:uno.css'
import Alpine from 'alpinejs'
import Translator from './modules/translator'

window.Alpine = Alpine;

Alpine.data('translator', Translator);

Alpine.start();
