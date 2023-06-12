import { add } from "../../api/project";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = {
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value
            }
            // fetch(`http://localhost:3000/projectList`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(newProject)
            // }).then(() => {
            //     router.navigate('/admin/project')
            // })

            add(newProject).then(() => { router.navigate('/admin/project') })
        })


    })
    return /*html*/`
        <form action="" id="add-form">
            <input type="text" placeholder="Project title" id="title"/>
            <input type="text" placeholder="Project content" id="content"/>
            <button>Add New Project</button>
        </form>
    `
}

export default AddProjectPage;