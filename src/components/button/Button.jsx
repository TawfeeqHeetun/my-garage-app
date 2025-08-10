function Button({ text, action, color, tailwindClasses }) {
  
    return (

        <button
            role="button"
            className={`bg-${color} ${tailwindClasses}`}
            onClick={action}
        >
            {text}
        </button>       
    );
}

export default Button