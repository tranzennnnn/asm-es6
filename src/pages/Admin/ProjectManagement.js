import { getAll, remove } from "../../api/project"
import { useEffect, useState } from "../../lib"
import axios from 'axios'

const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:3000/projectList`)
        //     .then(res => res.json())
        //     .then(data => setProject(data))

        // axios.get(`http://localhost:3000/projectList`)
        //     .then(({ data }) => setProject(data))

        // axios.get(`http://localhost:3000/users`)
        //     .then(({ data }) => setProject(data))
        getAll().then(({ data }) => setProject(data))

    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                // fetch(`http://localhost:3000/projectList/${id}`, {
                //     method: 'DELETE'
                // }).then(() => {
                //     const newProjectList = projects.filter((project) => {
                //         return project.id != id
                //     })
                //     setProject(newProjectList);
                // })

                remove(id).then(() => {
                    const newProjectList = projects.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
                })
            })
        }
    })
    return `
        <h1>Management Page</h1>
        <a href="/admin/project/add"><button>Add New Project</button></a>
        <table>
        <thead>
            <tr>
            <th>Stt</th>
            <th>Project Title</th>
            <th>Project Content</th>
            <th>Project Image</th>
            <th>Project Url</th>
            <th>Project Repository</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${projects.map((project, index) => {
        return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.title}</td>
                        <td>${project.description}</td>
                        <td><img src="${project.image}"></td>
                        <td>${project.url}</td>
                        <td>${project.repository}</td>
                        <td>
                            <button class="btn-remove" data-id="${project.id}">Delete</button>
                            <a href="/admin/project/update/${project.id}"><button>Update</button></a>
                        </td>
                    </tr>
                `
    }).join("")}
        </tbody>
        </table>
    `
}
export default ProjectManagementPage