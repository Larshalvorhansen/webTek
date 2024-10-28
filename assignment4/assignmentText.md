# IT2805 Assignment 4: JavaScript

**Passing marks:** 65%

---

### Part 1 (50%)

Write all the JavaScript within the same provided file `script.js`. Write your code in the places indicated by the comments.

#### Task 1.1 (3%)
Download the provided files `index.html` and `script.js`. Connect the JavaScript file with the HTML document using a relative path. Specify in a comment where in the HTML document you would include it, and explain why.

#### Task 1.2 (3%)
Below `/* Task 1.2 */` in `script.js`, write a for loop that prints the integers from 1 to 20 in the developer console. It should not print the numbers 0 and 21. You can check the result by opening the developer console in your web browser.

#### Task 1.3 (10%)
Implement a simplified version of a common interview test combining a for loop with an if statement. Write your code below `/* Task 1.3 */`.

Use a for loop to iterate through the array `numbers`. For each element, print the number to the console using `console.log`. If the number is divisible by 3, print "eple" instead; if divisible by 5, print "kake".

**Hint:** Use modulo (`%`) to check divisibility, e.g., `12 % 6` returns 0.

**Author's Note:** If a number is divisible by both 3 and 5, either "eple" or "kake" can be printed depending on your implementation.

#### Task 1.4 (10%)
Add a title dynamically to the page. Instead of adding the title in HTML, use JavaScript to manipulate the DOM. In `index.html`, there’s an `<h1>` element with the `id="title"`. Use JavaScript to set its text to "Hello, JavaScript".

**Hint:** Use `.innerText` to add text content to an element.

#### Task 1.5 (12%)
Using JavaScript, change the style of two divs.

The provided HTML contains three buttons and two divs. In `script.js`, three functions correspond to each button. Each button should activate its respective function:

- **changeDisplay()**: Set `#magic`'s display attribute to `none`.
- **changeVisibility()**: Set `#magic`'s visibility attribute to `hidden` and display attribute to `block`.
- **reset()**: Reset `#magic`'s display and visibility attributes to `block` and `visible`, respectively.

If implemented correctly, the div with number 1 should disappear when "display: none" is clicked and become invisible (while taking up space) when "visibility: hidden" is clicked.

#### Task 1.6 (12%)
Populate an HTML list using JavaScript.

In `index.html`, there’s an empty unordered list with `id="tech"`. In `script.js` under `/* Task 1.6 */`, loop through the array `technologies` and add each element to this list.

**Hint:** You can concatenate list elements with `<li></li>`. Alternatively, use `appendChild()`.

---

### Part 2 (50%)

Create a **todo list** with two files: `todo.html` and `todo.js`.

#### Task 2.1 (5%)
Create an HTML page with a title, an add button, an input field, an output element, and a task list. Add IDs where needed.

When the page loads, the input field should focus automatically. Connect the HTML with the JavaScript file.

**Hint:** Use `input` elements; an input with `type="submit"` can act as the button.

#### Task 2.2 (10%)
Implement a function `addTask()` in JavaScript. When the user enters a task and clicks add, the task should appear at the top of the list with a checkbox.

**Hints:**
- Use event listeners for button clicks.
- To remove list bullets, use CSS.
- Use `preventDefault()` to stop form reload.

#### Task 2.3 (10%)
Store tasks as an object.

Create an empty list `tasks` in `todo.js` and expand `addTask()` to add task objects to it, with at least one attribute for task text.

Check functionality with `console.log(tasks)`.

#### Task 2.4 (12%)
Implement a task-checking feature using JavaScript.

When checked, a task should be struck through. If unchecked, it should revert to its default state.

#### Task 2.5 (13%)
Update an output element to show completed tasks as `X/Y completed`, where `X` is completed tasks and `Y` is total tasks.

---

### Submission

Submit `index.html`, `script.js`, `todo.html`, and `todo.js` in a zip folder on Blackboard.