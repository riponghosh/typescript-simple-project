import { Task } from "./Task";

export class User {
    firstName: string;
    lastName: string;
    tasks: Task[]=[];

    fullName():string {
        return this.firstName+' '+this.lastName;
    }

    setTask(task:Task):void{
        this.tasks.push(task);
    }

    getTasks():Task[]{
        return this.tasks;
    }
}