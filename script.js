/* **************Code by Najir Seikh - 07/06/2023************** */

/* **************Episode 004: How functions work in JS ❤️ & Variable Environment - 07/06/2023************** */
/*
// Code-
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// Output-
// 10
// 100
// 1
*/
/*
Summary 1:
1. We learnt how functions work in JS. 
2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase. 
3. In the first phase, the variables are assigned "undefined" while functions have their own code. 
4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack. 
5. Once the function ends, the EC is removed from the call stack. 
6. When the program ends, even the global EC is pulled out of the call stack.

Summary 1:
1) The higher level of the GEC on the stack, higher its preference 
2) GEC is created as the function is invoked and destroyed as its execution is completed 
3) same variable names but different scope of execution separates the variable values
*/

/* **************Episode 005: SHORTEST JS Program 🔥window & this keyword - 08/06/2023************** */
/*
var a = 10;
console.log(window.a);
console.log(a);
console.log(this.a);

// Output-
// 10
// 10
// 10
*/
/*
Summary:
1. Shortest Program in JS: Empty file. Still, browsers make global EC and global space along with Window object.
2. Global Space: Anything that is not in a function, is in the global space.
3. Variables present in a global space can be accessed by a "window" object. (like window.a)
4. In global space, (this === window) object.

Notes:
• window object is created by the JS engines of the respective browsers when global execution context is created.
• whenever an execution context is created a "this" variable is also created.
• at the global level "this" points to the global object( window object in case of browsers).
• anything that is not inside a function is the "global space".
• whenever we create any variables or functions in the "global space", they get attached to the global object( window object in case of browsers).

so to access the variables/function defined in the global space , 
we can use any of the below:
  var a = 10;
  console.log(window.a);
  console.log(a);
  console.log(this.a)             //at the global space level, where this points to the window object
*/
/* **************Episode 006: undefined vs not defined in JS 🤔 - 08/06/2023************** */
/*
Summary-
1. Undefined is like a placeholder till a variable is not assigned a value.
2. undefined !== not defined
3. JS- weakly typed language since it doesn't depend on data type declarations.
4. Understand the difference between undefined and not defined in JS. 5. 5. Many developers assume that undefined is exactly the same as not defined, but that's not true. 
6. undefined is a value in JavaScript and in fact, it also takes up memory space.  
***undefined is not a keyword. It is a global read-only variable which represents the value undefined.
*/
/*
var a;
console.log(a);
a = 10;
console.log(a);
a = 'Hello World!';
console.log(a);

// Output-
// undefined
// 10
// Hello World!

*/
/* **************Episode 007: The Scope Chain, 🔥Scope & Lexical Environment - 08/06/2023************** */
/*
Summary-
0) Lexical environment = EC's Local Memory + Reference to Lexical Environment of its parent.

1) Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory.

2) Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked.

3) Global execution context holds reference to null.

4)  Javascript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed.

5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.

6) If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console.
*-------------*

Js engine creates Global Execution Context comprising of 2phases 
1.Memory creation phase 
2.code component phase 

Every execution context has its own lexicon environment that holds reference to its parent's lexicon environ 
Hence 
lexicon environ of an execution context= local memory space +lexicon environ of its parent

Scope is where js can find required variable /function 

Scope chain is the process of find that req var/fn in the lexicon environs of all execution contexts 

Lexicon environ of global execution context is Global memory space +outer environ ie null 
Global memory space comprises of all variables and functions skimmed by js engine at top level even before the very first line code execution began
*-------------*

Scope: where you can access the value of our function in our code

Lexical environment : the Local memory(Created and goes hand-in-hand with 1st phase of corresponding execution context ) along with Lexical environment with the parent! and every time the lexical environment of the corresponding context is used, it references to its parent Lexical environment

for simply understanding, I will try it as 'an onion example'
see when one layer of onion(a variable) covers the layer inside it, it also covers the inner layers inside that layer and a point on our first layer of onion encloses inner layers our inner layer(variable and function inside the layer) gets covered by our first layer(can access the variable on the context) and the second layer(under first layer) encloses the third layer(innermost layer)still covered by 1st layer(can access the variable on layer)

the Clojure concept starts here
*/

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();

// Output-
// 10
