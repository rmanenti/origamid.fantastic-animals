class Configuration {

    constructor() {

        this.components = {
            reference : 'data-ui-component',
            selector  : '[data-ui-component="%s"]'
        }

        this.classes = {
            active : 'ativo',
            open   : 'aberto'
        };
    }

    getSelector( type, reference ) {

        switch( type ) {

            case 'class' :
                return `.${this.classes[ reference]}`;

            case 'component' :
                return this.components.selector.replace( '%s', reference );
        }
    }

    getClass( c ) {
        return this.classes[ c ];
    }

    getWindowHalfSize() {
        return window.innerHeight * 0.6;
    }
}

export default new Configuration();