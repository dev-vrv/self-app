import { FcApproval } from "react-icons/fc";
import Button from "../../../components/Buttons/Buttons";
import { NavLink } from "react-router-dom";

export default function Block1() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <div className="text-center">
                <p className="fs-5">who we are</p>
                <h2 className="h2">
                    An award-winning dev & design team that <br/> 
                    is proud of our work
                    <i className="ms-2">
                    <FcApproval />
                    </i>
                </h2>
            </div>

            <div className="row d-flex justify-content-evenly mt-5 py-4">
                <div className="col-10 col-lg-5 p-3 border-top">
                    <p className="fs-5">
                        Over 12 years of combined experience, and know thing or two about designing websites and mobile apps.
                    </p>
                </div>
                <div className="col-10 col-lg-5 p-3">
                    <p className="fs-5">
                    Our team are passionate professionals who are deeply committed to their work. We take pride in our work and strive to ensure that your project not only meets, but exceeds your expectations. When you choose us, you get a team that genuinely loves their work and is fully committed to your success.
                    </p>

                    <Button className="btn-dark mt-4">
                        <NavLink to={'about'} className="text-white">
                            About us
                        </NavLink>
                    </Button>
                </div>
            </div>
        </div>
    );
}
