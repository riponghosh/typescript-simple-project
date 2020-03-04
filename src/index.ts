import {User} from './User';
import { Task } from './Task';

let user=new User();
user.firstName='Ripon';
user.lastName='Ghosh';
console.log(user.fullName());


let task= new Task;
task.name= 'Typescript';
task.description= 'Simple Project';

user.setTask(task);
console.log(user.getTasks());