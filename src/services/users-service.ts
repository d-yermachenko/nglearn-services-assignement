import { EventEmitter, Injectable, Output } from "@angular/core";

import { User } from "../model/user";
import { UserStorageService } from "./user-storage";

@Injectable()
export class UsersService {
    constructor(private userStorage: UserStorageService) {}

    public userOperations: string[] = [];
    private userActivationsCount: number = 0;
    private userDeactivationsCount: number = 0;

    public onUserListChanged: EventEmitter<void> = new EventEmitter<void>();


    toggleUserStatus(id: number) {
        const user = this.userStorage.getUserById(id);
        user.status = user.status === 'active' ? 'inactive' : 'active';
        if(user.status === 'active') {
            this.userActivationsCount++;
        }
        else {
            this.userDeactivationsCount++;
        }
        this.onUserListChanged.emit();
        this.userOperations.push(`${user.name} is now ${user.status}`);
    }

    public getUserActivationsCount() : number {
        return this.userActivationsCount;
    }

    public getUserDeactivationsCount() : number {
        return this.userDeactivationsCount;
    }
}