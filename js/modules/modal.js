import * as Configuration from './configuration.js';

export default function modal() {

    const buttonOpen = document.querySelector( '[data-ui-action="open-modal"]' ),
          buttonClose = document.querySelector( '[data-ui-action="close-modal"]' ),

          modalContainer = document.querySelector( '[data-ui-component="modal"]' );

    if ( modalContainer ) {

        function state( e ) {
            
            e.preventDefault();
            modalContainer.classList.toggle( Configuration.classActive );
        }

        function out( e ) {
            
            if ( e.target === this ) {
                state( e );
            }
        }

        buttonOpen.addEventListener( 'click', state );
        buttonClose.addEventListener( 'click', state );
        modalContainer.addEventListener( 'click', out );
    }    
}