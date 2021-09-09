const Header = props => {
    return (
        <header className="py-4">
            <nav className="flex justify-between items-center">
            <a href="/" className="text-gray-900 text-xl capitalize font-semibold">
                employee management
            </a>
            <div>
                <button className="py-2 px-4 rounded-sm text-sm text-white uppercase font-bold bg-gray-700 hover:bg-gray-800">
                    Add employee
                </button>
            </div>
            </nav>
        </header>
    )
}

export default Header