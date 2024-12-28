"use strict";
class Database {
    constructor() {
        this.observers = [];
        this.operation = "";
        this.record = "";
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        this.observers = this.observers.filter((observer) => observer !== o);
    }
    notifyObservers() {
        this.observers.forEach((observer) => observer.update(this.operation, this.record));
    }
    editRecord(operation, record) {
        this.operation = operation;
        this.record = record;
        this.notifyObservers();
    }
}
class Archiver {
    update(operation, record) {
        console.log(`The archiver says a ${operation} operation was performed on ${record}`);
    }
}
class Client {
    update(operation, record) {
        console.log(`The backup says a ${operation} operation was performed on ${record}`);
    }
}
class Boss {
    update(operation, record) {
        console.log(`The boss says a ${operation} operation was performed on ${record}`);
    }
}
const database = new Database();
const archiver = new Archiver();
database.registerObserver(archiver);
const client = new Client();
database.registerObserver(client);
const boss = new Boss();
database.registerObserver(boss);
database.editRecord("edit", "record1");
database.editRecord("update", "record2");
database.removeObserver(client);
database.editRecord("edit", "record4");
database.editRecord("update", "record5");
