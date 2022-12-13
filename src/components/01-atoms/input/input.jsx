import './input.scss';

const Input = ({ className, placeholder, value, error }) => {

	return (
		<div  className={` ${ className ? className : '' } input `}>
			<div className="input__field-wrapper">
				<input className="input__field"  value={ value } placeholder="Placeholder" />
			</div>
			<p className="input__error">Houston, we have an error here...</p>
		</div>
	);

};

export default Input;