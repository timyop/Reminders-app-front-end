import './Navbar.css'
import FontContext from "./FontContext";

const Navbar = () => {
    return (
        <FontContext.Consumer>
            { contextData => (
                <nav className={contextData.currentFont}>
                    <h1>Reminders</h1>
                </nav>
            )    }
        </FontContext.Consumer>
    )
}

export default Navbar