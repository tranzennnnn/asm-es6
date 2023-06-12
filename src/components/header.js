import { menuList } from '../dataFake.js'

const Header = () => {
    return `
        <header>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
            <img src="https://picsum.photos/1200/500"/>
        </header>
    `
}

export default Header;