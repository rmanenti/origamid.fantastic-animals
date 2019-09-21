import * as Configuration from './configuration.js';

export default function numbers() {

    function animate() {

        const numbers = document.querySelectorAll( '[data-ui-component="numbers"]' );

        numbers.forEach( ( number ) => {
            
            let start = 0;

            const total = +number.innerText,
                increment = Math.floor( total / 100 ),
                timer = setInterval( () => {
            
                start = start + increment;
                number.innerText = start;
        
                if ( start > total ) {

                    number.innerText = start;
                    clearInterval( timer );
                }
            }, 25 * Math.random() );
        } );
    }

    function mutation( mutation ) {

        if ( mutation[ 0 ].target.classList.contains( Configuration.classActive ) ) {
            
            observer.disconnect();
            animate();
        }
    }

    const observer = new MutationObserver( mutation ),
          observed = document.querySelector( '.numeros' );

    observer.observe( observed, { attributes : true } );
}