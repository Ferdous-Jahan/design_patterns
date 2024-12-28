/**
 * Interface for the Subject class. Every subject class should implement this interface.
 * @interface
 */
class ISubject {
  addObserver() {}
  removeObserver() {}
  notifyObservers() {}
}

/**
 * Interface for the Observer class. Every observer class should implement this interface.
 * @interface
 */
class IObserver {
  update() {}
}

/**
 * Database class which is a subject class.
 * @class
 * @implements {ISubject}
 */
class Database extends ISubject {
  observers = [];
  operation = "";
  record = "";

  /**
   * Add an observer to the observers array.
   * @param {IObserver} observer - The observer to be added.
   * @returns {void}
   * @memberof Database
   */
  addObserver(observer) {
    this.observers.push(observer);
  }

  /**
   * Remove an observer from the observers array.
   * @param {IObserver} observer - The observer to be removed.
   * @returns {void}
   * @memberof Database
   */
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  /**
   * Notify all the observers with operation and record in the observers array.
   * @returns {void}
   * @memberof Database
   */
  notifyObservers() {
    this.observers.forEach((observer) =>
      observer.update(this.operation, this.record)
    );
    console.log(`\n`);
  }

  /**
   * Edit a record in the database.
   * @param {string} operation - The operation to be performed.
   * @param {string} record - The record to be edited.
   * @returns {void}
   * @memberof Database
   */
  editRecord(operation, record) {
    this.operation = operation;
    this.record = record;
    this.notifyObservers();
  }
}

/**
 * Archiver class which is an observer class.
 * @class
 * @implements {IObserver}
 */
class Archiver extends IObserver {
  /**
   * Update method for the observer. It logs the operation and record.
   * @param {string} operation - The operation to be performed.
   * @param {string} record - The record to be edited.
   * @returns {void}
   * @memberof Archiver
   * */
  update(operation, record) {
    console.log(
      `The archiver says a ${operation} operation was performed on ${record}`
    );
  }
}

/**
 * Boss class which is an observer class.
 * @class
 * @implements {IObserver}
 */
class Boss extends IObserver {
  /**
   * Update method for the observer. It logs the operation and record.
   * @param {string} operation - The operation to be performed.
   * @param {string} record - The record to be edited.
   * @returns {void}
   * @memberof Boss
   * */
  update(operation, record) {
    console.log(
      `The boss says a ${operation} operation was performed on ${record}`
    );
  }
}

/**
 * Client class which is an observer class.
 * @class
 * @implements {IObserver}
 */
class Client extends IObserver {
  /**
   * Update method for the observer. It logs the operation and record.
   * @param {string} operation - The operation to be performed.
   * @param {string} record - The record to be edited.
   * @returns {void}
   * @memberof Client
   * */
  update(operation, record) {
    console.log(
      `The client says a ${operation} operation was performed on ${record}`
    );
  }
}

const database = new Database();

const archiver = new Archiver();
database.addObserver(archiver);

const boss = new Boss();
database.addObserver(boss);

const client = new Client();
database.addObserver(client);

database.editRecord("delete", "employee1");
database.editRecord("update", "employee2");

database.removeObserver(client);
database.editRecord("add", "employee3");
