import './interactive-card.scss';
import Shadows from 'components/01-atoms/shadows/shadows'
import Cards from 'components/02-molecules/cards/cards';
import Form from 'components/02-molecules/form/form';

const InteractiveCard = () => {

	return (
		<div className="interactive-card">
				<div className="interactive-card__preview preview">
					<Shadows className="preview__shadows" />
					<Cards className="preview__cards" />
				</div>
				<div className="interactive-card__controller controller">
					<Form className="controller__form" />					
				</div>
		</div>
	);

};

export default InteractiveCard;