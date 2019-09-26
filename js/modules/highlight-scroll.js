import      configuration from './configuration.js';
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
                top     : ( section.offsetTop - configuration.getWindowHalfSize() ),
            };            
        } );
    }

    highlight() {

        this.distances.forEach( ( section ) => {

            if ( window.pageYOffset > section.top ) {
                section.element.classList.add( configuration.getClass( 'active' ) );
            }
            else if ( section.element.classList.contains( configuration.getClass( 'active' ) )  ) {
                section.element.classList.remove( configuration.getClass( 'active' ) );
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
