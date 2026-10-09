import { Link, Outlet } from 'react-router-dom';
function Layout() {
    return (
        <div>
            <nav>
                <Link to="/Home">Home</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}
export default Layout;
