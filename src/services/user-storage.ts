import { Injectable } from "@angular/core";
import { User } from "../model/user";

@Injectable()
export class UserStorageService {
    private users : User[] = [];

    addUser(user: User) : void {
        if(this.getUserById(user.id)) {
            throw new Error('User already exists');
        }
        this.users.push(user);
    }

    getUsers() : User [] {
        return this.users.slice();
    }

    findUser(name: string) : User | undefined{
        return this.users.find(user => user.name === name);
    }

    getUser(index: number) : User | undefined{
        return this.users[index];
    }

    getUserById(id: number) : User | undefined{
        return this.users.find(user => user.id === id);
    }

    findActiveUsers() : User[] {
        return this.users.filter(user => user.status === 'active');
    }

    findInactiveUsers() : User[] {
        return this.users.filter(user => user.status === 'inactive');
    }

    constructor() {
        this.addUser(new User(1, 'Max', 'active'));
        this.addUser(new User(2, 'Anna', 'active'));
        this.addUser(new User(3, 'Chris', 'inactive'));
        this.addUser(new User(4, 'Manu', 'inactive'));
    }


}