export default function fetchBitcoin() {

    let wrapper    = document.querySelector( '.bitcoin-donation' ),
        request = fetch( 'https://blockchain.info/ticker' );

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