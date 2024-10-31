/* Task  1.2 */
console.log('Task  1.2');

for (i=1; i<21; i++){
    console.log(i);
}
    

/* Task  1.3 */
console.log('Task  1.3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (i in numbers){
    if (i % 3 ){
        console.log("eple");
    }
    else if (i%5){
        console.log("kake");
    }
}

/* Task  1.4 */
document.getElementById('title').innerText = "Hello Javascript";



/* Task  1.5 */
function changeDisplay () {
    document.getElementById('magic').innerText = null;
}

function changeVisibility () {
    document.getElementById('magic').hidden = true;
}

function reset () {
    document.getElementById('magic').innerText = 1;
    document.getElementById('magic').hidden = false;
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

for (tech in technologies){
    document.getElementById("tech").append(technologies[tech]);
    document.getElementById("tech").append()
}

