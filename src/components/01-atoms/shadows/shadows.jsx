import './shadows.scss';

const Shadows = ({ className }) => {

	return (
		<div className={` ${ className } shadows`} >
			<figure className="shadows__item item--orange"></figure>
			<figure className="shadows__item item--blue"></figure>
			<figure className="shadows__item item--magenta"></figure>
		</div>
	);

};

export default Shadows;