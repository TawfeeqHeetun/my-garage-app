function Input({ label, type, onChange, required, value, inputID }) { 
    // const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input-${index}`;
    return (
        <div className="flex flex-col w-full mt-5 mb-5">
            <label className="bg-white br-20 rounded-lg" htmlFor={inputID}>{label}</label>
            <input className="bg-sky-500 h-10 border-1 border-black rounded-lg" type={type} id={inputID} onChange={onChange} required={!!required} value={value}/>
        </div>
    );
}

export default Input