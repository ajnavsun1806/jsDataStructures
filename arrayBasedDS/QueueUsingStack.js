import Stack from './Stack';
import { timingSafeEqual } from 'crypto';

/**
 * Idea behind implementing a Queue using stack
 * There are two methods:
 * Method 1:- Make add/enqueue element expensive
 *     Create a new stack and empty the first stack completely on another stack  
 *     <b>Example</b> - q = [10, 20, 30, 40 ] then internal stack = [ 40, 30, 20, 10 ], lets add 50 to it
 *                     empty stack 1 to stack2 = [10, 20, 30, 40] push 50 to stack1 [50] 
 *                     now empty stack2 to stack1 so stack1 = [50, 40, 30, 20, 10] and q = [10, 20, 30, 40, 50]
 * 
 * Method2:- Make dequeue/remove operation expensive
 *      Create a new stack during dequeue and push stack 1 on stack 2 and pop the last element and then push stack2 
 *      on stack1
 *      <b>Example</b> - q = [10, 20, 30, 40] then internal stack = [ 10, 20, 30, 40] add would be simple push on stack
 *                       For remove operation move stack1 to stack2 = [40, 30, 20, 10] pop 10 then 
 *                       push everyting back on stack 1 = [20, 30, 40 ]     
 *  
 * Here implementing the first operation       
 */
export default class QueueUsingStack{
    constructor(){
        this._s1 = new Stack();
    }

    add(x){
        //creating new stack
        const s2 = new Stack();
        //emptying the stack on stack2
        while(!this._s1.isEmpty()){
            s2.push(this._s1.pop());
        }
        //adding the element at the bottom of stack
        this._s1.push(x);
        //again pushing the whole stack on stack1
        while(!s2.isEmpty()){
            this._s1.push(s2.pop());
        }
    }

    remove(){
        //simple popping the stack 1
        if(this._s1.isEmpty()){
            return null;
        }else{
            return this._s1.pop();
        }
    }

    isEmpty(){
        return this._s1.isEmpty();
    }

    get size(){
        return this._s1.size;
    }

    print(){
        this._s1.q.print();
    }
}