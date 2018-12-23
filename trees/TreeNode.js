import ClassCastError from '../errors/ClassCastError';

class TreeNode{
    constructor(value){
        this.value = value;
        this._leftNode = null;
        this._rightNode = null;
    }

    get left(){
        return this._leftNode;
    }

    set left(left){
        if(left instanceof TreeNode || left == null){
            this._leftNode = left;
        }else{
            throw new ClassCastError('Node is not a instance of TreeNode');
        }
    }

    get right(){
        return this._rightNode;
    }

    set right(right){
        if(right instanceof TreeNode || right == null){
            this._rightNode = right;
        }else{
            throw new ClassCastError('Node is not a instance of TreeNode');
        }
    }

    toString(){
        console.log(`${this.value} left ${this._leftNode} and right ${this._rightNode}`);
    }
}

export default TreeNode;