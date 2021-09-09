const GhostButton = ({children, onClick}) => (
    <button onClick={onClick} className="text-sm uppercase tracking-wide font-bold flex items-center space-x-2 rounded-sm py-2 px-4 bg-gray-700 bg-opacity-10 hover:bg-opacity-40 text-gray-700 hover:text-gray-900 transition-colors">
        {children}
    </button>
)

export default GhostButton
