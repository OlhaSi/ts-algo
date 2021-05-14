import {CarModel} from "./Car.model";

export interface UserModel {
    name: string;
    age: number;
    car?: CarModel;
}
