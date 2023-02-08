
function hello() {
    let heading = document.querySelector('h1');
    if (heading.innerHTML === "hello") {
        heading.innerHTML = 'Goodbye'
    } else {
        heading.innerHTML = 'Hello'
    }        
}