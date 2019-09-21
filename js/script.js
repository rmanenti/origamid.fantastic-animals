import      SmoothScroll    from './modules/smooth-scroll.js';
import      highlightScroll from './modules/highlight-scroll.js';
import      Tab             from './modules/tab.js';
import      Accordion       from './modules/accordion.js';
import      modal           from './modules/modal.js';
import      tooltip         from './modules/tooltip.js';
import      dropdownMenu    from './modules/dropdown-menu.js';
import      mobileMenu      from './modules/mobile-menu.js';
import      openingHours    from './modules/opening-hours.js';
import      fetchAnimals    from './modules/fetch-animals.js';
import      fetchBitcoin    from './modules/fetch-bitcoin.js';

highlightScroll();
modal();
tooltip();
dropdownMenu();
mobileMenu();
openingHours();
fetchAnimals();
fetchBitcoin();

const tab = new Tab( '[data-ui-component="tab-menu"]' );
tab.initialize();

const accordion = new Accordion( '[data-ui-component="accordion"]' );
accordion.initialize();

const smoothScroll = new SmoothScroll( '[data-ui-component="scroll-menu"] a[href^="#"]' );
smoothScroll.initialize();
