/* Task  1.2 */
console.log('Task 1.2');
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

/* Task 1.3 */
console.log('Task 1.3');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("eplekake");
    } else if (num % 3 === 0) {
        console.log("eple");
    } else if (num % 5 === 0) {
        console.log("kake");
    } else {
        console.log(num);
    }
}

/* Task 1.4 */

/* Task 1.5 */
function changeDisplay() {
    document.getElementById('magic').style.display = 'none';
}

function changeVisibility() {
    document.getElementById('magic').style.visibility = 'hidden';
}

function reset() {
    const magicBox = document.getElementById('magic');
    magicBox.style.display = 'block';
    magicBox.style.visibility = 'visible';
}

/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
const techList = document.getElementById('tech');
technologies.forEach((tech) => {
    const listItem = document.createElement('li');
    listItem.textContent = tech;
    techList.appendChild(listItem);
});