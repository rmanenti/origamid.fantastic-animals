import * as Configuration from './configuration.js';

export default function highlightScroll() {

    if ( document.querySelector( '[data-ui-component="scroll-highlight"]' ) ) {

        const uiScrollHighlightItems = document.querySelectorAll( '[data-ui-component="scroll-highlight"]' );

        function scrollHighlight() {
            
            uiScrollHighlightItems.forEach( ( item ) => {

                let visible = item.getBoundingClientRect().top - Configuration.windowHalfSize;

                if ( visible < 0 ) {
                    item.classList.add( Configuration.classActive );
                }
                else if ( item.classList.contains( Configuration.classActive )  ) {
                    item.classList.remove( Configuration.classActive );
                }
            } );
        }

        document.addEventListener( 'scroll', scrollHighlight );

        scrollHighlight();
    }
}