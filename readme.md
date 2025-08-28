---
QnA
---

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: **getElementById** is used when we want to get a specific element since id selector helps to select an unique element. On the other hand, **getElementsByClassName** returns a HTML collection of all the elements having the same class name as multiple elements can have the same class name. When we need to get multiple elements having similar feature, we use **getElementsByClassName**. Although **querySelectorAll** is used to get more than one element (unlike **querySelector** which only returns the first element of the corresponding CSS passed as function parameter), it is different from **getElementsByClassName** as **querySelectorAll** returns a NodeList of all the corresponding CSS passed as function parameter.


2. How do you **create and insert a new element into the DOM**?

Answer: To create a new element **document.createElement()** function is used. The parameter for this function would be the element, we want to create. Then there is a optional step of using .add() function, which can be used to add css. The mandatory step is to write an .append() or .appendChild() function to finally insert into the DOM. 

An example of from this project:

<!-- const historyList = document.createElement("div");
        historyList.classList.add("mt-4");
        historyList.innerHTML = `<div class="history-element flex justify-between items-center">
        <div class="flex-col justify-between">
        <p class="text-sm font-semibold font-inter">${hotlineName}</p>
        <p class="text-sm text-gray-500 font-madurai">${hotlineNo}</p>
        </div>
        <p class="text-xs text-gray-400">${currentTime}</p>
        </div>
        `;
        catchHistoryBox.appendChild(historyList); -->

In this piece of code, at first, I created a div element using document.createElement(), stored it into historyList, and in its inner HTML, I added the definition of the div. Then this was passed as a parameter to the .appendChild() function.


3. What is **Event Bubbling** and how does it work?

Answer: **Event Bubbling** is a concept where an event is triggered in a child element and it is bubbled upwards to its ancestors. Basically, an element gets an event, and that goes upwards from child to parents.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: In **Event Delegation**, event listener is added in the parent to check which child is clicked. Thus, the necessity of looping multiple times and the complexity can be deducted. It reduces the time needed to find the child which is clicked. It works for  any element that is dynamically added. Delegation can be done using even bubbling. 


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: **preventDefault()** is a function that stops the normal action of something. An example can be stop submission even after clicking submission button. On the other hand, **stopPropagation()** is a function that stops the event from bubbling up to its parent elements.