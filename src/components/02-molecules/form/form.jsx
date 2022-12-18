import './form.scss';
import { useProvider as useDataProvider } from 'context/data/provider';
import Input from 'components/01-atoms/input/input';
import Label from 'components/01-atoms/label/label';
import Button from 'components/01-atoms/button/button';
import useFormat from 'hooks/format';
import useValidate from 'hooks/validate';

const Form = ({ className }) => {

	const [ data, dataDispatch ] = useDataProvider();
	const { formatCardNumber, formatCardholderName, formatExpDate, formatCvc } = useFormat();
	const { validateCardholderName, validateCardNumber, validateExpDateMonth, validateExpDateYear, validateCvc } = useValidate();
	
	const handleSubmit = (event) => {
		event.preventDefault();
    const isValid = validateInputs();
		if (isValid) dispatchForm();
	};
	
	const dispatchForm = () => {
		dataDispatch({ type: 'SET_SUBMITTED', payload: { value: true } } ) 
	};

    const validateInputs = () => {
        let isValid = true;
        console.log(validateCardNumber());
				if (!validateCardholderName()) isValid = false;
				if (!validateCardNumber()) isValid = false;
				if (!validateExpDateMonth()) isValid = false;
				if (!validateExpDateYear()) isValid = false;
				if (!validateCvc()) isValid = false;
				return isValid;
			};

    return (
        <form className={`${ className } form`} onSubmit={ (event) => handleSubmit(event) }>
            <fieldset className="form__item item__cardholder-name">
                <Label className="form__label">Cardholder Name</Label>
                <Input 
                    className={` form__input ${ data.form.activeField === 'cardholderName' ? 'input--active' : '' } ${ data.form.fields.cardholderName.hasError ? 'input--error' : '' } `}
                    value={ formatCardholderName(data.form.fields.cardholderName.value) } 
                    maxLength={ 30 }
                    errorMessage={ 'Please enter a valid name' }
                    type={ "text" }
                    onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'cardholderName' } } ) } 
                    onFocus={ () => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'cardholderName' } } ) }  
                    />
            </fieldset>
            <fieldset className="form__item item__card-number">
                <Label className="form__label">Card Number</Label>
                <Input 
                    className={` form__input ${ data.form.activeField === 'cardNumber' ? 'input--active' : '' } ${ data.form.fields.cardNumber.hasError ? 'input--error' : '' } `}
                    type={ "text" }
                    maxLength={ 19 }
                    errorMessage={ 'Please enter a valid format' }
                    value={ formatCardNumber(data.form.fields.cardNumber.value) } 
                    onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'cardNumber' } } ) } 
                    onFocus={ () => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'cardNumber' } } ) }  
                />
            </fieldset>
            <fieldset className="form__item item__exp-date">
                <Label className="form__label">Exp. Date (MM/YY)</Label>
                    <div className="form__wrapper">
                    <Input 
                        className={` form__input input--center ${ data.form.activeField === 'expDateMonth' ? 'input--active' : '' } ${ data.form.fields.expDateMonth.hasError ? 'input--error' : '' } `}
                        maxLength={ 2 }
                        type={ "text" }
                        value={ formatExpDate(data.form.fields.expDateMonth.value) } 
                        onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'expDateMonth' } } ) } 
                        onFocus={ () => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'expDateMonth' } } ) }  
                    />
                    <Input 
                        className={` form__input input--center ${ data.form.activeField === 'expDateYear' ? 'input--active' : '' } ${ data.form.fields.expDateYear.hasError ? 'input--error' : '' } `}
                        maxLength={ 2 }
                        type={ "text" }
                        value={ formatExpDate(data.form.fields.expDateYear.value) } 
                        onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'expDateYear' } } ) } 
                        onFocus={ () => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'expDateYear' } } ) }  
                    />
                </div>
            </fieldset>
            <fieldset className="form__item item__cvc">
                <Label className="form__label">CVC</Label>
                <Input 
                    className={` form__input input--center ${ data.form.activeField === 'cvc' ? 'input--active' : '' } ${ data.form.fields.cvc.hasError ? 'input--error' : '' }`}
                    maxLength={ 3 }
                    type={ "text" }
                    value={ formatCvc(data.form.fields.cvc.value) } 
                    onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'cvc' } } ) } 
                    onFocus={ () => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'cvc' } } ) }  
                />
            </fieldset>
            <Button className="form__button" type="submit">Confirm</Button>
        </form>
    );

};

export default Form;