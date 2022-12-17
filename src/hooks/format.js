const useFormat = () => {

	const formatCardNumber = (input) => {
		let chars = input;
		let formatted = '';
		chars = chars.replace(/\D/g, '');
		chars = chars.replace(" ", "");
		chars = chars.split('');
		chars = chars.filter((item) => item !== ' ');
		chars.map((char, index) => {
			if (index % 4 === 0 && index !== 0) formatted += ' ';
			formatted += char;
		});
		return formatted;
	};

	const formatExpDate = (input) => {
		let chars = input;
		let formatted = '';
		chars = chars.replace(/\D/g, '');
		chars = chars.replace(" ", "");
		chars = chars.split('');
		chars = chars.filter((item) => item !== ' ');
		chars.map((char) => formatted += char);
		return formatted;
	};


	const formatCvc = (input) => {
		let chars = input;
		let formatted = '';
		chars = chars.replace(/\D/g, '');
		chars = chars.replace(' ', '');
		chars = chars.split('');
		chars = chars.filter((item) => item !== ' ');
		chars.map((char) => formatted += char);
		return formatted;
	};

	const formatCardholderName = (input) => {
		let chars = input;
		let formatted = '';
		// chars = chars.replace(/[^a-zA-Z\s]/g, '');
		chars = chars.split('');
		chars = chars.filter((item) => item !== '');
		chars.map((char) => formatted += char);
		return formatted;
	};

    return {
        formatCardholderName,
        formatCardNumber,
        formatExpDate,
        formatCardNumber,
        formatCvc,
    };

}

export default useFormat;