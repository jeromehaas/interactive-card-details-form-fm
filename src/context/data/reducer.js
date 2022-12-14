const reducer = (state, action) => {

	switch(action.type) {
		case 'UPDATE_FIELD': {
			return {
				...state, 
				form: {
					...state.form,
					fields: {
						...state.form.fields,
						[action.payload.field]: {
							...state.form.fields[action.payload.field],
							value: action.payload.value,
						}
					}
				}
			}
		}
		case 'SET_ACTIVE_FIELD': {
			return {
				...state, 
				form: {
					...state.form,
					activeField: action.payload.field
				}
			}
		}
		default: {
			return {
				...state
			}
		}
	};

};

export default reducer;