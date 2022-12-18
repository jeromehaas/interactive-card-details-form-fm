import './button.scss';

const Button = ({ className, children, onClick }) => {

	return (
		<button className={` ${ className ? className : '' } button` } onClick={ onClick }>{ children }</button>
	);

};

export default Button;