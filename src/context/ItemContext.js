import React, { useState } from 'react';
import propTypes from 'prop-types';

export const ItemsContext = React.createContext({});

export const ItemsContextProvider = ({children}) => {
	const [items, setItems] = useState([]);
	const [load, setLoad] = useState(true);

	return (
		<ItemsContext.Provider value={{items, setItems, load, setLoad}}>
			{children}
		</ItemsContext.Provider>
	);
};

ItemsContextProvider.propTypes = {children: propTypes.any.isRequired};