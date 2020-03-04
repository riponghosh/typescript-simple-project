import { Task } from "./Task";
export declare class User {
    firstName: string;
    lastName: string;
    tasks: Task[];
    fullName(): string;
    setTask(task: Task): void;
    getTasks(): Task[];
}
