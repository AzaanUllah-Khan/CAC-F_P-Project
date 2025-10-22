import { forwardRef, useId } from "react"

const Select = (
    {
        options = [],
        label,
        className = "",
        ...props
    }, ref
) => {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className="">{label}</label>}
            <select ref={ref} id={id} {...props} className={`px-3 py-1 bg-white text-black outline-none focus:bg-gray-50 duration-200 transition border border-gray-200 w-full ${className}`}>
                {options?.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select)
