document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/json/projects.json")
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById("projects-list");
            data.projects.forEach(project => {
                const li = document.createElement("li");
                li.textContent = project.name + " - " + project.description;
                projectsList.appendChild(li);
            });
        });
});