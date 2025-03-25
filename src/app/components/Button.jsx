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
                ${className}`}>
            {children}
        </button>
    );
}