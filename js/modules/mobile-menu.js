import      configuration from './configuration.js';
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

        //Avoid click event to be triggered right after touch start.
        e.preventDefault();
        
        this.button.classList.add( configuration.getClass( 'active' ) );
        this.menu.classList.add( configuration.getClass( 'active' ) );

        Events.outside( this.menu, this.events, () => {

            this.button.classList.remove( configuration.getClass( 'active' ) );
            this.menu.classList.remove( configuration.getClass( 'active' ) );    
        } );
    }

    bindings() {
        this.open = this.open.bind( this );
    }
}