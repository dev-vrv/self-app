import { Link } from "react-router-dom";

export default function Block3() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md col-lg-6">
                    <h2 className="display-1 fw-normal">Featured work</h2>
                </div>
                <div className="col-auto">
                    <div className="line-item px-4"></div>
                </div>
                <div className="col-4">
                    <Link to={"services"} className="btn btn-lg btn-dark">
                        all works
                    </Link>
                </div>
            </div>
        </div>
    );
}
