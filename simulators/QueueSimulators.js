import Queue  from '../arrayBasedDS/Queue';
import QueueUsingStack from '../arrayBasedDS/QueueUsingStack';
import { reversingQueueKElement, reverseQ }  from './QueueExamples';
import Inquirer from 'inquirer';

export default function QueueSimulator(){
    console.log('Queue simulator starts');
    const q = new Queue();
    q.add(10);
    q.add(20);
    q.add(30);
    q.add(5);
    q.add(7);
    console.log(`Size of the q is ${q.size} and q is empty ${q.isEmpty()}`);

    reversingQueueKElement(q, 3);

    reverseQ(q);

    // console.log(`Removed from q ${q.remove()}`);
    // console.log(`Removed from q ${q.remove()}`);
    // console.log(`Removed from q ${q.remove()}`);
    // console.log(`Removed from q ${q.remove()}`);
    // console.log(`Removed from q ${q.remove()}`);

    //console.log(`Size of the q is ${q.size} and q is empty ${q.isEmpty()}`); 
    q.print();
    console.log('Queue simulator ends');
}