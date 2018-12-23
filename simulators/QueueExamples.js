import  Queue from '../arrayBasedDS/Queue';
import Stack from '../arrayBasedDS/Stack';
import ClassCastError from '../errors/ClassCastError';

/**
 * Updates the same queue and reverse the k elements of the queue
 * @param {Queue} q Queue object 
 * @param {Number} k Number of element to be reversed
 */
export function reversingQueueKElement(q, k){
    if(q instanceof Queue){
        const stk = new Stack();
        const patQ = new Queue();
        let count = 0;
        while(count < k){
            stk.push(q.remove());
            count++;
        }
        while(!stk.isEmpty()){
            q.add(stk.pop());
        }
        reverseQ(q, k);
        return q;
    }else{
        throw new ClassCastError()
    }
}

export function reverseQ(q, k = 0){
    for(let i = 0; i < q.size - k; i++){
        q.add(q.remove());
    }
    q.print();
}
