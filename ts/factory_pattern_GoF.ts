abstract class ConnectionFactoryGoF {
  abstract createConnection(dbType: string): ConnectionGoF;
}

class SecureConnectionFactoryGoF extends ConnectionFactoryGoF {
  createConnection(dbType: string): ConnectionGoF {
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

abstract class ConnectionGoF {
  abstract description(): string;
}

class SecureMySQL extends ConnectionGoF {
  description(): string {
    return "Secure MySQL ConnectionGoF";
  }
}

class SecurePostgreSQL extends ConnectionGoF {
  description(): string {
    return "Secure PostgreSQL ConnectionGoF";
  }
}

class SecureOracle extends ConnectionGoF {
  description(): string {
    return "Secure Oracle ConnectionGoF";
  }
}

const factoryGof = new SecureConnectionFactoryGoF();

const mySqlConnection = factoryGof.createConnection("MySQL");
console.log(mySqlConnection.description()); // Output: Secure MySQL ConnectionGoF

const postgreSQLConnection = factoryGof.createConnection("PostgreSQL");
console.log(postgreSQLConnection.description()); // Output: Secure PostgreSQL ConnectionGoF

const oracleConnection = factoryGof.createConnection("Oracle");
console.log(oracleConnection.description()); // Output: Secure Oracle ConnectionGoF
