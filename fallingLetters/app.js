const container = document.getElementById('container');
const heading = document.getElementById('h1')

function handlePress(e) {
    if (e.key === 'Enter') {
        heading.style.visibility = "visible"
        return container.innerHTML = '';
    }
    heading.style.visibility = "hidden"
    const letter = document.createElement('p');
    letter.classList.add('falling')
    letter.textContent = e.key;
    container.appendChild(letter);
    setTimeout(() => {handleTranslate(letter)}, 100);
}

function handleTranslate(letter) {
    letter.classList.add('fell');
}

function handleBackspace(e) {
    if (e.key === 'Backspace') {
        container.removeChild(container.lastChild)
    }
}

document.addEventListener('keypress', handlePress);
document.addEventListener('keyup', handleBackspace)