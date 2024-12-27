/**
 * Factory class to create database connections.
 * @class
 */
class ConnectionFactory {
  dbType;
  /**
   * @param {string} dbType - The type of database connection to create.
   */
  constructor(dbType) {
    this.dbType = dbType;
  }

  /**
   * Create a database connection based on the dbType.
   * @return {connection} The database connection.
   */
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

/**
 * Abstract class representing a generic connection.
 * @abstract
 */
class connection {
  constructor() {
    if (new.target === connection) {
      throw new Error("Cannot construct connection instances directly");
    }
  }

  /**
   * Get the description of the connection.
   * @return {string} The description of the connection.
   */
  description() {
    throw new Error("Method 'description()' must be implemented.");
  }
}

/**
 * Class representing a MySQL connection.
 * @extends connection
 */
class MySQL extends connection {
  constructor() {
    super();
  }

  /**
   * Get the description of the MySQL connection.
   * @return {string} The description of the MySQL connection.
   */
  description() {
    return "MySQL Connection";
  }
}

/**
 * Class representing a PostgreSQL connection.
 * @extends connection
 */
class PostgreSQL extends connection {
  constructor() {
    super();
  }

  /**
   * Get the description of the PostgreSQL connection.
   * @return {string} The description of the PostgreSQL connection.
   */
  description() {
    return "PostgreSQL Connection";
  }
}

/**
 * Class representing an Oracle connection.
 * @extends connection
 */
class Oracle extends connection {
  constructor() {
    super();
  }

  /**
   * Get the description of the Oracle connection.
   * @return {string} The description of the Oracle connection.
   */
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

const factory4 = new ConnectionFactory();
const db4 = factory4.createDatabaseConnection();
console.log(db4.description()); // Output: MySQL Connection
