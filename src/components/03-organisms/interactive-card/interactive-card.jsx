import './interactive-card.scss';
import Shadows from 'components/01-atoms/shadows/shadows'
import Cards from 'components/02-molecules/cards/cards';
import Form from 'components/02-molecules/form/form';
import SuccessMessage from 'components/02-molecules/success-message/success-message';
import { useProvider as useDataProvider } from 'context/data/provider';

const InteractiveCard = () => {

	const [data, dataDispatch] = useDataProvider();

	return (
		<div className="interactive-card">
				<div className="interactive-card__preview preview">
					<Shadows className="preview__shadows" />
					<Cards className="preview__cards" />
				</div>
				<div className="interactive-card__controller controller">
					{ data.form.isSubmitted 
						? <SuccessMessage className="controller__success-message" />					
						: <Form className="controller__form" />					
					}
				</div>
		</div>
	);

};

export default InteractiveCard;