class MinhaContaBancaria {

  private saldo: number;
  private extrato: number[];

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
    this.extrato = [saldoInicial];
  }

  public adicionarDeposito(valor: number): void {
    this.saldo += valor;
    this.extrato.push(valor);
  }

  public realizarSaque(valor: number): void {
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente");
    }
    this.saldo -= valor;
    this.extrato.push(-valor);
  }

  public getSaldoAtual(): number {
    return this.saldo;
  }

  public obterExtrato(): number[] {
    return this.extrato;
  }
}

(function () {
  const minhaConta = new MinhaContaBancaria(1000);
  console.log(minhaConta.getSaldoAtual()); // Saída: 1000

  minhaConta.adicionarDeposito(500);
  console.log(minhaConta.getSaldoAtual()); // Saída: 1500

  minhaConta.realizarSaque(200);
  console.log(minhaConta.getSaldoAtual()); // Saída: 1300

  try {
    minhaConta.realizarSaque(2000); // Erro: Saldo insuficiente
  } catch (Exception) {
    console.log(Exception);
  }

  console.log(minhaConta.obterExtrato()); // Saída: [1000, 500, -200]
})();