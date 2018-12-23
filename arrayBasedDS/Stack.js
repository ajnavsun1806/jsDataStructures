import Queue from './Queue';

/**
 * Implementing stack using queue. To implement stack using queue we need only 1 queue.
 * During push operation we add the new value to queue and then start removing the element and add the element
 * again to the queue making the last element as the first element
 *  <b>Example</b>- stack= [10, 20, 30, 40] internal queue = [40, 30, 20, 10]
 *                 During add operation add new value to queue so queue = [40, 30, 20, 10, 50] 
 *                 now remove and add the element till the oler size so queue = [50, 40, 30, 20, 10]
 *                 
 *                 Remove operation is simple just remove the first element of the queue
 * 
 */
export default class StackUsingQueue{
    constructor(){
        this.q = new Queue();
    }

    /**
     * Push the value at the top of stack
     * 
     * @param {Object} value Any object 
     */
    push(value){
        //adding the new value
        this.q.add(value);
        //Removing all the elements and adding all
        //Note: Till size-1 else it will add the first element again at last
        for(let i = 0; i < this.q.size - 1 ; i++){
            let x = this.q.remove();
            this.q.add(x);
        }
    }

    /**
     * Returns <code>null</code> if the stack is empty else returns the element at the top of the stack
     * 
     */
    pop(){
        if(this.q.isEmpty()){
            return null;
        }
        return this.q.remove();
    }

    isEmpty(){
        return this.q.isEmpty();
    }
    print(){
        const red = this.q._queueArray.reduce((red, x, idx, arr) => {
            if(idx >= this.q._front && idx <= this.q._rear){
                red.push(x);
            }
            return red;
        }, []);
        console.log(red.reverse());
    }

    get size(){
        return this.q.size;
    }
}