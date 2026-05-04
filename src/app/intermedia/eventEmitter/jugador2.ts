import { EventEmitter } from "@angular/core";

export class  Jugador2 {
    on(arg0: string, arg1: (hp: any) => void) {
        throw new Error('Method not implemented.');
    }

    hp: number = 100;
    hpCambia = new EventEmitter<number>();

    recibeDanio(danio: number) {
        if (danio >= this.hp) {
            this.hp = 0;
        } else {
           this.hp = this.hp - danio;
        }

        this.hpCambia.emit(this.hp);
    }
}