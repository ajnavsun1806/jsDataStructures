
class ClassCastError extends Error{
    constructor(message){
        super(message);
        this.name = "ClassCastError";
    }
}

export default ClassCastError;