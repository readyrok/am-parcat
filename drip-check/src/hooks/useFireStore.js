import { useState } from "react";
import { projectFireStore } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const useFireStore = (collect) => {
    const [docs, setDocs] = useState([]);
    
    const colRef = collection(projectFireStore, collect);

    let documents = [];

    getDocs(colRef).then((snapshot)=>{
        
        snapshot.docs.forEach((doc)=>{
            documents.push({...doc.data()});
        })

        setDocs(documents);
    });
    
    return { docs };
}

export default useFireStore;