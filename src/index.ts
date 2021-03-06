import {CarModel, UserModel} from "./model";
import {CarModelEnum} from "./enum";
import {Deputy, Fraction, Human, VerkhovnaRada} from "./classes";

/*function greet(person: string, date: Date) {
    console.log(`Hello 222 ${person}, today is ${date?.toDateString()}!`);
}
greet("Maddison", new Date());*/


// we need to define a type of variables, can also define a type of <return>
function foo(a: number, b: number): number {
    return a + b;
}

let a = foo(22, 3);
console.log(a);


// with the ? we check if the parameter is available
// and in this case we can omit it in arguments by the invoking the function
function userBuilder(name: string, age: number, car: CarModel): UserModel {
    // function userBuilder (name: string, age: number, car?: CarModel): Partial<UserModel> {  <---- Partial
    return {
        name,
        age,
        car
    };
}

const user = userBuilder('Dan', 34, {producer: CarModelEnum.FIAT, year: 2020});
console.log(user);


// Partial --- returns a part of the parameters
function userBuilder2(name: string, age: number, car?: CarModel): Partial<UserModel> {
    return {
        name,
        car
    };
}

let user2 = userBuilder2('Ann', 34, {producer: CarModelEnum.FIAT, year: 2020});
// return only name and car
console.log(user2);


// keyof --- get keys from UserModel
const attribute: Array<keyof UserModel> = ["name", "age", "car"];
console.log(attribute);

const attr: keyof UserModel = "name";


// array
let arr: number[] = [];
arr.push(33);


// Promise
async function f(): Promise<string> {
    let a = '22';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a);
        }, 2000);
    });
}

async function result() {
    // return f().then(value => value);
    return await f();
}

result().then(value => console.log(value));


// check variable and get number or string
function strip(x: number | string) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}

console.log(strip('       hello ts'));

// classes in ts
class Car {
    producer: string;
    private year: number;

    static makes = ['bo']

    constructor(producer: string, year: number) {
        this.producer = producer;
        this.year = year;
    }

    privateCaller() {
        this.letsGo();
    }

    protectedCaller() {
        this.ride();
    }

    private letsGo() {
        console.log('go go go');
    }

    protected ride() {
        console.log('ride ride ride');
    }
}

let car = new Car('BMW', 2020);
car.privateCaller();

class Motorcycle extends Car {
    color: string;

    constructor(producer: string, year: number, color: string) {
        super(producer, year);
        this.color = color;
    }

    protected ride() {
        super.ride();
    }
}

let m = new Motorcycle('Java', 2020, 'red');


// we can extend abstract class, but can not create an exemplar
abstract class Furniture {
    kind: string
    producer: string;

    protected constructor(kind: string, producer: string) {
        this.kind = kind;
        this.producer = producer;
    }
}

class Chair extends Furniture {
    price: number;

    constructor(kind: string, producer: string, price: number) {
        super(kind, producer);
        this.price = price;
    }
}

let ch = new Chair('living room', 'moebel', 400);
console.log(ch);


console.log('Verkhovna Rada ______________________________');

const Oleh = new Deputy(180, 90, 'Oleh', 'Liashko', 50, false, 0);
const Petro = new Deputy(183, 150, 'Petro', 'Zhlob', 34, true, 100000);
const Mykola = new Deputy(191, 90, 'Mykola', 'Skob', 24, false, 0);
const Natalia = new Deputy(180, 70, 'Natalia', 'Khytra', 29, true, 75000);
const Viktoriia = new Deputy(165, 45, 'Viktoriia', 'Mazhoruha', 36, true, 98000000);
const Oksana = new Deputy(175, 65, 'Oksana', 'Sekretytka', 33, true, 40000);

const Yunyi_Orel = new Fraction('Yunyi_Orel', [Mykola, Natalia, Oksana]);
const Ne_Yunyi_Orel = new Fraction('Ne_Yunyi_Orel', [Oleh, Petro, Viktoriia]);

const VR = new VerkhovnaRada([Yunyi_Orel, Ne_Yunyi_Orel]);

console.log(Yunyi_Orel.findTheBiggestBribeTaker());
console.log(VR.getTheBiggestBribeTakerInVR());
