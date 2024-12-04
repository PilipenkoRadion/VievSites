// Находим элементы
const projectList = document.getElementById("project-list");
const projectForm = document.getElementById("project-form");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectLink = document.getElementById("project-link");

// Обработчик отправки формы
projectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Получаем значения из формы
    const title = projectTitle.value.trim();
    const description = projectDescription.value.trim();
    const link = projectLink.value.trim();

    // Проверяем, чтобы все поля были заполнены
    if (title && description && link) {
        // Создаем HTML для нового проекта
        const project = document.createElement("div");
        project.classList.add("project");

        project.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" target="_blank">View Project</a>
        `;

        // Добавляем новый проект в список
        projectList.appendChild(project);

        // Очищаем форму
        projectForm.reset();
    }
});
