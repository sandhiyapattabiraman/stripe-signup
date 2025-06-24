


function Form({lable, type, placeholder,children}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={lable} className='text-gray-700 font-semibold'>{lable}</label>
            {children ? children : 
            <div >
            <input type={type} placeholder={placeholder} className='w-full text-gray-600 h-10 border-1 border-gray-300 rounded-md p-2 '/>
            <span></span>
            </div>
}
        </div>
    )
}

export default Form;