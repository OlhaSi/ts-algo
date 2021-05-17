import {Deputy} from "./Deputy";

export class Fraction {
    name: string;
    deputiesList: Deputy[];

    constructor(name: string, deputiesList: Deputy[]) {
        this.name = name;
        this.deputiesList = deputiesList;
    }

    addDeputy(newDeputy: Deputy) {
        return this.deputiesList.push(newDeputy);
    }

    removeDeputy(someDeputy: Deputy) {
        const toDelete = this.deputiesList
            .findIndex((value: Deputy) => someDeputy === value);

        return this.deputiesList.splice(toDelete, 1);
    }

    removeAllBribeTakers() {
        return this.deputiesList.filter(deputy => !deputy.bribeTaker);
    }

    findTheBiggestBribeTaker() {
        const sorted = this.deputiesList
            .sort((a, b) => a.bribeAmount - b.bribeAmount);

        return sorted[this.deputiesList.length - 1];
    }

    showAllDeputies() {
        return this.deputiesList;
    }

    removeAllDeputies() {
        return this.deputiesList.splice(0, this.deputiesList.length);
    }

    bribeAmount() {
        return this.deputiesList
            .reduce((accumulator, currentValue) =>
                accumulator + currentValue.bribeAmount, 0);
    }
}
