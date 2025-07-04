
function Button({children, type, className}) {
    return (
        <button type={type} className={`w-full border-2 border-gray-300 rounded-md p-2 flex items-center justify-center gap-2 cursor-pointer ${className}`}>
            {children} 
        </button>
    )
}

export default Button;