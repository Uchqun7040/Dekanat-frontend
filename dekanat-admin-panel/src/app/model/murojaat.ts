import { Time } from "@angular/common";
import { MurojaatHolat } from "./murojaatHolat";
import { Oqituvchi } from "./oqituvchi";
import { Talaba } from "./talaba";

export interface Murojaat{
    id: number;
    talaba: Talaba;
    oqituvchi: Oqituvchi;
    mavzu: string;
    matn: string;
    fayl: string;
    spravka: string;
    holat: MurojaatHolat;
    created?: Date;
    xulosa: string;
}