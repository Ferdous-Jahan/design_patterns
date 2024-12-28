interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(operation: string, record: string): void;
}

class Database implements Subject {
  private observers: Observer[] = [];
  private operation: string = "";
  private record: string = "";

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    this.observers = this.observers.filter((observer) => observer !== o);
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) =>
      observer.update(this.operation, this.record)
    );
  }

  public editRecord(operation: string, record: string): void {
    this.operation = operation;
    this.record = record;
    this.notifyObservers();
  }
}

class Archiver implements Observer {
  public update(operation: string, record: string): void {
    console.log(
      `The archiver says a ${operation} operation was performed on ${record}`
    );
  }
}

class Client implements Observer {
  public update(operation: string, record: string): void {
    console.log(
      `The backup says a ${operation} operation was performed on ${record}`
    );
  }
}

class Boss implements Observer {
  public update(operation: string, record: string): void {
    console.log(
      `The boss says a ${operation} operation was performed on ${record}`
    );
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
