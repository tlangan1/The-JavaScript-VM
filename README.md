# [Bare Metal JavaScript-The JavaScript Virtual Machine#](https://frontendmasters.com/courses/javascript-cpu-vm/)

## How the CPU Runs Code

1. RAM is just a huge array.
1. Assembly language is a human readable wrapper around machine language.

## Notes

1. This guy claims that the functions benchA, benchB, benchC and benchD return something but he did not have returns statements in these functions; hence, they all returned undefined.
1. I installed the [deopt explorer](https://marketplace.visualstudio.com/items?itemName=rbuckton.deoptexplorer-vscode) extension in Visual Studio Code. It is an extremely powerful for analyzing what the Node JavaScript Virtual Machine, VS8 is doing. `This can give you insight into the inner workings of V8's optimizing compiler that can be used to analyze your code to look for possible causes for performance regressions.`
1. See the `Chromium (Chrome, MS Edge) Commandline Options` section in the link above to understand how to do this in a browser.
1. See the `Caveats` section in the link above if you encounter problems using this tool.

## Virtual Machine Inlining & Deopt

1. To run the deopt and deopt fixed code use the following command line syntax:

   ```
   npm run deopt [number of iterations]

   or

   npm run deopt-fixed [number of iterations]
   ```

   The [number of iterations] is an optional number that can be passed to the code to override the default value of 10 iterations.

1. To debug the code use the following command line syntax:

   ```
   node --inspect deopt.js [number of iterations]

   or

   node --inspect deopt-fixed.js [number of iterations]
   ```

1. Remember that at the machine level everything, the code, the stack, the cache, the data/memory are just lists numbers. The only thing the machine understands is a numbers, arithmetic, flat memory, index access `location and an offset`, subroutines `a very primitive form of a function`, the program counter and the stack pointer.
1. JavaScript virtual machines such as V8 are incredibly complex pieces of software that utilize optimization strategies to provide optimum performance. For example, a VM can choose to run a section of code without compiling it. Other strategies such as inlining are also employed; however, these strategies can create can sometimes `fail` causing the VM to compile some code multiple times. This is known as `Deopting`.
1. The VM uses the following strategy to store a `JavaScript array` in memory.
   ```
   {
       *hiddenClassId
       *prototype
       *rawArray
       length
   }
   ```
   Note that the asterisk, \*, indicates that this item is a pointer. The `hiddenClassId` points to hidden information that JavaScript uses to manage the array that is not accessible to the programmer. The `prototype` points the the prototype object. The `rawArray` points to the location in memory where the actual data is stored and the `length` attribute contains the length of the data in the array. Note that this is not usually the size of the array as the VM always allocates more space than is needed in anticipation of array growth, pops.
1. The array data structure closely matches the underlying machine layout since every access is just a location plus an offset. `I believed this to be true only if it is an array of like things; however, when I did a benchmark test comparing writing to and reading from these two kinds of arrays only the writing to seemed to have a performance degradation for unlike things.`
1. The VM uses the following strategy to store a `JavaScript object` in memory.

   ```
   Object Parent
   {
       *prototype
       [property name 1]
       [property name 2]
       ...
       [property name n]
   }

   Object
   {
       *hiddenClassId
       [property value 1]
       [property value 2]
       ...
       [property value n]
   }
   ```

1. Each object of a certain shape, that is, have the same properties in the same order share an `Object Parent` which is what hiddenClassId points to.
