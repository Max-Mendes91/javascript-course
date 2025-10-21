# JavaScript Coding Challenges - Cars & Electric Vehicles

This repository contains coding challenges focused on object-oriented programming in JavaScript. The exercises explore constructor functions, ES6 classes, inheritance, polymorphism, method chaining, and private fields.

---

## Challenge 1: Car Constructor Function

**Goal:** Implement a car with basic functionality using a constructor function.

**Tasks:**
1. Create a `Car` constructor with `make` and `speed` properties.
2. Implement an `accelerate` method (+10 km/h) and log the speed.
3. Implement a `brake` method (-5 km/h) and log the speed.
4. Create two car objects and test multiple calls of `accelerate` and `brake`.

**Test Data:**
- BMW at 120 km/h
- Mercedes at 95 km/h

---

## Challenge 2: Car ES6 Class

**Goal:** Re-create Challenge 1 using ES6 classes and add getter/setter for speed in mi/h.

**Tasks:**
1. Create a `CarCl` class with `make` and `speed`.
2. Add `accelerate` and `brake` methods.
3. Add a getter `speedUS` that converts km/h → mi/h.
4. Add a setter `speedUS` that sets speed in mi/h (converted to km/h internally).
5. Test with a `Ford` car at 120 km/h.

---

## Challenge 3: Electric Car Constructor (EV)

**Goal:** Extend Car constructor to create Electric Cars (EV).

**Tasks:**
1. Implement `EV` as a child constructor of `Car`.
2. Add `charge` property for battery percentage.
3. Implement `chargeBattery` method to update battery charge.
4. Override `accelerate` to increase speed by 20 km/h and decrease charge by 1%.
5. Test with a Tesla at 120 km/h and 23% charge.

**Concepts Practiced:**  
- Constructor function inheritance  
- Method overriding (polymorphism)  
- Call and prototype chaining  

---

## Challenge 4: Electric Car ES6 Class (EVCl)

**Goal:** Re-create Challenge 3 using ES6 classes with method chaining and private fields.

**Tasks:**
1. Create `EVCl` class that extends `CarCl`.
2. Make `charge` property private (`#charge`).
3. Implement `chargeBattery` method with chainability.
4. Override `accelerate` method to update speed and charge, allowing chaining.
5. Update `brake` method in `CarCl` to return `this` for chaining.
6. Test with a Rivian at 120 km/h and 23% charge using method chaining.

**Concepts Practiced:**  
- ES6 class inheritance  
- Private fields (`#charge`)  
- Method chaining  
- Polymorphism  

---

## Key Concepts Covered

- Constructor functions and ES6 classes  
- Object-oriented principles: inheritance, encapsulation, polymorphism  
- Method overriding and chaining  
- Getters and setters  
- Private class fields  
- Practical usage of `this` and `super`  

---

## How to Run

1. Open the JS file in a browser console or Node.js environment.
2. Create instances of `Car`/`CarCl`/`EV`/`EVCl`.
3. Test the methods (`accelerate`, `brake`, `chargeBattery`) and experiment with getters/setters and chaining.
4. Observe the console logs for speed and battery updates.

