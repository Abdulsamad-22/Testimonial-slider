import { slider } from "./data.js"

window.addEventListener('keydown', () =>{
    buttonKey(event);
});

function buttonKey(event) {
    if (event.key === 'ArrowRight') { 
        console.log('arrow-right');
        // Next button clicked
        currentIndex = (currentIndex + 1) % slider.length; // Increment and loop
        renderSlider(currentIndex);
        console.log('next');
    } else if (event.key === 'ArrowLeft') {
        // Previous button clicked
        currentIndex = (currentIndex - 1 + slider.length) % slider.length; // Decrement and loop
        renderSlider(currentIndex);
    }
}


const container = document.querySelector('.all-info');

let currentIndex = 0;

function renderSlider(currentIndex) {

    const { description, name, role, image } = slider[currentIndex];
    const renderHtml = `
        <div class="text-role">
            <img class="pattern-quotes" src="images/pattern-quotes.svg" alt="pattern-quotes">

            <p class="quotes js-quotes">
                ${description}
            </p>

            <p class="name js-name">
             ${name}
            </p>
            <p class="role">
                ${role}
            </p>
        </div>

        <div class="students-dp">
            <img class="pattern-bg" src="images/pattern-bg.svg" alt="pattern-bg">

            <img class="student-image js-student-image" src="${image}" alt="${name}">

            <span class="toggle-button">
            <img class="prev" src="images/icon-prev.svg">

            <img class="next" src="images/icon-next.svg">    
            </span>
        </div>
    `;
    container.innerHTML = renderHtml;
}

renderSlider(currentIndex);

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('next')) {
        // Next button clicked
        currentIndex = (currentIndex + 1) % slider.length; // Increment and loop
        renderSlider(currentIndex);
    } else if (event.target.classList.contains('prev')) {
        // Previous button clicked
        currentIndex = (currentIndex - 1 + slider.length) % slider.length; // Decrement and loop
        renderSlider(currentIndex);
    }
});
