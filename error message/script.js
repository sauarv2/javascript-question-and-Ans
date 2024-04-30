// question******************************
/*Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan: e1"
2 >> "Emergency stop: e2"
3 >> "Pump Error: e3"
4 >> "c: e4"
5 >> "Temperature Sensor Error: e5"
For any other value, return 101 (you can use an if statement here).

Examples
error(1) ➞ "Check the fan: e1"

error(2) ➞ "Emergency stop: e2"

error(3) ➞ "Pump Error: e3"
*/

function error(num) {
  const errmessage = {
    1: "Check the fan: e1",
    2: "Emergency stop: e2",
    3: "Pump Error: e3",
    4: "c: e4",
    5: "Temperature Sensor Error: e5",
  };
  return errmessage[num] || 101;
}

console.log(error(1));
console.log(error(2));
console.log(error(3));
console.log(error(4));
console.log(error(5));
console.log(error(6));

// This code defines an object errorMessages where the keys are the error numbers and the values are the corresponding error messages. When the error() function is called with a number, it retrieves the corresponding error message from the errorMessages object. If the number is not found in the object, it returns 101.

/*
Sure, the provided Javascript code defines a function named `error` that takes an error number (`num`) as input and returns the corresponding error message. It utilizes an object literal (`errmessage`) to store the error messages mapped to their respective error codes.

Here's a breakdown of the code:

1. **Function Definition (`error(num)`)**
   - The code defines a function named `error` that accepts a single argument `num`.

2. **Error Message Object (`errmessage`)**
   - An object literal named `errmessage` is created to store the error messages.
   - The object uses numerical keys (1-5) to represent the error codes and corresponding error messages as values.
   - For example, `1: "Check the fan: e1"` maps error code 1 to the message "Check the fan: e1".

3. **Error Message Lookup (`errmessage[num] || 101`)**
   - Inside the function, the code retrieves the error message associated with the provided `num` using bracket notation (`[]`).
   - If the provided `num` doesn't exist as a key in the `errmessage` object, the expression evaluates to `undefined`.
   - The `||` (OR) operator ensures that if the lookup results in `undefined`, the default value (`101`) is returned.

4. **Function Return Value**
   - The function returns the retrieved error message or the default error message (101) if no match is found.

5. **Console Output (`console.log(error(1));` etc.)**
   - The code demonstrates the usage of the `error` function by calling it with various error codes (1-6) and printing the returned messages to the console using `console.log`.

**Example Output:**

```
Check the fan: e1
Emergency stop: e2
Pump Error: e3
c: e4
Temperature Sensor Error: e5
101
```

As you can see, the code outputs the corresponding error messages for codes 1 to 5 and the default message (101) for the non-existent code 6.

In essence, this code provides a mechanism to efficiently retrieve error messages based on error codes, promoting readability and maintainability in your JavaScript applications.
*/
