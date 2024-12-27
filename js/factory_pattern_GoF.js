class ConnectionFactory {
  constructor() {}
  createDatabaseConnection() {
    throw new Error("This method must be overwritten!");
  }
}

class SecureConnectionFactory extends ConnectionFactory {
  constructor() {
    super();
  }
  createDatabaseConnection(dbType) {
    switch (dbType) {
      case "MySQL":
        return new SecureMySQL();
      case "PostgreSQL":
        return new SecurePostgreSQL();
      case "Oracle":
        return new SecureOracle();
      default:
        throw new Error("Invalid database type.");
    }
  }
}

class Connection {
  constructor() {
    if (new.target === Connection) {
      throw new Error("Cannot construct Connection instances directly");
    }
  }
  description() {
    throw new Error("This method must be overwritten!");
  }
}

class SecureMySQL extends Connection {
  constructor() {
    super();
  }
  description() {
    return "Secure MySQL Connection";
  }
}

class SecurePostgreSQL extends Connection {
  constructor() {
    super();
  }
  description() {
    return "Secure PostgreSQL Connection";
  }
}

class SecureOracle extends Connection {
  constructor() {
    super();
  }
  description() {
    return "Secure Oracle Connection";
  }
}

const factory = new SecureConnectionFactory();

const mySqlConnection = factory.createDatabaseConnection("MySQL");
console.log(mySqlConnection.description()); // Output: Secure MySQL Connection

const postgreSQLConnection = factory.createDatabaseConnection("PostgreSQL");
console.log(postgreSQLConnection.description()); // Output: Secure PostgreSQL Connection

const oracleConnection = factory.createDatabaseConnection("Oracle");
console.log(oracleConnection.description()); // Output: Secure Oracle Connection
