import './Link.scss'

interface LinkProps {
    href: string;
    text: string;
    baseClassNames?: string;
    extraClassNames?: string;
}

function Link(props: LinkProps) {
    return (
        <a className="link" href={props.href}>
            {props.text}
        </a>
    )
}

export default Link