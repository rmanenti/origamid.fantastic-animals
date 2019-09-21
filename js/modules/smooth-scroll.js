export default function smoothScroll() {

    if ( document.querySelector( '[data-ui-component="scroll-menu"]' ) ) {

        const uiScrollMenu      = document.querySelector( '[data-ui-component="scroll-menu"]' ),
            uiScrollMenuItems = uiScrollMenu.querySelectorAll( 'a[href^="#"]' );

        function scrollMenuTo( e ) {

            e.preventDefault();

            let item    = e.currentTarget,
                ref     = item.getAttribute( 'href' ),
                section = document.querySelector( ref ),
                top     = section.offsetTop;

            /*
            window.scrollTo( {
                left: 0,
                top: top,
                behavior: "smooth"
            } );
            */

            section.scrollIntoView( {
                behavior : 'smooth',
                block : 'start'
            } );
        }

        uiScrollMenuItems.forEach( ( item ) => {
            item.addEventListener( 'click', scrollMenuTo );
        } );
    }
}