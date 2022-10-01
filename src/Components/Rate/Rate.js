
import './Rate.css';
import { AiOutlineFileDone } from 'react-icons/ai'
import { BiHappyHeartEyes } from 'react-icons/bi';
import { TiGroup } from 'react-icons/ti';
import { BsAwardFill } from 'react-icons/bs';
// import { GrGroup } from 'react-icons/gr';

const Rate = ()=>{
    return(<>
        <div className='Rate'>
            
            <div className='cont'>

                <div className='large_icon'>
                    <AiOutlineFileDone style={{'fontSize': '59px'}}/> 
                </div>


                <div className="col">
                    <h1 className='ubuntu'>1300 <sup>+</sup></h1>
                    <p>Projects Done</p>
                </div>

            </div>




            <div className='cont'>

                <div className='large_icon'>
                    <BiHappyHeartEyes style={{'fontSize': '59px'}}/> 
                </div>


                <div className="col">
                    <h1 className='ubuntu'>10505 <sup>+</sup></h1>
                    <p>Happy Clients</p>
                </div>

            </div>





            <div className='cont'>

                <div className='large_icon'>
                    <BsAwardFill style={{'fontSize': '59px'}}/> 
                </div>


                <div className="col">
                    <h1 className='ubuntu'>10505 <sup>+</sup></h1>
                    <p>Award Winner</p>
                </div>

            </div>









            <div className='cont'>

                <div className='large_icon'>
                    <TiGroup style={{'fontSize': '59px'}}/> 
                </div>


                <div className="col">
                    <h1 className='ubuntu'>10505 <sup>+</sup></h1>
                    <p>Team Member</p>
                </div>

            </div>

        </div>
    </>)
}

export default Rate;