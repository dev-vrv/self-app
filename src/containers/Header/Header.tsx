import './Header.scss'
import Nav from '../../components/Nav/Nav'
import Logo from '../../components/Logo/Logo'
import { BtnOutlinePrimary } from '../../components/Buttons/Buttons'

function Header() {
    return (
        <header className="header">
            <div className="container d-flex justify-content-between">
                <Logo />
                <Nav />
                <BtnOutlinePrimary type='button' text="Message me" />    
            </div>            
        </header>
    )
}

export default Header