import { Kafedra } from "./kafedra";
import { Lavozim } from "./lavozim";

export interface Oqituvchi{
    id: number;
    created?: Date;
    ism: string;
    familiya: string;
    tel: string;
    kafedra: Kafedra;
    ilmiyDaraja: string;
    mutaxasislik: string;
    lavozim: Array<Lavozim>;
    login: string;
}