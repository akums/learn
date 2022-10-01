
import { NavLink } from 'react-router-dom';
import './ScheduleAppt.css';

const ScheduleAppt = ({ link_to })=>{
    return(<>
        <div className='ScheduleAppt' >
            <NavLink className='appt_link' to={link_to}>

                Schedule An Appointment
                
            </NavLink>
        </div>
    </>)
}

export default ScheduleAppt;