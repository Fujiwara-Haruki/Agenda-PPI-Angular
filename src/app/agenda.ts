import { Contato } from "./contato";

export class Agenda {

private contatos: Contato[];

  constructor(...contatos: Contato[]) {
    this.contatos = contatos;
  }

  adicionarContato(contato: Contato): boolean {
    if (this.contatos.some(c => c.getTelefone() === contato.getTelefone())) { // .some retorna true ou false
      alert("Contato com mesmo número já adicionado")
      return false;
    }
    this.contatos.push(contato);
    return true;
  }

  obterContatos(): Contato[] {
    return this.contatos;
  }

  pesquisarContatoNome(nome: string): Contato[] {
    return this.contatos.filter(contato => // .filter retorna um novo array
      contato.getNome().toLowerCase().includes(nome.toLowerCase())
    );
  }

  pesquisarContatoTelefone(telefone: string): Contato | false {
    const contato = this.contatos.find(c => c.getTelefone() === telefone); // .find retorna o primeiro item
    return contato || false;
  }

  pesquisarContatoEmail(email: string): Contato | false {
    const contato = this.contatos.find(c => c.getEmail() === email);
    return contato || false;
  }

  removerContatoPorTelefone(telefone: string): boolean {
    const index = this.contatos.findIndex(c => c.getTelefone() === telefone);
    if (index !== -1) {
      this.contatos.splice(index, 1);
      console.log("Contato removido com sucesso.");
      return true;
    }
    console.log("Contato não encontrado.");
    return false;
  }

  listarContatos(): void {
    this.contatos.forEach(contato => {
      console.log(
        `Nome: ${contato.getNome()}, Telefone: ${contato.getTelefone()}, Email: ${contato.getEmail()}, Tipo: ${contato.getTipo()}`
      );
    });
  }
}