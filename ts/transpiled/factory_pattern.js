"use strict";
class ConnectionFactory {
    constructor(dbType) {
        this.dbType = dbType;
    }
    createDatabaseConnection() {
        switch (this.dbType) {
            case "MySQL":
                return new MySQL();
            case "PostgreSQL":
                return new PostgreSQL();
            case "Oracle":
                return new Oracle();
            default:
                return new MySQL();
        }
    }
}
class Connection {
    constructor() {
        if (new.target === Connection) {
            throw new Error("Cannot construct Connection instances directly");
        }
    }
}
class MySQL extends Connection {
    constructor() {
        super();
    }
    description() {
        return "MySQL Connection";
    }
}
class PostgreSQL extends Connection {
    constructor() {
        super();
    }
    description() {
        return "PostgreSQL Connection";
    }
}
class Oracle extends Connection {
    constructor() {
        super();
    }
    description() {
        return "Oracle Connection";
    }
}
// Usage
const factory = new ConnectionFactory("MySQL");
const db = factory.createDatabaseConnection();
console.log(db.description()); // Output: MySQL Connection
const factory2 = new ConnectionFactory("PostgreSQL");
const db2 = factory2.createDatabaseConnection();
console.log(db2.description()); // Output: PostgreSQL Connection
const factory3 = new ConnectionFactory("Oracle");
const db3 = factory3.createDatabaseConnection();
console.log(db3.description()); // Output: Oracle Connection
const factory4 = new ConnectionFactory("MySQL");
const db4 = factory4.createDatabaseConnection();
console.log(db4.description()); // Output: MySQL Connection
