export class CounterService {
    activeToInactiveActions: number = 0;
    inactiveToActiveActions: number = 0;

    onChangeToInactive() {
        this.activeToInactiveActions++;
        this.printStatus();
    }

    onChangeToActive() {
        this.inactiveToActiveActions++;
        this.printStatus();
    }

    printStatus() {
        console.log("There have been " + this.activeToInactiveActions + " active to inactive actions.");
        console.log("There have been " + this.inactiveToActiveActions + " inactive to active actions.");
    }
}