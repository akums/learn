

import './RevStyle.css';

const RevStyle = ({ feedback, profile, name, pos, ind })=>{
    return(

        <div className='RevStyle' key={ind}>

            <p className='feed_back'>
                {feedback}
            </p>

            <div className='img_and_content'>
                <img src={profile} alt='face' className='profile_pix'/>
                <div className='pro_wrapper'>
                    <h4 className='profile_name'>{name}</h4>
                    <p className='profile_title'>{pos}</p>
                </div>
            </div>

        </div>

    )
}

export default RevStyle;