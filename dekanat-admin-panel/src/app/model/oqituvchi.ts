import { Kafedra } from "./kafedra";
import { Lavozim } from "./lavozim";

export interface Oqituvchi{
    id: number;
    ism: string;
    familiya: string;
    tel: string;
    kafedra: Kafedra;
    ilmiyDaraja: string;
    mutaxasislik: string;
    lavozim: Lavozim;
}