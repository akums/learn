
import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = ()=>{

    const [news, setNews] = useState('');
    const newsHandler = ___=>{
        setNews(___.target.value);
    }
    const subHandler =e=> {
        e.preventDefault();
        setTimeout(()=>{
            setNews('')
        }, 1000)
    }

    return(<>
        <div className='Subscribe'>


            <div className="sub_wrapper">

                <h1 className="sub_news">Follow Our Newsletter</h1>

                <p className="sub_info">
                    Keep an eye on our activities, there will be some promos that <br />
                    we always offer you when you subscribe to us. For that let's join us <br />
                    for a better offer.
                </p>

                <div>
                    <form onSubmit={subHandler} className="sub_form">
                        <input type='email' placeholder='Email address' className='home_input' value={news} onChange={newsHandler} required={true} />&nbsp;&nbsp;&nbsp;

                        <input type='submit' value='Subscribe' className="sub_btn"/>
                    </form>
                </div>

            </div>


        </div>
    </>)
}

export default Subscribe;