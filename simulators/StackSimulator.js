import Stack from '../arrayBasedDS/Stack';

export default function StackSimulator(){
    const stk = new Stack();
    stk.push(10);
    stk.push(20);
    stk.push(5);
    stk.push(13);

    console.log(stk.print());

    console.log(stk.pop());
    console.log(stk.pop());
    console.log(stk.pop());
    console.log(stk.pop());
}