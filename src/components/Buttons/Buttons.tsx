import "./Buttons.scss";

interface BtnProps {
    type?: "button" | "submit" | "reset";
    className?: string;
    children?: React.ReactNode;
}

function Button({type = 'button', className, children}: BtnProps) {
    return (
        <button type={type} className={`btn ${className}`} >
            {children}
        </button>
    )
}

export default Button