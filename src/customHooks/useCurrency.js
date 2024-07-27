const API_KEY = "9e7faf0971865e4c63148746"

export function useCurrencies () {

    const BASE_URL = "https://v6.exchangerate-api.com/v6"

    async function getCurrencies () {
        try {
            const req = await fetch( `${ BASE_URL }/${ API_KEY }/latest/USD` );
            const res = await req.json();
            return res.conversion_rates;
        } catch ( error ) {
            throw error;
        }
    }

    async function convertCurrency ( baseCurrency, targetCurrency ) {
        try {
            if ( baseCurrency == targetCurrency ) return 1;
            const req = await fetch( `${ BASE_URL }/${ API_KEY }/pair/${ baseCurrency }/${ targetCurrency }` )
            const res = await req.json();
            return res.conversion_rate;
        } catch ( error ) {
            throw error;
        }
    }


    function convertAmount ( amount, conversionRate ) {
        return ( amount * conversionRate ).toFixed( 2 );
    }

    return { getCurrencies, convertCurrency, convertAmount }

}