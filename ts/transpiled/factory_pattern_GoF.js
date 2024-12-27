"use strict";
class ConnectionFactoryGoF {
}
class SecureConnectionFactoryGoF extends ConnectionFactoryGoF {
    createConnection(dbType) {
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
class ConnectionGoF {
}
class SecureMySQL extends ConnectionGoF {
    description() {
        return "Secure MySQL ConnectionGoF";
    }
}
class SecurePostgreSQL extends ConnectionGoF {
    description() {
        return "Secure PostgreSQL ConnectionGoF";
    }
}
class SecureOracle extends ConnectionGoF {
    description() {
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
