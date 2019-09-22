import * as Configuration from './configuration.js';

export default class ScrollHighlight {

    constructor( sections ) {

        this.sections = document.querySelectorAll( sections );
    }

    initialize() {

        this.bindings();

        if ( this.sections.length ) {

            document.addEventListener( 'scroll', this.highlight );
            this.highlight();
        }
    }

    highlight() {

        this.sections.forEach( ( item ) => {

            let visible = item.getBoundingClientRect().top - Configuration.windowHalfSize;

            if ( visible < 0 ) {
                item.classList.add( Configuration.classActive );
            }
            else if ( item.classList.contains( Configuration.classActive )  ) {
                item.classList.remove( Configuration.classActive );
            }
        } );
    }

    bindings() {
        this.highlight = this.highlight.bind( this );
    }
}
