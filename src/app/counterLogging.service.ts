export class CounterLogging {
    inactivetoActiveUserCount = 0;
    activetoInactiveUserCount = 0;

    incrementActiveToInactive() {
        this.activetoInactiveUserCount++;
        console.log('Active to Inactive: ' + this.activetoInactiveUserCount);
    }

    incrementInactiveToActive() {
        this.inactivetoActiveUserCount++;
        console.log('Inactive to Active: '+ this.inactivetoActiveUserCount);
    }
}