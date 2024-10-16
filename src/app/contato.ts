export enum Tipo {
    AMIGO = "Amigos",
    FAMILIA = "Familiares",
    ESCOLA = "Colegas da escola",
    IGREJA = "Membros da igreja",
    TRABALHO = "Colegas de trabalho",
  }
  
  export class Contato {
    private nome: string;
    private telefone: string;
    private email?: string;
    private aniversario?: string;
    private tipo?: Tipo;
  
    constructor(
      nome: string,
      telefone: string,
      email?: string,
      data?: string,
      tipo?: Tipo
    ) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
      this.aniversario = data;
      this.tipo = tipo;
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    setTelefone(telefone: string): void {
      this.telefone = telefone;
    }
  
    setEmail(email?: string): void {
      this.email = email;
    }
  
    setAniversario(data: string): void {
      this.aniversario = data;
    }
  
    setTipo(tipo?: Tipo): void {
      this.tipo = tipo;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getTelefone(): string {
      return this.telefone;
    }
  
    getEmail(): string | undefined {
      return this.email;
    }
  
    getAniversario(): String | undefined {
      return this.aniversario;
    }
  
    getTipo(): Tipo | undefined {
      return this.tipo;
    }
  }