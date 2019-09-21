import * as Configuration from './configuration.js';

export default function tab() {

    if ( document.querySelector( '[data-ui-component="tab-menu"]' ) ) {

        const uiTab        = document.querySelector( '[data-ui-component="tab-menu"]' ),
            uiTabOptions = uiTab.querySelectorAll( 'li' ), 
            uiTabContent = document.querySelector( '[data-ui-component="tab-content"]' ),
            uiTabContentSections = uiTabContent.querySelectorAll( 'section' );

        uiTabContentSections[ 0 ].classList.add( Configuration.classActive );

        function activate( index ) {

            uiTabContentSections.forEach( ( section ) => {
                section.classList.remove( Configuration.classActive );
            } );

            const direction = uiTabContentSections[ index ].dataset.anime;

            uiTabContentSections[ index ].classList.add( Configuration.classActive, direction );
        }

        uiTabOptions.forEach( ( option, index ) => {

            option.addEventListener( 'click', ( e ) => {
                activate( index );
            } );
        } );

        uiTabContentSections.forEach( ( section, index ) => {

            if ( index % 2 === 0 ) {
                section.dataset.anime = 'show-right';
            }
            else {
                section.dataset.anime = 'show-down';
            }
        } );
    }
}