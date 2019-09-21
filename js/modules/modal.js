import * as Configuration from './configuration.js';

export default class Modal {

  constructor( modal, btnOpen, btnClose ) {

    this.container = document.querySelector( modal );
    this.btnOpen   = document.querySelector( btnOpen );
    this.btnClose  = document.querySelector( btnClose );
  }

  initialize() {

    this.bindings();

    if ( this.container && this.btnOpen && this.btnClose ) {

      this.btnOpen.addEventListener( 'click', this.state );
      this.btnClose.addEventListener( 'click', this.state );
      this.container.addEventListener( 'click', this.out );
    }

    return this;
  }

  state( e ) {

    e.preventDefault();
    this.container.classList.toggle( Configuration.classActive );
  }

  out( e ) {

    if ( e.target === this.container ) {
      this.state( e );
    }
  }

  bindings() {
    this.state = this.state.bind( this );
    this.out   = this.out.bind( this );
  }
}
