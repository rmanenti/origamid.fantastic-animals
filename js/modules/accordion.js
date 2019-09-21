import * as Configuration from './configuration.js';

export default function accordion() {

  function activate() {

    const item        = this;
    const description = this.nextElementSibling;

    item.classList.toggle( Configuration.classActive );
    description.classList.toggle( Configuration.classActive );
  }

  if ( document.querySelector( '[data-ui-component="accordion"]' ) ) {

    const uiAccordion      = document.querySelector( '[data-ui-component="accordion"]' );
    const uiAccordionItems = uiAccordion.querySelectorAll( 'dt' );

    uiAccordionItems[ 0 ].classList.add( Configuration.classActive );
    uiAccordionItems[ 0 ].nextElementSibling.classList.add( Configuration.classActive );

    uiAccordionItems.forEach( ( item ) => {
      item.addEventListener( 'click', activate );
    } );
  }
}
