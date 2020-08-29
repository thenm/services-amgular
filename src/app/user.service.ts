import { Injectable } from "@angular/core";
import { CounterLogging } from "./counterLogging.service";

@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterLoggingService: CounterLogging) {

    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterLoggingService.incrementActiveToInactive();
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterLoggingService.incrementInactiveToActive();
    }
}