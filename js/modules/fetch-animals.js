import      Numbers         from './numbers.js';

export default function fetchAnimals() {

  const wrapper    = document.querySelector( '.grid-numbers' );
  const structure  = {
    element  : 'div',
    class  : 'animal-numbers',
    children : [
      {
        element : 'h3'
      },
                {
                    element : 'span',
                    class : [ 'animal-numbers-span', 'second-span-class' ],              
                    data    : [
                        {
                            name  : 'uiComponent',
                            value : 'numbers',
                        }
                    ]
                }
            ]
        };
    const request = fetch( './js/api/animals-api.json' );

    request.then( ( response ) => {
          return response.json();
      } )
      .then( ( animals ) => {

          animals.forEach( ( animal ) => {
            create( animal );
          } );

          const n = new Numbers( '[data-ui-component="numbers"]', '.numeros' );
          n.initialize();
      } );

    function create( animal ) {

        const node = document.createElement( structure.element );

        if ( Array.isArray( structure.classes ) ) {
            node.classList.add( ...structure.classes );
        }
        else {
            node.classList.add( structure.class );
        }

        if ( structure.children ) {

            structure.children.forEach( ( child, index ) => {

                let childNode = document.createElement( child.element ); 

                if ( child.class ) {

                    if ( Array.isArray( child.class ) ) {
                        childNode.classList.add( ...child.class );
                    }
                    else {
                        childNode.classList.add( child.class );
                    }
                }

                if ( child.data ) {

                    child.data.forEach( ( d ) => {
                        childNode.dataset[ d.name ] = d.value;
                    } );
                }

                node.appendChild( childNode );
            } );
        }

        node.querySelector( 'h3' ).textContent = animal.species;
        node.querySelector( 'span' ).textContent = animal.total;

        wrapper.appendChild( node );
    }
}


