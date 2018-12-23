import BinaryTreeSimulator from './simulators/BinaryTreeSimulator';
import QueueSimulator from './simulators/QueueSimulators';
import StackSimulator from './simulators/StackSimulator';
import inquirer  from 'inquirer';


function askSimulator(){
    var questions = [{
        type: 'input',
        name: 'simulator',
        message: "Which simulator you want to execute?",
    }]
    
    inquirer.prompt(questions).then(answer => {
        simulators(answer.simulator);
    });
    
}

function simulators(key){
    switch(key){
        case 'queue':
            QueueSimulator();
            break;
        case 'stack':
            StackSimulator();
            break;
        case 'binaryTree':
            BinaryTreeSimulator();
        default:
            console.log('Enter a valid input');        
    }
    askSimulator();
}

askSimulator();