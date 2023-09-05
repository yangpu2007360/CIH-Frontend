import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(`pk_live_51Mp2ypFt8mEmrzFEbLdnL9JbnIYR25lRQI3bLkgYD4nebKuSyaNK5lZwpvyoAFAYJ57iL628mD1VNdLYaGs20OkX00RTeS62nV`);
    }
    return stripePromise;
};

export default getStripe;