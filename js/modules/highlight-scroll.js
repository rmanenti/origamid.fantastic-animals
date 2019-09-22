import * as Configuration from './configuration.js';
import      Events         from './events.js';

export default class ScrollHighlight {

    constructor( sections ) {

        this.sections = document.querySelectorAll( sections );
    }

    initialize() {

        this.bindings();

        if ( this.sections.length ) {

            this.getDistances();

            document.addEventListener( 'scroll', this.highlight );
            this.highlight();
        }
    }

    getDistances() {

        this.distances = [...this.sections].map( ( section ) => {
            return {
                element : section,
                top     : ( section.offsetTop - Configuration.windowHalfSize ),
            };            
        } );
    }

    highlight() {

        this.distances.forEach( ( section ) => {

            if ( window.pageYOffset > section.top ) {
                section.element.classList.add( Configuration.classActive );
            }
            else if ( section.element.classList.contains( Configuration.classActive )  ) {
                section.element.classList.remove( Configuration.classActive );
            }
        } );
    }

    discard() {
        window.removeEventListener( this.highlight );
    }

    bindings() {
        this.highlight = Events.debounce( this.highlight.bind( this ), 100 );
    }
}
