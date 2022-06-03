import axios from "axios";

const URL = 'http://localhost:8080/files';

export const getAllFiles = () => {
    console.log('getallfiles started')
	axios
    .get(URL)
    .then((resp) => {
            console.log('getallfiles received')
			return resp;
		})
		.catch((er) => {console.log(er);console.log('errr?')});
};
