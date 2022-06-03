import { createContext, useState, useEffect } from 'react';
import { getAllFiles } from '../utils/database.utils';

export const PicturesContext = createContext({
	picturesMap: [],
});

export const PicturesProvider = ({ children }) => {
	const [picturesMap, setPicturesMap] = useState([]);
	// useEffect(()=>{addCollectionAndDocuments('categories',SHOP_DATA)},[]) //initializeaza baza de date ! nu stiu daca o sterge pe cea veche !
	useEffect(() => {
		const getPicturesMap = async () => {
			const picturesMap = await getAllFiles();
			// console.log(picturesMap);
			setPicturesMap(picturesMap);
		};
		getPicturesMap();		
	}, []);

	const value = { picturesMap: picturesMap };

	return (
		<PicturesContext.Provider value={value}>
			{children}
		</PicturesContext.Provider>
	);
};
