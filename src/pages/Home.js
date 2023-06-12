import Header from '../components/header';
import { projectList } from '../dataFake'


const HomePage = () => {
    // console.log(postList);
    return `
        ${Header()}

        <main>
        <div>
            ${projectList.map(function (project) {
        return `
                        <div>
                            <h2>${project.title}</h2>
                            <p>${project.content}</p>
                        </div>
                    `
    }).join("")}
            </div>
        </main>
        <footer></footer>
        
    `
}

export default HomePage