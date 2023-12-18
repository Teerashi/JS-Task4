class User {
    constructor (name, lastName, gender, massege) {
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.massege = massege;
    }
    info () {
        console.log(`Пользователь ${this.name}, ${this.lastName}, написал такое количество сообщений: ${this.massege}.`);
    }
    newMassege (text) {
        console.log(`${this.name} ${this.lastName} написал новове сообщение: ` + text);
        this.massege ++ ;
    }
}

const user1 = new User('Test', 'Testovich', 'Man', 10);

//user1.info();

//user1.newMassege('привет');

//user1.info();