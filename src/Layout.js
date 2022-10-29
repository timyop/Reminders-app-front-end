import {Outlet, Link} from 'react-router-dom'
import FontContext from "./FontContext";

const Layout = () => {
    return (
        <FontContext.Consumer>
            {contextData => (
                <>
                    <nav className={contextData.currentFont}>
                        <Link to="/">Home</Link>
                        <Link to="/reminders">The List</Link>
                        <Link to="/addReminder">Add reminder</Link>
                    </nav>
                    <Outlet/>
                </>
            )}
        </FontContext.Consumer>
    )
}

export default Layout
