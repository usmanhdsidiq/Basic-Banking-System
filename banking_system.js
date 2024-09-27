import { BankAccount } from './bank_account.js';

let mySaldo = new BankAccount(5000);

function updateBalanceDisplay() {
    document.getElementById("balance").innerText = mySaldo.getSaldo();
}

function deposit() {
    try {
        let amount = parseInt(window.prompt("Masukkan nominal yang akan ditambahkan: "));
        if(!isNaN(amount) && (amount > 0)) { // validasi number
            // mensimulasikan asynchronous dengan setTimeout
            setTimeout(() => {
                console.log(`Menambahkan saldo sebesar ${amount} ...`);
                mySaldo.setSaldo(mySaldo.getSaldo() + amount);
                updateBalanceDisplay();
                window.alert("Berhasil menambahkan saldo");
            }, 1500);
        } else {
            console.error("Nominal tidak valid");
        }
    } catch (error) {
        return error.message;
    }
}

function withdraw() {
    try {
        let amount = parseInt(window.prompt("Masukkan nominal yang akan ditambahkan: "));
        if (!isNaN(amount) && (amount > 0)) { // validasi number
            if (amount > mySaldo.getSaldo()) {
                window.alert("Transaksi gagal, Saldo tidak cukup.");
                console.error("Transaksi gagal, Saldo tidak cukup.");
            } else {
                setTimeout(() => {
                    mySaldo.setSaldo(mySaldo.getSaldo() - amount);
                    updateBalanceDisplay();
                    window.alert("Berhasil menarik saldo")
                    console.log(`Berhasil menarik saldo. \n Saldo saat ini: ${mySaldo.getSaldo()}`);
                }, 3000);
            }
        } else {
            console.error("Nominal tidak valid");
        }
    } catch (error) {
        return error.message;
    }
}

document.getElementById("depositBtn").onclick = deposit;
document.getElementById("withdrawBtn").onclick = withdraw;

updateBalanceDisplay();