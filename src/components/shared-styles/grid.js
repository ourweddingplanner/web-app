import { html } from '@polymer/lit-element';

export const GridSharedStyles = html`
<style>
    [class^="col-"] {
        display: grid;
        grid-auto-rows: minmax(100px, auto);
        grid-gap: 1rem;
    }

    @media (max-width: 575.98px) {
        .col-xs-1 {
            grid-template-columns: repeat(1, 1fr);
        }
    
        .col-xs-2 {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .col-xs-3 {
            grid-template-columns: repeat(3, 1fr);
        }
    
        .col-xs-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    
        .col-xs-5 {
            grid-template-columns: repeat(5, 1fr);
        }
        
        .col-xs-6 {
            grid-template-columns: repeat(6, 1fr);
        }
    
        .col-xs-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    
        .col-xs-8 {
            grid-template-columns: repeat(8, 1fr);
        }
    
        .col-xs-9 {
            grid-template-columns: repeat(9, 1fr);
        }
    
        .col-xs-10 {
            grid-template-columns: repeat(10, 1fr);
        }
    
        .col-xs-11 {
            grid-template-columns: repeat(11, 1fr);
        }
    
        .col-xs-12 {
            grid-template-columns: repeat(12, 1fr);
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        .col-sm-1 {
            grid-template-columns: repeat(1, 1fr);
        }
    
        .col-sm-2 {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .col-sm-3 {
            grid-template-columns: repeat(3, 1fr);
        }
    
        .col-sm-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    
        .col-sm-5 {
            grid-template-columns: repeat(5, 1fr);
        }
        
        .col-sm-6 {
            grid-template-columns: repeat(6, 1fr);
        }
    
        .col-sm-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    
        .col-sm-8 {
            grid-template-columns: repeat(8, 1fr);
        }
    
        .col-sm-9 {
            grid-template-columns: repeat(9, 1fr);
        }
    
        .col-sm-10 {
            grid-template-columns: repeat(10, 1fr);
        }
    
        .col-sm-11 {
            grid-template-columns: repeat(11, 1fr);
        }
    
        .col-sm-12 {
            grid-template-columns: repeat(12, 1fr);
        }
    }
    
    @media (min-width: 768px) and (max-width: 991.98px) {
        .col-md-1 {
            grid-template-columns: repeat(1, 1fr);
        }
    
        .col-md-2 {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .col-md-3 {
            grid-template-columns: repeat(3, 1fr);
        }
    
        .col-md-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    
        .col-md-5 {
            grid-template-columns: repeat(5, 1fr);
        }
        
        .col-md-6 {
            grid-template-columns: repeat(6, 1fr);
        }
    
        .col-md-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    
        .col-md-8 {
            grid-template-columns: repeat(8, 1fr);
        }
    
        .col-md-9 {
            grid-template-columns: repeat(9, 1fr);
        }
    
        .col-md-10 {
            grid-template-columns: repeat(10, 1fr);
        }
    
        .col-md-11 {
            grid-template-columns: repeat(11, 1fr);
        }
    
        .col-md-12 {
            grid-template-columns: repeat(12, 1fr);
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .col-lg-1 {
            grid-template-columns: repeat(1, 1fr);
        }
    
        .col-lg-2 {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .col-lg-3 {
            grid-template-columns: repeat(3, 1fr);
        }
    
        .col-lg-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    
        .col-lg-5 {
            grid-template-columns: repeat(5, 1fr);
        }
        
        .col-lg-6 {
            grid-template-columns: repeat(6, 1fr);
        }
    
        .col-lg-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    
        .col-lg-8 {
            grid-template-columns: repeat(8, 1fr);
        }
    
        .col-lg-9 {
            grid-template-columns: repeat(9, 1fr);
        }
    
        .col-lg-10 {
            grid-template-columns: repeat(10, 1fr);
        }
    
        .col-lg-11 {
            grid-template-columns: repeat(11, 1fr);
        }
    
        .col-lg-12 {
            grid-template-columns: repeat(12, 1fr);
        }
    }

    @media (min-width: 1200px) {
        .col-xl-1 {
            grid-template-columns: repeat(1, 1fr);
        }
    
        .col-xl-2 {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .col-xl-3 {
            grid-template-columns: repeat(3, 1fr);
        }
    
        .col-xl-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    
        .col-xl-5 {
            grid-template-columns: repeat(5, 1fr);
        }
        
        .col-xl-6 {
            grid-template-columns: repeat(6, 1fr);
        }
    
        .col-xl-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    
        .col-xl-8 {
            grid-template-columns: repeat(8, 1fr);
        }
    
        .col-xl-9 {
            grid-template-columns: repeat(9, 1fr);
        }
    
        .col-xl-10 {
            grid-template-columns: repeat(10, 1fr);
        }
    
        .col-xl-11 {
            grid-template-columns: repeat(11, 1fr);
        }
    
        .col-xl-12 {
            grid-template-columns: repeat(12, 1fr);
        }
    }

    .col-xs-up-1 {
        grid-template-columns: repeat(1, 1fr);
    }

    .col-xs-up-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .col-xs-up-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .col-xs-up-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .col-xs-up-5 {
        grid-template-columns: repeat(5, 1fr);
    }
    
    .col-xs-up-6 {
        grid-template-columns: repeat(6, 1fr);
    }

    .col-xs-up-7 {
        grid-template-columns: repeat(7, 1fr);
    }

    .col-xs-up-8 {
        grid-template-columns: repeat(8, 1fr);
    }

    .col-xs-up-9 {
        grid-template-columns: repeat(9, 1fr);
    }

    .col-xs-up-10 {
        grid-template-columns: repeat(10, 1fr);
    }

    .col-xs-up-11 {
        grid-template-columns: repeat(11, 1fr);
    }

    .col-xs-up-12 {
        grid-template-columns: repeat(12, 1fr);
    }

    @media (min-width: 576px) {
        .col-sm-up-1 {
            grid-template-columns: repeat(1, 1fr);
        }
    
        .col-sm-up-2 {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .col-sm-up-3 {
            grid-template-columns: repeat(3, 1fr);
        }
    
        .col-sm-up-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    
        .col-sm-up-5 {
            grid-template-columns: repeat(5, 1fr);
        }
        
        .col-sm-up-6 {
            grid-template-columns: repeat(6, 1fr);
        }
    
        .col-sm-up-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    
        .col-sm-up-8 {
            grid-template-columns: repeat(8, 1fr);
        }
    
        .col-sm-up-9 {
            grid-template-columns: repeat(9, 1fr);
        }
    
        .col-sm-up-10 {
            grid-template-columns: repeat(10, 1fr);
        }
    
        .col-sm-up-11 {
            grid-template-columns: repeat(11, 1fr);
        }
    
        .col-sm-up-12 {
            grid-template-columns: repeat(12, 1fr);
        }
    }
    
    @media (min-width: 768px) {
        .col-md-up-1 {
            grid-template-columns: repeat(1, 1fr);
        }
    
        .col-md-up-2 {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .col-md-up-3 {
            grid-template-columns: repeat(3, 1fr);
        }
    
        .col-md-up-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    
        .col-md-up-5 {
            grid-template-columns: repeat(5, 1fr);
        }
        
        .col-md-up-6 {
            grid-template-columns: repeat(6, 1fr);
        }
    
        .col-md-up-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    
        .col-md-up-8 {
            grid-template-columns: repeat(8, 1fr);
        }
    
        .col-md-up-9 {
            grid-template-columns: repeat(9, 1fr);
        }
    
        .col-md-up-10 {
            grid-template-columns: repeat(10, 1fr);
        }
    
        .col-md-up-11 {
            grid-template-columns: repeat(11, 1fr);
        }
    
        .col-md-up-12 {
            grid-template-columns: repeat(12, 1fr);
        }
    }

    @media (min-width: 992px) {
        .col-lg-up-1 {
            grid-template-columns: repeat(1, 1fr);
        }
    
        .col-lg-up-2 {
            grid-template-columns: repeat(2, 1fr);
        }
    
        .col-lg-up-3 {
            grid-template-columns: repeat(3, 1fr);
        }
    
        .col-lg-up-4 {
            grid-template-columns: repeat(4, 1fr);
        }
    
        .col-lg-up-5 {
            grid-template-columns: repeat(5, 1fr);
        }
        
        .col-lg-up-6 {
            grid-template-columns: repeat(6, 1fr);
        }
    
        .col-lg-up-7 {
            grid-template-columns: repeat(7, 1fr);
        }
    
        .col-lg-up-8 {
            grid-template-columns: repeat(8, 1fr);
        }
    
        .col-lg-up-9 {
            grid-template-columns: repeat(9, 1fr);
        }
    
        .col-lg-up-10 {
            grid-template-columns: repeat(10, 1fr);
        }
    
        .col-lg-up-11 {
            grid-template-columns: repeat(11, 1fr);
        }
    
        .col-lg-up-12 {
            grid-template-columns: repeat(12, 1fr);
        }
    }

</style>
`;