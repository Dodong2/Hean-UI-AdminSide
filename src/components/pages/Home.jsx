import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import JPHost from '../images/JP Hostpital.svg'
import Load from './Loading'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import DialogDemo from '../demo/DialogDemo';

const Home = () => {
  return (
    <>
    <Load/>
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
              <Link to='/EditProfile'>
              <p>Edit Profile</p>
              </Link>
            </div>
          </div>
        </nav>
        {/* Render the DialogDemo */}
        <Dialog>
        <DialogTrigger asChild={<Button variant="outline" className='btn-modal'>Edit Profile</Button>}>
        </DialogTrigger>
        <DialogDemo />
  </Dialog>
        <div className='emergency-container'>
          {/* Emergency Left side*/}
          <div className='emergency'>
            <div className='emergency-history-layer1'>
              <h1>EMERGENCY ALERT</h1>
              <Link to='/History' style={{ textDecoration: 'none' }}>
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
          <div className='emergency'>
            <div className='emergency-history-layer1-blue'>
              <h1>SERVICES OFFERED</h1>
              <Link to='/ServicesView' style={{ textDecoration: 'none' }}>
                <div className='history-layer'>
                  <MdHistory className='icon1' />
                  <p>View All</p>
                </div></Link>
            </div>
            <div className='emergency-btns-blue'>
              <Link to='' style={{ textDecoration: 'none' }}>
                <div className="btns">
                  <div className="btns-layer1">
                    <div className="layer1-element1">
                      <IoIosWarning />
                    </div>
                    <div className="layer1-element2">
                      <h3>Services Offered</h3>
                      <div className="txt-loc">
                        <FaLocationDot className="icon2" />
                        <p> LOS BAÑOS, LAGUNA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div><br />
            <div className='emergency-btns-blue'>
              <Link to='' style={{ textDecoration: 'none' }}>
                <div className="btns">
                  <div className="btns-layer1">
                    <div className="layer1-element1">
                      <IoIosWarning />
                    </div>
                    <div className="layer1-element2">
                      <h3>Services Offered</h3>
                      <div className="txt-loc">
                        <FaLocationDot className="icon2" />
                        <p> LOS BAÑOS, LAGUNA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div><br />
            <div className='emergency-btns-blue'>
              <Link to='' style={{ textDecoration: 'none' }}>
                <div className="btns">
                  <div className="btns-layer1">
                    <div className="layer1-element1">
                      <IoIosWarning />
                    </div>
                    <div className="layer1-element2">
                      <h3>Services Offered</h3>
                      <div className="txt-loc">
                        <FaLocationDot className="icon2" />
                        <p> LOS BAÑOS, LAGUNA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div><br />
            <div className='emergency-btns-blue'>
              <Link to='' style={{ textDecoration: 'none' }}>
                <div className="btns">
                  <div className="btns-layer1">
                    <div className="layer1-element1">
                      <IoIosWarning />
                    </div>
                    <div className="layer1-element2">
                      <h3>Services Offered</h3>
                      <div className="txt-loc">
                        <FaLocationDot className="icon2" />
                        <p> LOS BAÑOS, LAGUNA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div><br />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
