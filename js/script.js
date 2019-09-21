import      SmoothScroll    from './modules/smooth-scroll.js';
import      highlightScroll from './modules/highlight-scroll.js';
import      tab             from './modules/tab.js';
import      accordion       from './modules/accordion.js';
import      modal           from './modules/modal.js';
import      tooltip         from './modules/tooltip.js';
import      dropdownMenu    from './modules/dropdown-menu.js';
import      mobileMenu      from './modules/mobile-menu.js';
import      openingHours    from './modules/opening-hours.js';
import      fetchAnimals    from './modules/fetch-animals.js';
import      fetchBitcoin    from './modules/fetch-bitcoin.js';

tab();
accordion();
highlightScroll();
modal();
tooltip();
dropdownMenu();
mobileMenu();
openingHours();
fetchAnimals();
fetchBitcoin();

const smoothScroll = new SmoothScroll( '[data-ui-component="scroll-menu"] a[href^="#"]' );
smoothScroll.initialize();
