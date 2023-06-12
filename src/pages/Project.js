import Header from "../components/header"
import { projectList } from "../dataFake"

const ProjectPage = () => {
    return `
        ${Header()}
        ${projectList.map((project) => {
        return `
            <div>
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <img src="${project.image}">
                <p>${project.url}</p>
                <p>${project.repository}</p>
            </div>
        `
    }).join("")}
            `
}

export default ProjectPage