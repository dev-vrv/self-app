import "./Buttons.scss";

interface BtnProps {
    type: "button" | "submit" | "reset";
    text: string;
    baseClassNames?: string;
    extraClassNames?: string;
}

function Btn(props: BtnProps) {
    return (
        <button type={props.type} className={`btn ${props.baseClassNames} ${props.extraClassNames}`} >
            {props.text}
        </button>
    )
}

function BtnPrimary(props: BtnProps) {
    return <Btn {...props} baseClassNames="btn-primary" />;
}

function BtnSecondary(props: BtnProps) {
    return <Btn {...props} baseClassNames="btn-secondary" />;
}

function BtnOutlinePrimary(props: BtnProps) {
    return <Btn {...props} baseClassNames="btn-outline-primary" />;
}

function BtnOutlineSecondary(props: BtnProps) {
    return <Btn {...props} baseClassNames="btn-outline-secondary" />;
}

export { BtnPrimary, BtnSecondary, BtnOutlinePrimary, BtnOutlineSecondary };