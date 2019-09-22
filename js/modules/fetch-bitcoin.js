export default function fetchBitcoin( target, url ) {

    if ( !url.startsWith( 'https' ) ) {
        return;
    }

    let wrapper    = document.querySelector( target ),
        request = fetch( url );

    request.then( response => {
                return response.json();
            } )
            .then( result => {

                let value = ( 1000 / result.BRL.buy ).toFixed( 4 );

                wrapper.textContent = value.toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } );
            } )
            .catch( e => {
                Error( e );
            } );
}