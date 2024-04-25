import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { ImAidKit } from "react-icons/im";
import { BiSolidDoorOpen } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import JPHost from '../images/JP Hostpital.svg'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className='home-adminSide-container'>
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
        <div className='emergency-container'>
          {/* Emergency Left side*/}
          <div className='emergency'>
            <div className='emergency-history-layer1'>
              <h1>EMERGENCY ALERT</h1>
              <Link to='/History' style={{ textDecoration: 'none'}}>
              <div className='history-layer'>
                <MdHistory className='icon1' />
                <p>History</p>
              </div></Link>
            </div>
            <div className='emergency-btns'>
              <Link to='' style={{ textDecoration: 'none' }}>
                <div className="btns">
                  <div className="btns-layer1">
                    <div className="layer1-element1">
                      <IoIosWarning />
                    </div>
                    <div className="layer1-element2">
                      <h3>Emergency Alert</h3>
                      <div className="txt-loc">
                      <FaLocationDot className="icon2" />
                      <p> LOS BAÑOS, LAGUNA</p>
                      </div>
                    </div>
                  </div>
                  <div className="btns-layer2"><FaAngleRight /></div>
                </div>
              </Link>
            </div><br />
            <div className='emergency-btns'>
              <Link to='' style={{ textDecoration: 'none' }}>
                <div className="btns">
                  <div className="btns-layer1">
                    <div className="layer1-element1">
                      <IoIosWarning />
                    </div>
                    <div className="layer1-element2">
                      <h3>Emergency Alert</h3>
                      <div className="txt-loc">
                      <FaLocationDot className="icon2" />
                      <p> LOS BAÑOS, LAGUNA</p>
                      </div>
                    </div>
                  </div>
                  <div className="btns-layer2"><FaAngleRight /></div>
                </div>
              </Link>
            </div><br />
            <div className='emergency-btns'>
              <Link to='' style={{ textDecoration: 'none' }}>
                <div className="btns">
                  <div className="btns-layer1">
                    <div className="layer1-element1">
                      <IoIosWarning />
                    </div>
                    <div className="layer1-element2">
                      <h3>Emergency Alert</h3>
                      <div className="txt-loc">
                      <FaLocationDot className="icon2" />
                      <p> LOS BAÑOS, LAGUNA</p>
                      </div>
                    </div>
                  </div>
                  <div className="btns-layer2"><FaAngleRight /></div>
                </div>
              </Link>
            </div><br />
            <div className='emergency-btns'>
              <Link to='' style={{ textDecoration: 'none' }}>
                <div className="btns">
                  <div className="btns-layer1">
                    <div className="layer1-element1">
                      <IoIosWarning />
                    </div>
                    <div className="layer1-element2">
                      <h3>Emergency Alert</h3>
                      <div className="txt-loc">
                      <FaLocationDot className="icon2" />
                      <p> LOS BAÑOS, LAGUNA</p>
                      </div>
                    </div>
                  </div>
                  <div className="btns-layer2"><FaAngleRight /></div>
                </div>
              </Link>
            </div><br />
            
          </div>
          {/* Services offer right side*/}
          <div className='services-offer'>
            <div className='services-layer1'>
              <div className='services-left'>
                <h1>Services Offered</h1>
              </div>
              <div className='services-right'>
                <div className="icon-bg">
                  <IoIosAdd className="icon3" />
                </div>
                <p>Add more</p>
              </div>
            </div>
            <div className='services-layer2'>
              <Link to=''><div className="services-btn"><ImAidKit className="serv-icon1" /></div></Link>
              <Link to=''><div className="services-btn"><BiSolidDoorOpen className="serv-icon2" /></div></Link>
              <Link to=''><div className="services-btn"><FaUserDoctor className="serv-icon3" /></div></Link>
              <Link to=''><div className="services-btn"><IoBedSharp className="serv-icon4" /></div></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
