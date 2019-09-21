export default {

  outside : function( element, events, callback ) {

    const html    = document.documentElement;

    function hoc( e ) {

        if ( !element.contains( e.target ) ) {

        delete element.dataset.outside;

        events.forEach( ( event ) => {
            html.removeEventListener( event, hoc );
        } );

        callback();
        }
    }

    if ( !element.hasAttribute( 'data-outside' ) ) {

        events.forEach( ( event ) => {

        setTimeout( () => {
            html.addEventListener( event, hoc );
        } );
        } );

        element.dataset.outside = '';
    }
  }
};
