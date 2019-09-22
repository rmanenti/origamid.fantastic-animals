import      SmoothScroll    from './modules/smooth-scroll.js';
import      highlightScroll from './modules/highlight-scroll.js';
import      Tab             from './modules/tab.js';
import      Accordion       from './modules/accordion.js';
import      Modal           from './modules/modal.js';
import      Tooltip         from './modules/tooltip.js';
import      dropdownMenu    from './modules/dropdown-menu.js';
import      mobileMenu      from './modules/mobile-menu.js';
import      openingHours    from './modules/opening-hours.js';
import      fetchAnimals    from './modules/fetch-animals.js';
import      fetchBitcoin    from './modules/fetch-bitcoin.js';

highlightScroll();
dropdownMenu();
mobileMenu();
openingHours();
fetchAnimals( '.grid-numbers', './js/api/animals-api.json' );
fetchBitcoin();

const tooltip = new Tooltip( '[data-ui-component="tooltip"]' );
tooltip.initialize();

const modal = new Modal( '[data-ui-component="modal"]', '[data-ui-action="open-modal"]', '[data-ui-action="close-modal"]' );
modal.initialize();

const tab = new Tab( '[data-ui-component="tab-menu"]' );
tab.initialize();

const accordion = new Accordion( '[data-ui-component="accordion"]' );
accordion.initialize();

const smoothScroll = new SmoothScroll( '[data-ui-component="scroll-menu"] a[href^="#"]' );
smoothScroll.initialize();
