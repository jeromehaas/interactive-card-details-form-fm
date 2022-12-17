const initialState = {
	form: {
		fields: {
			cardholderName: { value: 'Felicia Leire', hasError: false },
			cardNumber: { value: '9591 6489 6389 1011', hasError: false },
			expDateMonth: { value: '09', hasError: false },
			expDateYear: { value: '26', hasError: false },
			cvc: { value: '123', hasError: false },
		},
		activeField: null,
	},
};

export default initialState;