import * as Configuration from './configuration.js';

export default class Numbers {

    constructor( reference, observerTarget ) {

        this.numbers = document.querySelectorAll( reference );
        this.observerTarget = document.querySelector( observerTarget );

        console.log( this.observerTarget);
    }

    initialize() {

        this.bindings();
        this.observe();
        return this;
    }

    static increment( n ) {

        let start = 0;

        const total = +n.innerText;
        const incremented = Math.floor( total / 100 );
        const timer = setInterval( () => {
        
            start = start + incremented;
            n.innerText = start;
    
            if ( start > total ) {

                n.innerText = start;
                clearInterval( timer );
            }
        }, 25 * Math.random() );
    }

    animate() {       

        this.numbers.forEach( ( number ) => {
            this.constructor.increment( number );            
        } );
    }

    mutation( m ) {

        console.log( m )

        if ( m[ 0 ].target.classList.contains( Configuration.classActive ) ) {
            
            this.observer.disconnect();
            this.animate();
        }
    }

  observe() {
    console.log( this.observerTarget );

      this.observer = new MutationObserver( this.mutation );
      this.observer.observe( this.observerTarget, { attributes : true } );
  }

  bindings() {
    this.mutation = this.mutation.bind( this );
  }
}