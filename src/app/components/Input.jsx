export default function Input({ type, name, className }) {
    return (
        <input 
            type={type} 
            name={name}
            className={`
                text-black 
                p-2 
                rounded-lg 
                ${className}`} />
    );
}