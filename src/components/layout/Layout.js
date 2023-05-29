/**
 * External dependencies
 */
import { Outlet, NavLink } from "react-router-dom";

/**
 * Internal dependencies
 */
import "./style.css";

/**
 * Render component
 */
const Layout = () => {
    return (
        <div className="app">
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hot">Hot</NavLink>
                    </li>
                    <li>
                        <NavLink to="/regular">Regular</NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
