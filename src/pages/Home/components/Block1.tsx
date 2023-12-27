import { FcApproval } from "react-icons/fc";
import Button from "../../../components/Buttons/Buttons";

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
                        Were divided, moved night light darkness winged may also make man for. Winged the for Earth creeping appear evening, gathered Forth so he. Life that dry of created greater can't also gathered female green.
                    </p>

                    <Button className="btn-dark btn-lg mt-4">
                        About us
                    </Button>
                </div>
            </div>
        </div>
    );
}
