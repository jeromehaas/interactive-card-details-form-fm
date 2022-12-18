import './success-message.scss';
import { useProvider as useDataProvider } from 'context/data/provider';
import { Check } from 'react-feather';
import Button from 'components/01-atoms/button/button';

const SuccessMessage = ({ className }) => {

	const [ dataDispatch ] = useDataProvider();
			
	const returnToForm = () => {
		dataDispatch({ type: 'SET_SUBMITTED', payload: { value: false } } ) 
	};

	return (
		<div className={`${ className } success-message`}>
			<div className="success-message__checkmark checkmark">
				<Check className="checkmark__icon" />
			</div>
			<h2 className="success-message__title">Thank you</h2>
			<p className="success-message__text">We’ve added your card details</p>
			<Button className="success-message__button" onClick={ returnToForm }>Continue</Button>
		</div>
	);

};

export default SuccessMessage;