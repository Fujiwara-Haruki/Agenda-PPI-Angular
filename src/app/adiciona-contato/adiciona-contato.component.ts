
import { Component } from "@angular/core";
import { Agenda } from "../agenda";
import { Contato, Tipo } from "../contato";

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
  agenda: Agenda
  tipos: string[]

  constructor() {
    this.agenda = new Agenda()
    this.tipos = Object.values(Tipo)
  }

  adicionarContato(nome: string, telefone: string, email?: string, data?: string ,tipo?: string) {
    let pessoa = new Contato(nome, telefone, email, data , this.getTipo(tipo));

    this.agenda.adicionarContato(pessoa);
  }

  getTipo(str: string): Tipo { 
    let tp: Tipo = Tipo.AMIGO

    if (str === Tipo.AMIGO) { 
      tp = Tipo.AMIGO
    }
    else if (str === Tipo.FAMILIA) { 
      tp = Tipo.FAMILIA
    }

    else if (str === Tipo.ESCOLA) { 
      tp = Tipo.ESCOLA
    }
    else if (str === Tipo.IGREJA) { 
      tp = Tipo.IGREJA
    }
    else if (str === Tipo.TRABALHO) { 
      tp = Tipo.TRABALHO
    }


    return tp
  }
}