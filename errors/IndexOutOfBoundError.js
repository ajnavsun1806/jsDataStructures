
export default class IndexOutOfBoundError extends Error{
    constructor(operation){
        super(`Array index out of bound: ${operation} cannot be completed`);
        this.name = "IndexOutOfBoundError";
    }
}
