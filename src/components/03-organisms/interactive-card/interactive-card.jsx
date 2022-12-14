import './interactive-card.scss';
import Input from 'components/01-atoms/input/input';
import Label from 'components/01-atoms/label/label';
import Button from 'components/01-atoms/button/button';
import Shadows from 'components/01-atoms/shadows/shadows'
import { useProvider as useDataProvider } from 'context/data/provider';

const InteractiveCard = () => {

	const [data, dataDispatch] = useDataProvider();
	
	return (
		<div className="interactive-card">
				<div className="interactive-card__preview preview">
					<Shadows className="preview__shadows" />
					<div className="preview__card-container">
						<div className="preview__card card__front front">
							<Shadows className="front__shadows" />
							<figure className="front__dot dot--big"></figure>
							<figure className="front__dot dot--small"></figure>
							<p className="front__card-number">{ data.form.fields.cardNumber.value }</p>
							<p className="front__cardholder-name">{ data.form.fields.cardholderName.value }</p>
							<div className="front__exp-date exp-date">
								<p className="exp-date__month">{ data.form.fields.expDateMonth.value }</p>
								<p className="exp-date__separator">/</p>
								<p className="exp-date__year">{ data.form.fields.expDateYear.value }</p>
							</div>
						</div>
						<div className="preview__card card__back back">
							<div className="back__magnetic-stripe"></div>
							<div className="back__cvc cvc">
								<p className="cvc__value">{ data.form.fields.cvc.value }</p>
							</div>
						</div>
					</div>
				</div>
				<div className="interactive-card__controller controller">
					<form className="controller__form form">
						<fieldset className="form__item item__cardholder-name">
							<Label className="form__label">Cardholder Name</Label>
							<Input 
								className={` form__input ${ data.form.activeField === 'cardholderName' ? 'input--active' : '' } `}
								value={ data.form.fields.cardholderName.value } 
								onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'cardholderName' } } ) } 
								onFocus={ (event) => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'cardholderName' } } ) }  
							/>
						</fieldset>
						<fieldset className="form__item item__card-number">
							<Label className="form__label">Card Number</Label>
							<Input 
								className={` form__input ${ data.form.activeField === 'cardNumber' ? 'input--active' : '' } `}
								value={ data.form.fields.cardNumber.value } 
								onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'cardNumber' } } ) } 
								onFocus={ (event) => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'cardNumber' } } ) }  
							/>
						</fieldset>
						<fieldset className="form__item item__exp-date">
							<Label className="form__label">Exp. Date (MM/YY)</Label>
								<div className="form__wrapper">
								<Input 
									className={` form__input ${ data.form.activeField === 'expDateMonth' ? 'input--active' : '' } `}
									value={ data.form.fields.expDateMonth.value } 
									onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'expDateMonth' } } ) } 
									onFocus={ (event) => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'expDateMonth' } } ) }  
								/>
								<Input 
									className={` form__input ${ data.form.activeField === 'expDateYear' ? 'input--active' : '' } `}
									value={ data.form.fields.expDateYear.value } 
									onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'expDateYear' } } ) } 
									onFocus={ (event) => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'expDateYear' } } ) }  
								/>
							</div>
						</fieldset>
						<fieldset className="form__item item__cvc">
							<Label className="form__label">CVC</Label>
							<Input 
								className={` form__input ${ data.form.activeField === 'cvc' ? 'input--active' : '' } `}
								value={ data.form.fields.cvc.value } 
								onChange={ (event) => dataDispatch({ type: 'UPDATE_FIELD', payload: { value: event.target.value, field: 'cvc' } } ) } 
								onFocus={ (event) => dataDispatch({ type: 'SET_ACTIVE_FIELD', payload: { field: 'cvc' } } ) }  
							/>
						</fieldset>
						<Button className="form__button">Confirm</Button>
					</form>
				</div>
		</div>
	);

};

export default InteractiveCard;