import {User} from './User';
import { Task } from './Task';
import * as lodash from 'lodash';

let user=new User();
user.firstName='Ripon';
user.lastName='Ghosh';
console.log(user.fullName());


let task= new Task;
task.name= 'Typescript';
task.description= 'Simple Project';

user.setTask(task);
console.log(user.getTasks());

let testArr=[1,2,3,4,5];
console.log(lodash.reverse(testArr));// Normal npm lodash will not give any suggestion. For getting lodash suggestion use typescript lodash or type definitions lodash