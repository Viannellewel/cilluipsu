class Singleton {
  // Private static variable to hold the single instance
  static #instance = null;

  // Private constructor to prevent direct instantiation
  constructor() {
    if (Singleton.#instance) {
      throw new Error("Use Singleton.getInstance() to get the single instance of this class.");
    }

    // Initialize any properties here
    this.someProperty = 'Initial Value';

    // Assign the instance variable
    Singleton.#instance = this;
  }

  // Public static method to get the single instance
  static getInstance() {
    if (!Singleton.#instance) {
      // Create the instance if it does not exist
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }

  // Example method
  someMethod() {
    console.log('This is a method in the Singleton class.');
  }
}

// Usage
const instance1 = Singleton.getInstance();
instance1.someMethod(); // Output: This is a method in the Singleton class.

const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Output: true

// Trying to create a new instance directly will throw an error
try {
  const directInstance = new Singleton();
} catch (e) {
  console.error(e.message); // Output: Use Singleton.getInstance() to get the single instance of this class.
}
