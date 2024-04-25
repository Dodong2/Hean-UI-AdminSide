// import HistoryData from './admin-side/HistoryData'
import { FaLocationDot } from "react-icons/fa6";
import JPHost from '../images/JP Hostpital.svg'
import { FaArrowLeft } from "react-icons/fa";
import { CarouselDApiDemo } from "../demo/CarouselDApiDemo";
import { Link } from "react-router-dom";


const History = () => {
  return (
    <>
      <div className='history-container'>
        {/* Reusable Code */}
        <nav>
          <div className="host-name-left">
            <h1>CMC HOSTPITAL</h1>
            <div className="host-loc">
              <FaLocationDot className="icon" />
              <p> LOS BAÑOS, LAGUNA</p>
            </div>
          </div>
          <div className="host-logo-right">
            <div className="right-layer1">
              <img src={JPHost} />
            </div>
            <div className='right-layer2'>
              <h3>CMC HOSTPITAL</h3>
              <p>Edit Profile</p>
            </div>
          </div>
        </nav>
        {/* Table  */}
        <div className='history-cont-layer1'>
          <Link to='/Home'>
            <div className="history-icon1"><FaArrowLeft /></div>
          </Link>
          <div className="history-title"><h1>Emergency history</h1></div>
          <div></div>
        </div>
        <div className="history-table">
          <CarouselDApiDemo />
        </div>

      </div>
    </>
  )
}

export default History
