<!-- /* **************Code by Najir Seikh - 22/05/2023************** */ -->

# <a href='https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP'><strong>Namaste 🙏 JavaScript<strong></a>

<a href='https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP'>Namaste JavaScript</a> is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of JavaScript in detail and everything about how JS works behind the scenes inside the JavaScript engine.
<br>
Here is the course link ---> <a href='https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP'><strong>Namaste 🙏 JavaScript<strong></a>

## <a href='https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=2'>Ep.1: How JavaScript Works 🔥& Execution Context</a>

### \*How JavaScript works?

Ans-Everything in JavaScript happens inside an "execution context".

Execution context has two components -

#### 1. Memory component[variable environment]

-This is the place where all variables and functions are stored as key value pairs. eg-{key: value || n:2;}

#### 2. Code component[Thread of execution]

-This is the place where code is executed one line at a time.

### \*JavaScript is a synchronous single-threaded language

-Single threaded means JavaScript can execute once command at a time

-Synchronous single-threaded means JavaScript can execute one command at a time in a specific order.

## <a href='https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3'>Ep. 2: How JavaScript Code is executed? ❤️& Call Stack</a>

### Summary:

When JavaScript code is run, an Execution Context is created. This execution context is formed in 2 phases:-

#### 1. Memory Creation Phase:

This is where all the variables and functions are stored in the memory and all the variables are assigned an undefined placeholder. All the functions keep the entire function code.

```
variable: undefined,
function: function code block
```

#### 2. Code Execution Block:

This is where all the code is run one line at a time in a synchronous manner. All the assignments, calculations and logical parts are executed here.

Another thing about functions is that JavaScript ignores the function until it is invoked and when a function is invoked, a new temporary Execution Context is created specially for this function. It remains active until the function executes and is deleted after its work is done.

Since we can have multiple nested function calls hence JavaScript uses a Call Stack to maintain the order of functions and Execution Contexts. A new EC is inserted when a function is called and popped when that function is executed.

Call Stack goes by many names such as Execution Context Stack, Program Stack, Control Stack etc.

### Answer in details :

#### What happens when you run JavaScript Code?

An Execution Context is created when we run a JS program

#### What happens while executing return statement

Please return the control back to the Execution phase from where the current function, within which this "return" statement is present, was invoked

#### Code Execution synchronously

```
var n=2;
function square(num){
	var ans=num*num;
	return ans;
}
var square2=square(n);
var square4= square(4);
```

Initially a global execution context is created and in this global execution context , memory allocation starts. So, memory allocation happens in the form of key-value pairs. It starts with allocating UNDEFINED to variables of datatype var- n,square2 and square4. In this memory allocation phase itself, for function a memory named square and value containing the entire code under function named square is created.

Now, the code execution phase starts and the JS engine starts reading the program line by line.
The value of variable n is seen to be as ‘undefined’. Code Execution happens and the value of n is set to 2.

Then in the line number associated to the function named square, nothing needs to be executed and hence it skips to the line where something needs to be executed

Thereafter, the value of variable square2 is changed from undefined to 4. How it is done is by triggering the function mentioned as a value for square2.
So, it comes to a function where a local execution context is created. In this, memory creation phase happens and one memory named ans is created and the value is set to undefined. Again, the memory named num is also created and pointed towards n and thus num gets the value 2.

Thereafter, code execution phase is initialised and the value of ans is set to 4. Following this, the return statement is hit and the control is handed over to the global execution phase. After getting the control the value of square2 is changed to 4.

Following this, the value of square4 is changed from undefined to 16. How it is done is by triggering the function mentioned as a value for square4 .
So, it comes to a function where a local execution context is initialised. In this, memory creation phase happens and two memories named num and ans are created and the value of ans is set to undefined.Here, the memory location named num is pointed towards the argument which probably has no named but got a value of 4 and thus this variable named num is assigned 4 Thereafter, code execution phase is initialised and the value of num is set to 4 and the value of ans is set to 16. Following this, the return statement is hit and the control is handed over to the global execution phase. After getting the control, the value of square4 is changed to 16.

#### Call Stack in JavaScript

Initially a global execution context is created AND PUT INSIDE THE CALL STACK and in this global execution context , memory allocation starts. So, memory allocation happens in the form of key-value pairs. It starts with allocating UNDEFINED to variables of data type var- n,square2 and square4. In this memory allocation phase itself, for function a memory named square and value containing the entire code under function named square is created.

Then in the line number associated to the function named square, nothing needs to be executed and hence it skips to the line where something needs to be executed

Thereafter, in the turn for line number associated with variable square2 comes and a local execution context is created AND PUT INSIDE THE CALL STACK OVER THE Global Execution Context. Now, with the local execution context, memory creation phase happens and two memories named num and ans are created. The value of ans is set to undefined and the memory location named num is pointed towards n. Thereafter, code execution phase is initialised and the value of ans is set to 4. Following this, the return statement is hit and the control is handed over to the global execution phase AND LOCAL EXECUTION CONTEXT DISAPPEARS FROM THE CALL STACK.

Following this, in the turn for line number associated with variable square4 comes and a local execution context is created AGAIN AND PUT INSIDE THE CALL STACK OVER THE Global Execution Context. Now, with the local execution context, memory creation phase happens and two memories named num and ans are created and just the value of ans is set to undefined. Here, the memory location named num is pointed towards the argument which probably has no name but got a value of 4 and thus this variable named num is assigned 4.Thereafter, code execution phase is initialised and the value of ans is set to 16. Following this, the return statement is hit and the control is handed over to the global execution phase AND LOCAL EXECUTION CONTEXT DISAPPEARS FROM THE CALL STACK.

Call stack maintains the order of execution in the execution context. It has many names such as Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack.

## <a href='https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4'>Ep. 3: Hoisting in JavaScript 🔥(variables & functions)</a>

### Description:

“Hoisting as a core concept relies on the way how the Execution Context is created. In the first phase i.e. the Memory Allocation Phase all the variables and functions are allocated memory, even before any code is executed. All the variables are assigned undefined at this point in time in the local memory. “

### Summary 1:

Hoisting in javascript?
-Hoisting is a fenomena in javascript by which you can access functions and variables even before you have initialised it.

Code-

```
getName();
console.log(x);
function getName(){
console.log("namaste javascript");
}
```

Output-

```
namaste javascript
undefined
```

Note- This is happening just because of that execution context.
Note- In case of Hoisting the arrow function is considered as variable not as a function.
Only proper function declaration will be considered as function

### Summary 2:

1. In JS, before the code is executed, the variables get initialized to undefined.
2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
5. Variable declarations are scanned and are made undefined 6. Function declarations are scanned and are made available

### Summary 3:

1. Hoisting in JavaScript is a process in which all the Variables,
2. Functions and Class defination are declared BEFORE execution of the code
3. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
4. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED. 6. When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.
