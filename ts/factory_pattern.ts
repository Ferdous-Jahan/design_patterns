class DataBaseFactory {
  dbType: string;
  constructor(dbType: string) {
    this.dbType = dbType;
  }

  createDatabase(): Connection {
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

abstract class Connection {
  constructor() {
    if (new.target === Connection) {
      throw new Error("Cannot construct Connection instances directly");
    }
  }

  abstract description(): string;
}

class MySQL extends Connection {
  constructor() {
    super();
  }
  description(): string {
    return "MySQL Connection";
  }
}

class PostgreSQL extends Connection {
  constructor() {
    super();
  }
  description(): string {
    return "PostgreSQL Connection";
  }
}

class Oracle extends Connection {
  constructor() {
    super();
  }
  description(): string {
    return "Oracle Connection";
  }
}

// Usage
const factory = new DataBaseFactory("MySQL");
const db = factory.createDatabase();
console.log(db.description()); // Output: MySQL Connection

const factory2 = new DataBaseFactory("PostgreSQL");
const db2 = factory2.createDatabase();
console.log(db2.description()); // Output: PostgreSQL Connection

const factory3 = new DataBaseFactory("Oracle");
const db3 = factory3.createDatabase();
console.log(db3.description()); // Output: Oracle Connection

const factory4 = new DataBaseFactory("MySQL");
const db4 = factory4.createDatabase();
console.log(db4.description()); // Output: MySQL Connection
