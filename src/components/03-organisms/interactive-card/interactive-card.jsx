import './interactive-card.scss';
import Input from 'components/01-atoms/input/input';
import Label from 'components/01-atoms/label/label';

const InteractiveCard = () => {

	return (
		<div className="interactive-card">
				<div className="interactive-card__preview">
				</div>
				<div className="interactive-card__controller controller">
					<form className="controller__form form">
							<Label className="form__label">Label</Label>
							<Input className="form__input" />
							<Input className="form__input input--active" />
							<Input className="form__input input--error" />
					</form>
				</div>
		</div>
	);

};

export default InteractiveCard;