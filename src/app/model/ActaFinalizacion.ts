export class ActaFinalizacion{

    constructor(public op1: opc1, public op2: opc2, public op3: opc2, public op4: opc1, public op5: opc1, public op6: opc1,
                public text1: string, public text2: string, public text3: string, public text4: string, public text5: string,
                public cita: boolean, public revision: boolean, public tutor: boolean){


    }

}
export enum opc1 {
    excelente,
    buena,
    regular,
    mala
}
export enum opc2 {
    mucho,
    bastante,
    poco,
    nada
}

