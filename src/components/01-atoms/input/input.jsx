import './input.scss';

const Input = ({ className, placeholder, value, error, onChange, onFocus }) => {

	return (
		<div  className={` ${ className ? className : '' } input `}>
			<div className="input__field-wrapper">
				<input className="input__field"  value={ value } placeholder="Placeholder" onChange={ onChange } onFocus={ onFocus } />
			</div>
			<p className="input__error">{ error }</p>
		</div>
	);

};

export default Input;