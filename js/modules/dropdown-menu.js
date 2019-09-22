import * as Configuration from './configuration.js';
import      Events         from './events.js';

export default class DropdownMenu {

  constructor( target, events ) {

    this.menus   = document.querySelectorAll( target );

    if ( events === undefined ) {
      this.events = [ 'touchstart', 'click'];
    }
    else {
      this.events = events;
    }
  }

  initialize() {

    this.bindings();

    if ( this.menus.length ) {

      this.menus.forEach( ( menu ) => {

        this.events.forEach( ( event ) => {
          menu.addEventListener( event, this.show );
        } );
      } );
    }
  }

  show( e ) {

    e.preventDefault();

    const element = e.currentTarget;

    element.classList.add( Configuration.classActive );

    Events.outside( element, this.events, () => {
      element.classList.remove( Configuration.classActive );
    } );
  }

  bindings() {
    this.show = this.show.bind( this );
  }
}
