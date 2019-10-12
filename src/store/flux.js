const getState = ({ getStore, getActions, setStore }) => {
	return {
        
		store: {
            name: "TIC TAC TOE"
		},
		actions: {

            playersNames: (newName) => {
                setStore({ mane: newName });
            }	

		}
	};
};

export default getState;
