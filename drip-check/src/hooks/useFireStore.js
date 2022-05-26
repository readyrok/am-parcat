import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const useFireStore = (collect) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        let documents = [];

        async function fetchData() {
            const querySnapshot = await getDocs(collection(projectFireStore, collect));

            querySnapshot.forEach((doc) => {
                documents.push({...doc.data()});
            });
        }
        
        fetchData();

        setDocs(documents);
    },[collect]);

    return { docs };
}

export default useFireStore;