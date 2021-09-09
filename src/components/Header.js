import { NavLink } from 'react-router-dom'

const Header = props => {
    return (
        <header className="py-4">
            <nav className="flex justify-between items-center">
            <NavLink to="/" exact className="text-gray-900 text-xl capitalize font-semibold">
                employee management
            </NavLink>
            <div>
                <NavLink to="/add" className="py-2 px-4 rounded-sm text-sm text-white uppercase font-bold bg-gray-700 hover:bg-gray-800">
                    Add employee
                </NavLink>
            </div>
            </nav>
        </header>
    )
}

export default Header