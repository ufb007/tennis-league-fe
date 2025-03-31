export default function Button({ type, name, className, children }) {
    return (
        <button 
            type={type} 
            name={name} 
            className={`
                bg-foreground 
                text-background 
                rounded-full 
                p-2 
                uppercase 
                border
                bg-green-500
                text-white
                bg-gradient-to-r from-green-400 via-green-500 to-green-600
                hover:bg-gradient-to-br
                focus:ring-4 focus:outline-none focus:ring-green-300
                ${className}`}>
            {children}
        </button>
    );
}