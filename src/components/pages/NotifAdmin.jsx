import { IoIosWarning } from "react-icons/io";
import { RxPaperPlane } from "react-icons/rx";
const NotifAdmin = () => {
    return (
        <>
            <div className="notif-admin-container">
                <div className="notif-emergency-admin">
                    <div className="circle-warn"><IoIosWarning className="icon6"/></div>
                    <div className="notif-emerg-txt">
                        <h1>Emergency Alert!</h1>
                        <p>Los Baños, Laguna</p>
                    </div>
                    <div className="notif-emerg-btn">
                        <button>Get Direction</button>
                        <RxPaperPlane className="icon7" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotifAdmin
