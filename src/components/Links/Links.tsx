import { Link } from "react-router-dom";
import "./Links.scss";

interface LinkProps {
    to: string;
    children?: React.ReactNode;
    className?: string;
}

function RoutingLink(props: LinkProps) {
    return (
        <Link to={props.to} className={props.className}>
            {props.children}
        </Link>
    )
}

function BaseLink(props: LinkProps) {
    return (
        <a href={props.to}>
            {props.children}
        </a>
    )
}

export { BaseLink, RoutingLink };