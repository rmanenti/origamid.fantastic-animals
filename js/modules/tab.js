import configuration from './configuration.js';

export default class Tab {

  constructor( container ) {

    this.container = document.querySelector( container );
  }

  initialize() {

    if ( this.container !== undefined ) {

      this.tabOptions  = this.container.querySelectorAll( 'li' );
      this.tabContent  = document.querySelector( '[data-ui-component="tab-content"]' );
      this.tabSections = this.tabContent.querySelectorAll( 'section' );
      this.tabSections[ 0 ].classList.add( configuration.getClass( 'active' ) );

      this.tabOptions.forEach( ( option, index ) => {

        option.addEventListener( 'click', ( e ) => {
          this.activate( index );
        } );
      } );

      this.tabSections.forEach( ( section, index ) => {

        if ( index % 2 === 0 ) {
          section.dataset.anime = 'show-right';
        }
        else {
          section.dataset.anime = 'show-down';
        }
      } );
    }

    return this;
  }

  activate( index ) {

    this.tabSections.forEach( ( section ) => {
      section.classList.remove( configuration.getClass( 'active' ) );
    } );

    const direction = this.tabSections[ index ].dataset.anime;
    this.tabSections[ index ].classList.add( configuration.getClass( 'active' ), direction );
  }
}
