import configuration from './configuration.js';

export default class Tooltip {

  constructor( reference ) {

    this.tooltips = document.querySelectorAll( reference );

    this.options = {
      gap: 25,
    };
  }

  initialize() {

    // Binding the class to the callbacks.
    this.bindings();

    if ( this.tooltips.length ) {

      this.tooltips.forEach( ( tooltip ) => {
        tooltip.addEventListener( 'mouseover', this.over );
      } );
    }

    return this;
  }

  move( e ) {

    const width = ( this.tooltip.offsetWidth + ( this.options.gap * 2 ) );

    this.tooltip.style.top = `${e.pageY + this.options.gap}px`;

    if ( ( e.pageX + width ) > window.innerWidth ) {
      this.tooltip.style.left = `${e.pageX - width}px`;
    } else {
      this.tooltip.style.left = `${e.pageX + this.options.gap}px`;        
    }
  }

  leave( e ) {

    const target = e.currentTarget;

    this.tooltip.remove();
    target.removeEventListener( 'mouseleave', this.leave );
    target.removeEventListener( 'mousemove', this.move );
  }

  over( e ) {

    const target = e.currentTarget;

    this.create( target );
    this.tooltip.style.top = `${e.pageY}px`;
    this.tooltip.style.left = `${e.pageX}px`;

    target.addEventListener( 'mouseleave', this.leave );
    target.addEventListener( 'mousemove', this.move );
  }

  create( e ) {

    const box = document.createElement( 'div' );
    const text = e.getAttribute( 'aria-label' );

    box.classList.add( 'tooltip', configuration.getClass( 'active' ) );
    box.innerText = text;

    document.body.appendChild( box );

    this.tooltip = box;
  }

  bindings() {

    this.move    = this.move.bind( this );
    this.over    = this.over.bind( this );
    this.leave   = this.leave.bind( this );
  }
}
