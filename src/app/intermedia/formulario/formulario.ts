import { FormBuilder, FormGroup, Validators } from "@angular/forms"


export class Formulario {
    id: number;  
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
    password: string;


    form: FormGroup;


    constructor(fb: FormBuilder) {
        this.id = 0;
        this.nome = '';
        this.email = '';
        this.telefone = '';
        this.mensagem = '';
        this.password = '';


        this.form = fb.group({
            id: [this.id],
            nome: [this.nome],
            email: [this.email, [Validators.required, Validators.email]],
            password: [this.password, Validators.required],
            telefone: [this.telefone],
            mensagem: [this.mensagem]
        });
    }
}