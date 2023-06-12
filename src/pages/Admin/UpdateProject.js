import { update } from "../../api/project"
import { router, useEffect, useState } from "../../lib"

const UpdateProjectPage = ({ id }) => {
    // console.log(id);
    const [project, setProject] = useState({}) //khai báo biến project để lưu trữ data

    // call api để lấy dữ liệu và gán vào biến project
    useEffect(() => {
        fetch(`http://localhost:3000/projectList/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])

    // thêm mới data
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        // tìm tới form update và lắng nghe sự kiện submit
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault() //chặn sự kiện reload trang
            // lấy dữ liệu từ form
            const newData = {
                "id": id,
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value
            }
            // gọi api để update data
            // fetch(`http://localhost:3000/projectList/${id}`, {
            //     method: "PUT", //phương thức PUT để cập nhật data
            //     headers: {
            //         'Content-Type': 'application/json' //định dạng dữ liệu gửi đi
            //     },
            //     body: JSON.stringify(newData) //chuyển đổi dữ liệu sang định dạng json
            // }).then(() => {
            //     router.navigate("/admin/project")
            //     //sau khi update thành công thì chuyển hướng về trang quản lý
            // })

            update(newData).then(() => { router.navigate("/admin/project") })
        })
    })
    return `
        <form action="" id="update-form">
            <input type="text" placeholder="Project title" id="title" value="${project.title}"/>
            <input type="text" placeholder="Project content" id="content" value="${project.content}"/>
            <button>Update Project</button>
        </form>
    `
}

export default UpdateProjectPage