import http from "./HttpCommon";

class UserService {
    add(user) {

        console.log(user);

        let formData = new FormData();
        for (let i = 0; i < user.multipartFile.length; i++) {
            formData.append(`multipartFile[${i}]`, user.multipartFile[i])
            // console.log(user.multipartFile[i]);
        }
        // formData.append("multipartFile", user.multipartFile);
        formData.append("name", user.name)
        
        return http.post("/user", formData);
    }

    getAll() {
        return http.get('/user')
    }
}

export default new UserService();