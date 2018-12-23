
class InvalidPropertyError extends Error{
    constructor(property){
        const msg = "Invalid proerty value for " + property;
        super(msg);
        this.name = "InvalidPropertyError";
    }
}

export default InvalidPropertyError;