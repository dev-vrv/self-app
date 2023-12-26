import "./Buttons.scss";

interface IBtnProps {
    type?: "button" | "submit" | "reset";
    className?: string;
    children?: React.ReactNode;
}

function Button({type = 'button', className, children}: IBtnProps) {
    return (
        <button type={type} className={`btn ${className}`} >
            {children}
        </button>
    )
}

export default Button