import { useProvider as useDataProvider } from 'context/data/provider';

const useValidate = () => {

    const [ data, dataDispatch ] = useDataProvider();


    const validateCardholderName = () => {
        const cardholderName = data.form.fields.cardholderName.value;
        let isValid = true
        if (cardholderName.length < 3) isValid = false;
        if (/[^a-zA-Z\s]/.test(cardholderName)) isValid = false;
        isValid ? dataDispatch({ type: 'REMOVE_ERROR_STYLE', payload: { field: 'cardholderName' } }) : dataDispatch({ type: 'ADD_ERROR_STYLE', payload: { field: 'cardholderName' }});
        return isValid ? true : false;
    };

    const validateCardNumber = () => {
        const cardNumber = data.form.fields.cardNumber.value;
        let isValid = true;
        if (cardNumber.length < 19) isValid = false;
        if (cardNumber.length > 19) isValid = false;
        isValid ? dataDispatch({ type: 'REMOVE_ERROR_STYLE', payload: { field: 'cardNumber' } }) : dataDispatch({ type: 'ADD_ERROR_STYLE', payload: { field: 'cardNumber' }});
        return isValid ? true : false;
    };

    const validateExpDateMonth = () => {
        const expDateMonth = data.form.fields.expDateMonth.value;
        let isValid = true;
        if (/[a-zA-Z\s]/.test(expDateMonth)) isValid = false;
        if (expDateMonth.length < 2) isValid = false;
        if (expDateMonth.length > 3 ) isValid = false;
        if (parseInt(expDateMonth) > 12) isValid = false;
        isValid ? dataDispatch({ type: 'REMOVE_ERROR_STYLE', payload: { field: 'expDateMonth' } }) : dataDispatch({ type: 'ADD_ERROR_STYLE', payload: { field: 'expDateMonth' }});
        return isValid ? true : false;
    };  

    const validateExpDateYear = () => {
        const expDateYear = data.form.fields.expDateYear.value;
        const currentYear = parseInt(new Date().getFullYear().toString().slice(-2));
        let isValid = true;
        if (/[a-zA-Z\s]/.test(expDateYear)) isValid = false;
        if (expDateYear.length < 2) isValid = false;
        if (expDateYear.length > 3 ) isValid = false;
        if (expDateYear < currentYear) isValid = false;
        if (expDateYear > currentYear + 5) isValid = false;
        isValid ? dataDispatch({ type: 'REMOVE_ERROR_STYLE', payload: { field: 'expDateYear' } }) : dataDispatch({ type: 'ADD_ERROR_STYLE', payload: { field: 'expDateYear' }});
        return isValid ? true : false;
    }; 

    const validateCvc = () => {
        const cvc = data.form.fields.cvc.value;
        let isValid = true;
        if (/[a-zA-Z\s]/.test(cvc)) isValid = false;
        if (cvc.length < 3) isValid = false;
        if (cvc.length > 4 ) isValid = false;
        isValid ? dataDispatch({ type: 'REMOVE_ERROR_STYLE', payload: { field: 'cvc' } }) : dataDispatch({ type: 'ADD_ERROR_STYLE', payload: { field: 'cvc' }});
        return isValid ? true : false;
    };

    return {
        validateCardholderName,
        validateCardNumber,
        validateExpDateMonth,
        validateExpDateYear,
        validateCvc,
    };
    
};

export default useValidate;