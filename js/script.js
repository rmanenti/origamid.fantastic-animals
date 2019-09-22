import      SmoothScroll    from './modules/smooth-scroll.js';
import      ScrollHighlight from './modules/highlight-scroll.js';
import      Tab             from './modules/tab.js';
import      Accordion       from './modules/accordion.js';
import      Modal           from './modules/modal.js';
import      Tooltip         from './modules/tooltip.js';
import      DropdownMenu    from './modules/dropdown-menu.js';
import      MobileMenu      from './modules/mobile-menu.js';
import      openingHours    from './modules/opening-hours.js';
import      fetchAnimals    from './modules/fetch-animals.js';
import      fetchBitcoin    from './modules/fetch-bitcoin.js';


openingHours();
fetchAnimals( '.grid-numbers', './js/api/animals-api.json' );
fetchBitcoin( '.bitcoin-donation', 'https://blockchain.info/ticker' );

const dropdownMenu = new DropdownMenu( '[data-ui-component="dropdown-menu"]' );
dropdownMenu.initialize();

const mobileMenu = new MobileMenu( '[data-ui-component="mobile-menu-button"]', '[data-ui-component="mobile-menu-list"]' );
mobileMenu.initialize();

const scrollHighlight = new ScrollHighlight( '[data-ui-component="scroll-highlight"]' );
scrollHighlight.initialize();

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
