import './button.scss';

const Button = ({ className, children }) => {

	return (
		<button className={` ${ className ? className : '' } button` }>{ children }</button>
	);

};

export default Button;