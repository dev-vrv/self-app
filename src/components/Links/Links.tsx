import { Link } from "react-router-dom";
import "./Links.scss";

interface ILink {
    to: string;
    children?: React.ReactNode;
    className?: string;
}

function RoutingLink(props: ILink) {
    return (
        <Link to={props.to} className={props.className}>
            {props.children}
        </Link>
    )
}

function BaseLink(props: ILink) {
    return (
        <a href={props.to}>
            {props.children}
        </a>
    )
}

export { BaseLink, RoutingLink };