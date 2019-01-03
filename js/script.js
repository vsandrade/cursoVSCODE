class calc {
    constructor(x, y) {
        this.numero1 = x;
        this.numero2 = y;
    }
    soma(x, y) {
        return parseInt(x) + parseInt(y);
    }
    soma() {
        return parseInt(this.numero1) + parseInt(this.numero2);
    }
    subtrair() {
        return this.numero1 - this.numero2;
    }
    subtrair(x, y) {
        return x - y;
    }
    Multiplicar() {
        return this.numero1 * this.numero2;
    }
    Multiplicar(x, y) {
        return x * y;
    }
    dividir() {
        return this.numero1 / this.numero2;
    }
    dividir(x, y) {
        return x / y;
    }
    //Este método é legal
    printUser(users) {
        let printTable = "";
        if (users != undefined && users.length > 0) {
            users.forEach(user => {
                printTable += `<tr>
                <td>${user.userName}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                </tr>`
            });
            return printTable;
        }
    }
    //user's return
    returnUser(UrlOk) {
        return new Promise((resolve, reject) => {
            if (UrlOk) {
                resolve([{
                    "userName": "mario",
                    "email": "mario@gmail.com",
                    "phone": "33226655"
                },
                {
                    "userName": "lauro",
                    "email": "lauro@gmail.com",
                    "phone": "33226655"
                }]);
            }
            else {
                reject("Ixi, Errou feio, errou RUDE!!!");
            }
        });
    }
}

executeCalc = (element) => {
    let ca = new calc();

    ca.returnUser(true)
        .then(ca.printUser)
        .then((lines) => {
            element.innerHTML = lines;
        })
        .catch(erro => console.log(erro));
} 