import { useProvider as useDataProvider } from 'context/data/provider';
import useFormat from 'hooks/format';
import Shadows from 'components/01-atoms/shadows/shadows'
import './cards.scss';

const Cards = ({ className }) => {
    
  	const [data ] = useDataProvider();
		const { formatCardNumber, formatCardholderName, formatExpDate, formatCvc } = useFormat();

    return (
        <div className={`${ className } cards `}>
            <div className="cards__card card__front front">
                <Shadows className="front__shadows" />
                <figure className="front__dot dot--big"></figure>
                <figure className="front__dot dot--small"></figure>
                <p className="front__card-number">{ formatCardNumber(data.form.fields.cardNumber.value) }</p>
                <p className="front__cardholder-name">{ formatCardholderName(data.form.fields.cardholderName.value) }</p>
                <div className="front__exp-date exp-date">
                    <p className="exp-date__month">{ formatExpDate(data.form.fields.expDateMonth.value) }</p>
                    <p className="exp-date__separator">/</p>
                    <p className="exp-date__year">{ formatExpDate(data.form.fields.expDateYear.value) }</p>
                </div>
            </div>
            <div className="cards__card card__back back">
                <div className="back__magnetic-stripe"></div>
                <div className="back__cvc cvc">
                    <p className="cvc__value">{ formatCvc(data.form.fields.cvc.value) }</p>
                </div>
								<img className="back__details" src="./graphics/card-details.svg" alt="Card Details" />
            </div>
        </div>
    );

};

export default Cards;