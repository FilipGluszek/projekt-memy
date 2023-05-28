/**
 * External dependencies
 */
import { Outlet, Link } from "react-router-dom";

/**
 * Internal dependencies
 */
import "./style.css";

/**
 * Render component
 */
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/hot">Hot</Link>
                    </li>
                    <li>
                        <Link to="/regular">Regular</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
