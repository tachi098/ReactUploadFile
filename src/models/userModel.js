class userModel{
    constructor(
        id = null,
        name =  '',
        multipartFile = []
    ){
        this.id = id;
        this.name = name;
        this.multipartFile = multipartFile
    }
}

export default new userModel();