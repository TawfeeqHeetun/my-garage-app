function Button({ text, action, color }) {
  
    return (
 
        <div className="flex flex-col w-full mt-5 mb-5 items-center justify-center">
            <button
                role="button"
                className={`bg-${color} h-10 max-w-25 w-full border-1 border-black rounded-lg text-white font-bold`}
                onClick={action}
            >
                {text}
            </button>        </div>
    );
}

export default Button