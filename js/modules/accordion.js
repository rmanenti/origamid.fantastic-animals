import * as Configuration from './configuration.js';

export default class Accordion {

  constructor( container ) {

    this.container = document.querySelector( container );
    this.items     = this.container.querySelectorAll( 'dt' );
  }

  initialize() {

    if ( this.items.length ) {

      this.items[ 0 ].classList.add( Configuration.classActive );
      this.items[ 0 ].nextElementSibling.classList.add( Configuration.classActive );

      this.items.forEach( ( item ) => {

        item.addEventListener( 'click', () => {
          this.toggle( item );
        } );
      } );
    }

    return this;
  }

  toggle( item ) {

    const description = item.nextElementSibling;

    item.classList.toggle( Configuration.classActive );
    description.classList.toggle( Configuration.classActive );
  }  
}
