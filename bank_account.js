export class BankAccount {
    constructor(initialSaldo) {
        this.saldo = initialSaldo; // Inisialisasi jumlah saldo
    }

    getSaldo() { // Method untuk mendapatkan nilai saldo
        return this.saldo;
    }

    setSaldo(newSaldo) { // Method untuk memperbarui nilai saldo
        this.saldo = newSaldo;
    }

}