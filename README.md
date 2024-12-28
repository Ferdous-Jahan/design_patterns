# Design Patterns

This repository contains implementations of various design patterns in JavaScript, TypeScript, and possibly C#. Each design pattern is implemented with detailed JSDoc comments for JavaScript and type annotations for TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Design Patterns](#design-patterns)
  - [Strategy Pattern](#strategy-pattern)
  - [Decorator Pattern](#decorator-pattern)
  - [Factory Pattern](#factory-pattern)
  - [Factory Pattern GoF way](#factory-pattern-gof-way)
  - [Observer Pattern](#observer-pattern)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Design patterns are typical solutions to common problems in software design. They are like blueprints that you can customize to solve a particular design problem in your code. This repository aims to provide clear and concise implementations of various design patterns in multiple programming languages.

## Design Patterns

### Strategy Pattern

The Strategy Pattern is a behavioral design pattern that enables selecting an algorithm's behavior at runtime. It defines a family of algorithms, encapsulates each one, and makes them interchangeable.

- **JavaScript**: [strategy_pattern.js](./strategy_pattern.js)
- **TypeScript**: [strategy_pattern.ts](./ts/strategy_pattern.ts)

### Decorator Pattern

The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.

- **JavaScript**: [decorator_pattern.js](./decorator_pattern.js)
- **TypeScript**: [decorator_pattern.ts](./ts/decorator_pattern.ts)

### Factory Pattern

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass.

- **JavaScript**: [factory_pattern.js](./factory_pattern.js)
- **TypeScript**: [factory_pattern.ts](./ts/factory_pattern.ts)

### Factory Pattern GoF way

The Factory Pattern in the GoF (Gang of Four) way is a creational design pattern that defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.

- **JavaScript**: [factory_pattern_GoF.js](./factory_pattern_GoF.js)
- **TypeScript**: [factory_pattern_GoF.ts](./ts/factory_pattern_GoF.ts)

### Observer Pattern

The Observer Pattern is a behavioral design pattern in which an object, known as the subject, maintains a list of its dependents, called observers, and notifies them of any state changes, usually by calling one of their methods.

- **JavaScript**: [observer_pattern.js](./observer_pattern.js)
- **TypeScript**: [observer_pattern.ts](./ts/observer_pattern.ts)

## Usage

To use the design patterns in this repository, you can clone the repository and navigate to the desired pattern's directory. Each pattern includes a JavaScript and TypeScript implementation, and possibly a C# implementation in the future.

```sh
git clone https://github.com/your-username/design_patterns.git
cd design_patterns
```
