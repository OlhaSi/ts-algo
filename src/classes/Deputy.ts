import {Human} from "./Human";

export class Deputy extends Human {
    surname: string;
    lastname: string;
    age: number;
    bribeTaker?: boolean;
    bribeAmount: number;

    constructor(height: number, weight: number, surname: string, lastname: string,
                age: number, bribeTaker: boolean, bribeAmount: number) {
        super(height, weight);
        this.surname = surname;
        this.lastname = lastname;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.bribeAmount = bribeAmount;
    }

    giveBribe() {
        if (!this.bribeTaker) {
            console.log('Im not bribe-taker! Go away!!!');
        } else {
            if (this.bribeAmount >= 100000) {
                console.log('It will be difficult to hide the bribe.');
            }
        }
    }
}
