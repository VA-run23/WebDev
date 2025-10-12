class ExpressError extends Error{//Class names starts with capital letters
    constructor(status, message){
        super();              //the super keyword is primarily used to call the constructor of the parent class from within the constructor of a child class.
        this.status= status;
        this.message=message;
    }
}

module.exports=ExpressError;