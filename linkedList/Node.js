export default class Node{
    constructor(val){
        this._val = val;
        this._next = null;
        this._prev = null;
    }

    get next(){
        return this._next;
    }

    get prev(){
        return this._prev;
    }

    set next(val){
        if(next instanceof Node){
            this._next = val;
        }
    }

    set prev(val){
        if(next instanceof Node){
            this._next = val;
        }
    }
}