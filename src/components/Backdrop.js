const Backdrop = props => {
    return (
        <div className={`${props.show ? '': 'hidden'} fixed inset-0 bg-gray-700 bg-opacity-50 z-40`}>
            {props.children}
        </div>
    )
}

export default Backdrop