document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.querySelector('.project-grid');
    // Example interactivity
    projectGrid.addEventListener('click', (event) => {
        alert("Project clicked!");
    });
});
