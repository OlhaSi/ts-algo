import {Fraction} from "./Fraction";
import {Deputy} from "./Deputy";

export class VerkhovnaRada {
    fractionsList: Fraction[];

    constructor(fractionsList: Fraction[]) {
        this.fractionsList = fractionsList;
    }

    addFraction(newFraction: Fraction) {
        return this.fractionsList.push(newFraction);
    }

    removeFraction(someFraction: Fraction) {
        const toDelete = this.fractionsList
            .findIndex((value: Fraction) => {
                return someFraction === value;
            });

        return this.fractionsList.splice(toDelete, 1);
    }

    showAllFractions() {
        return this.fractionsList;
    }

    showSomeFraction(name: string) {
        return this.fractionsList.filter(value => value.name === name);
    }

    addSomeDeputy(deputy: Deputy, fractionName: string) {
        const fraction = this.fractionsList
            .find(value => value.name === fractionName);

        return fraction ? fraction.addDeputy(deputy) : console.log('No such fraction');
    }

    removeSomeDeputy(deputy: Deputy, fractionName: string) {
        const fraction = this.fractionsList
            .find(value => value.name === fractionName);

        return fraction ? fraction.removeDeputy(deputy) : console.log('No such fraction');
    }

    getAllBribeTakers(fractionName: string) {
        const someFraction = this.fractionsList
            .find(value => value.name === fractionName);

        return someFraction ?
            someFraction.deputiesList.filter(value => value.bribeTaker) :
            console.log('No fraction - no bribes');
    }

    getTheBiggestBribeTakerInFraction(fractionName: string) {
        const someFraction = this.fractionsList
            .find(value => value.name === fractionName);

        return someFraction ?
            someFraction.findTheBiggestBribeTaker() :
            console.log('No fraction - no bribes taker');
    }

    getTheBiggestBribeTakerInVR() {
        const theBiggestTakersFromEachFraction: Deputy[] = [];

        this.fractionsList.find(value => {
            theBiggestTakersFromEachFraction.push(value.findTheBiggestBribeTaker());
        });

        const theBiggestBribeTakerInVR = theBiggestTakersFromEachFraction
            .sort((a, b) => a.bribeAmount - b.bribeAmount);

        return theBiggestBribeTakerInVR[theBiggestBribeTakerInVR.length - 1];
    }

    showAllDeputyOfFraction(fractionName: string) {
        const someFraction = this.fractionsList
            .find(value => value.name === fractionName);

        return someFraction ?
            someFraction.showAllDeputies() : console.log('No such fraction');
    }
}
