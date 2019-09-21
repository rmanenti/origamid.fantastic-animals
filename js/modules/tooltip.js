import * as Configuration from './configuration.js';

export default function tooltip() {

    const tooltips = document.querySelectorAll( '[data-ui-component="tooltip"]' ),
          move = {

            gap     : 25,
            tooltip : null,
            element : null,

            handleEvent( e ) {

                this.tooltip.style.top = ( e.pageY + this.gap ) + 'px';
                this.tooltip.style.left = ( e.pageX + this.gap ) + 'px';            
            }
        },
        discard = {

                tooltip : null,
                element : null,

                handleEvent( e ) {

                    this.tooltip.remove();
                    this.element.removeEventListener( 'mouseleave', discard );
                    this.element.removeEventListener( 'mousemove', move );
                }
        };

    tooltips.forEach( ( tooltip ) => {
        tooltip.addEventListener( 'mouseover', over );    
    } );

    function over( e ) {
        
        let box,    
            id;

        box = create( this );
        box.style.top = e.pageY + 'px';
        box.style.left = e.pageX + 'px';

        discard.tooltip = box;
        discard.element = this;
        this.addEventListener( 'mouseleave', discard );

        move.tooltip = box;
        move.element = this;
        this.addEventListener( 'mousemove', move );

        
    }

    function create( e ) {

        const box = document.createElement( 'div' ),
            text = e.getAttribute( 'aria-label' );

        box.classList.add( 'tooltip', Configuration.classActive );
        box.innerText = text;

        document.body.appendChild( box );

        return box;
    }
}