import * as Configuration from './configuration.js';
import      Events         from './events.js';

export default function dropdownMenu() {

  const menus  = document.querySelectorAll( '[data-ui-component="dropdown-menu"]' );
  const events = [ 'touchstart', 'click'];

  function show( e ) {

    e.preventDefault();

    this.classList.add( Configuration.classActive );

    Events.outside( this, events, () => {
      this.classList.remove( Configuration.classActive );
    } );
  }

  menus.forEach( ( menu ) => {

    events.forEach( ( event ) => {
      menu.addEventListener( event, show );
    } );
  } );
}
