import http from "../http-common";

class fileService {
    getAll(){
        return http.get("/files")
    }
}