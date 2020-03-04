export class User {
    firstName: string;
    lastName: string;

    fullName():string {
        return this.firstName+' '+this.lastName;
    }
}