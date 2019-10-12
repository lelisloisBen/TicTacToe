const getState = ({ getStore, getActions, setStore }) => {
	return {
        
		store: {
            name: "samir"
		},
		actions: {

            playersNames: (newName) => {
                setStore({ mane: newName });
            }	

		}
	};
};

export default getState;
