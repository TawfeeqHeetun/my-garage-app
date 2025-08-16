function Button({ text, action, color, tailwindClasses, type }) {
  
    return (

        <button
            role="button"
            className={`bg-${color} ${tailwindClasses} cursor-pointer`}
            onClick={action}
            type={type}
        >
            {text}
        </button>       
    );
}

export default Button