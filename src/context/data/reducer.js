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
		case 'ADD_ERROR_STYLE': {
			return {
				...state, 
				form: {
					...state.form,
					fields: {
						...state.form.fields,
						[action.payload.field]: {
							...state.form.fields[action.payload.field],
							hasError: true,
						}
					}
				}
			}
		}
		case 'REMOVE_ERROR_STYLE': {
			return {
				...state, 
				form: {
					...state.form,
					fields: {
						...state.form.fields,
						[action.payload.field]: {
							...state.form.fields[action.payload.field],
							hasError: false,
						}
					}
				}
			}
		}
		case 'SET_SUBMITTED': {
			return {
				...state, 
				form: {
					...state.form,
					isSubmitted: action.payload.value
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