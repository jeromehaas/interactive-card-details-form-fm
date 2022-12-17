import './input.scss';

const Input = ({ className, placeholder, value, errorMessage, onChange, onFocus, maxLength, type }) => {

	return (
		<div  className={` ${ className ? className : '' } input `}>
			<div className="input__field-wrapper">
				<input className="input__field"  value={ value } type={ type } placeholder={ placeholder } maxLength={ maxLength }  onChange={ onChange } onFocus={ onFocus } />
			</div>
			<p className="input__error">{ errorMessage }</p>
		</div>
	);

};

export default Input;