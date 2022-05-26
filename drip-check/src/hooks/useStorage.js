import { uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { projectStorage, ref, projectFireStore } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore"; 

const useStorage = (file) => {
    const [ progress, setProgress ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ url, setUrl ] = useState(null);

    useEffect(() => {
        //references
        const storageRef = ref(projectStorage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log('File available at', url);
                addDoc(collection(projectFireStore, "images"), {
                    url: url
                });
                setUrl(url);
            });
        })
    }, [file]);

    return { progress, error, url };
}

export default useStorage;