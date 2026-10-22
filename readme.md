# JavaScript Problem Solving Assignment

## 📌 About This Repository

This repository contains solutions to five JavaScript problem-solving tasks. The problems focus on functions, conditional logic, data validation, mathematical calculations, arrays, objects, and string manipulation.

I solved these problems through my own logic and practice, with a little assistance from AI in some parts. This assignment helped me improve my JavaScript problem-solving skills and understand how to handle different types of inputs and return the expected outputs.

## 🎯 Problems Overview

### Problem 01: New Price for Eid Sale

**Function Name:** `newPrice()`

A function that calculates the new price of a product after applying a discount.

**Key Features:**

- Calculates the discount amount based on the original price and discount percentage.
- Returns the final price with three decimal places.
- Validates the input types.
- Returns `"Invalid"` if an input is not a number or the discount is outside the valid range.

**Concepts Practiced:** Functions, arithmetic operations, conditional statements, input validation, and number formatting.

### Problem 02: OTP Validation for Zapshift

**Function Name:** `validOtp()`

A function that validates an OTP based on specific formatting rules.

**Validation Rules:**

- The OTP must be a string.
- The OTP must contain exactly 8 characters.
- The OTP must start with `"ph-"`.
- Returns `true` if the OTP matches the rules, otherwise returns `false`.
- Returns `"Invalid"` if the input is not a string.

**Concepts Practiced:** String methods, `startsWith()`, `length`, conditional statements, and type checking.

### Problem 03: BCS Final Score Calculator

**Function Name:** `finalScore()`

A function that calculates the final score of a BCS examination based on correct, incorrect, and skipped answers.

**Scoring Rules:**

- Each correct answer earns 1 point.
- Each incorrect answer deducts 0.5 points.
- Each skipped answer earns 0 points.
- The total number of questions must equal 100.
- The final score is rounded using `Math.round()`.
- Returns `"Invalid"` if the input is not a valid object or the total does not equal 100.

**Concepts Practiced:** Objects, property access, arithmetic operations, `Math.round()`, and input validation.

### Problem 04: Upcoming Gono Vote

**Function Name:** `gonoVote()`

A function that counts `"ha"` and `"na"` votes and determines whether `"ha"` has a majority.

**Output Rules:**

- Returns `true` if `"ha"` votes exceed `"na"` votes.
- Returns `"equal"` if both vote counts are equal.
- Returns `false` if `"ha"` votes are fewer than `"na"` votes.
- Returns `"Invalid"` if the input is not an array.

**Concepts Practiced:** Arrays, loops, counting, comparison operators, conditional statements, and type checking.

### Problem 05: Text Analyzer for an AI Company

**Function Name:** `analyzeText()`

A function that analyzes a sentence and returns an object containing the longest word and the total character count, excluding spaces.

**Key Features:**

- Finds the longest word in a sentence.
- Returns the first word when multiple words share the maximum length.
- Counts all characters except spaces.
- Returns an object containing `longwords` and `token`.
- Returns `"Invalid"` if the input is not a valid string or contains only spaces.

**Concepts Practiced:** Strings, `split()`, `join()`, loops, string length, object properties, and input validation.

## 🛠️ Technologies Used

- JavaScript
- Basic problem-solving techniques
- Built-in JavaScript methods and functions

## 📚 What I Learned

Through these problems, I practiced:

- Writing reusable functions.
- Using parameters and return values correctly.
- Validating inputs before processing them.
- Working with strings, arrays, and objects.
- Applying conditional statements and loops.
- Performing mathematical calculations and rounding results.
- Using built-in JavaScript methods.
- Handling invalid inputs and edge cases.
- Understanding problem requirements and converting them into logical steps.

## 📂 Repository Structure

```text
javascript-problem-solving/
├── README.md
└── solutions.js
```

_Note: The file structure above is an example. Update it to match the actual files in your repository._

## 🚀 Purpose of This Repository

The purpose of this repository is to document my JavaScript learning journey and strengthen my foundation in programming through practical problem-solving exercises.

I will continue practicing more problems to improve my logical thinking, write cleaner code, and become a better developer.

---

**Author: Infa Pramanik**

**Language:** JavaScript

**Repository Type:** JavaScript Problem Solving Assignment
