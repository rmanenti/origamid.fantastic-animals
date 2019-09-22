import * as Configuration from './configuration.js';
import      Events         from './events.js';

export default class MobileMenu {

    constructor( button, menu, events ) {

        this.button = document.querySelector( button );
        this.menu   = document.querySelector( menu );

        if ( events === undefined ) {
          this.events = [ 'click', 'touchstart' ];
        }
        else {
            this.events = events;
        }
    }

    initialize() {

        this.bindings();

        if ( this.menu !== undefined ) {
        
            this.events.forEach( ( event ) => {
                this.button.addEventListener( event, this.open );
            } );
        }    
    }

    open( e ) {

        this.button.classList.add( Configuration.classActive );
        this.menu.classList.add( Configuration.classActive );

        Events.outside( this.menu, this.events, () => {

            this.button.classList.remove( Configuration.classActive );
            this.menu.classList.remove( Configuration.classActive );    
        } );
    }

    bindings() {
        this.open = this.open.bind( this );
    }
}