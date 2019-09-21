import * as Configuration from './configuration.js';

export default function openingHours() {

    const element  = document.querySelector( '[data-ui-component="weekdays"]' ),
          weekdays = element.dataset.uiValueDays.split( ',' ).map( ( Number ) ),
          hours    = element.dataset.uiValueTime.split( ',' ).map( ( Number ) );

    let   currentDate  = new Date(),
          currentDay   = currentDate.getDay(),          
          currentHour  = currentDate.getHours();

    function isOpen() {

        currentDate  = new Date();
        currentDay   = currentDate.getDay();
        currentHour  = currentDate.getHours();

        return ( 
                  ( weekdays.indexOf( currentDay ) >= 0 )
                    && 
                  ( currentHour >= hours[ 0 ] && currentHour < hours[ 1 ] ) 
                );
    }

    function setState() {

        if ( isOpen() ) {
            element.classList.add( Configuration.classOpen );
        }
    }

    setState();
}