import './label.scss';

const Label = ({ className, children, htmlFor }) => {

	return (
		<label className={` ${ className ? className : '' } label`} htmlFor={ htmlFor }>{ children }</label>
	);

};

export default Label;