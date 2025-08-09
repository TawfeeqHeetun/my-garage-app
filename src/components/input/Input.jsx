function Input({ label, type, index }) {
    const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input-${index}`;
    return (
        <div className="flex flex-col w-full mt-5 mb-5">
            <label className="bg-white br-20 rounded-lg" htmlFor={inputId}>{label}</label>
            <input className="bg-sky-500 h-10 border-1 border-black rounded-lg" type={type} id={inputId} />
        </div>
    );
}

export default Input