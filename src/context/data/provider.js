import { createContext, useReducer, useContext } from 'react';
import initialState from 'context/data/initial-state';
import reducer from 'context/data/reducer';

const Context = createContext();

const Provider = ({ children }) => (
	<Context.Provider value={ useReducer(reducer, initialState )} initialState={ initialState } >
		{ children }
	</Context.Provider>
);

const useProvider = () => useContext(Context);

export { 
	Provider,
	useProvider
};