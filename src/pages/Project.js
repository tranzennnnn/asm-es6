import Header from "../components/header"
import { projectList } from "../dataFake"

const ProjectPage = () => {
    return `
        ${Header()}
        ${projectList.map((project) => {
        return `
            <div>
                <h2>${project.title}</h2>
                <p>${project.content}</p>
            </div>
        `
    }).join("")}
            `
}

export default ProjectPage