import IndexOutOfBoundError from '../errors/IndexOutOfBoundError';

const ENQUEUE_OPERATION = "enqueue";
const DEQUEUE_OPERATION = "dequeue";

/**
 * Queue is array structure. Basic operations
 *  1. Enqueue
 *  2. Dequeue
 *  3. 
 */
class Queue {
    constructor(capacity = Number.MAX_SAFE_INTEGER){
        this._maxLength = capacity;
        this._queueArray = [];
        this._front = 0;
        this._rear = -1;
    }

    isFull(){
        return this.size == this._maxLength;
    }

    isEmpty(){
        return this.size <= 0;
    }

    add(item){
        if(this.isFull()){
            throw new IndexOutOfBoundError(ENQUEUE_OPERATION);
        }
        this._rear = (this._rear + 1) % this._maxLength;
        this._queueArray[this._rear] = item;
    }

    remove(){
        if(this.isEmpty()){
            return null;
        }
        let item = this._queueArray[this._front];
        this._front = (this._front + 1) % this._maxLength;
        return item;
    }

    get size(){
        return (this._rear - this._front) + 1;
    }

    print(){
        const red = this._queueArray.reduce((red, x, idx, arr) => {
            if(idx >= this._front && idx <= this._rear){
                red.push(x);
            }
            return red;
        }, []);
        console.log(red);
    }

    get peek(){
        return this._queueArray[this._front];
    }
}

export default Queue;