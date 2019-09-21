export default class SmoothScroll {

  constructor( reference, options ) {
    
    this.items = document.querySelectorAll( reference );

    if ( options === undefined ) {

      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }
  }

  initialize() {

    this.bindings();

    if ( this.items.length ) {

      this.items.forEach( ( item ) => {
        item.addEventListener( 'click', this.scroll );
      } );
    }
    return this;
  }

  scroll( e ) {

    e.preventDefault();

    const item    = e.currentTarget;
    const ref     = item.getAttribute( 'href' );
    const section = document.querySelector( ref );

    section.scrollIntoView( this.options );
  }

  bindings() {
    this.scroll = this.scroll.bind( this );
  }
}
