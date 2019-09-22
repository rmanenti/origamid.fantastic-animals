import * as Configuration from './configuration.js';

export default class OpeningHours {

  constructor( target ) {
    this.element  = document.querySelector( target );
  }

  initialize() {

    if ( this.element !== undefined ) {
            
      this.weekdays = this.element.dataset.uiValueDays.split( ',' ).map( ( Number ) );
      this.hours    = this.element.dataset.uiValueTime.split( ',' ).map( ( Number ) );

      this.setState();
    }
  }

  setDate() {

    this.currentDate  = new Date();
    this.currentDay   = this.currentDate.getDay();
    this.currentHour  = this.currentDate.getUTCHours() - 3;
  }

  isOpen() {

    this.setDate();

    return ( 
              ( this.weekdays.indexOf( this.currentDay ) >= 0 )
                 && 
              ( this.currentHour >= this.hours[ 0 ] && this.currentHour < this.hours[ 1 ] ) 
           );
  }

    setState() {

        if ( this.isOpen() ) {
            this.element.classList.add( Configuration.classOpen );
        }
    }
}