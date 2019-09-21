import * as Configuration from './configuration.js';
import      Events         from './events.js';

export default function mobileMenu() {

    const btn    = document.querySelector( '[data-ui-component="mobile-menu-button"]' ),
          list   = document.querySelector( '[data-ui-component="mobile-menu-list"]' ),
          events = [ 'click', 'touchstart' ];

    function open( e ) {

        btn.classList.add( Configuration.classActive );
        list.classList.add( Configuration.classActive );

        Events.outside( list, events, () => {

            btn.classList.remove( Configuration.classActive );
            list.classList.remove( Configuration.classActive );    
        } );
    }

    if ( list ) {
        
        events.forEach( ( evento ) => {
            btn.addEventListener( evento, open );
        } );
    }
}