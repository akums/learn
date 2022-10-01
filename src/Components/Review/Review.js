
import { useEffect, useState } from 'react';
import './Review.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import RevStyle from '../RevStyle/RevStyle';
import { connect } from 'react-redux';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'


const Review = ({info})=>{
    useEffect(()=>{
        document.title = 'Review || fCleaning Services'
    }, [])

    const [more, setMore] = useState(false);
    const moreHandler = ()=> setMore(more=> !more);

    return(<>
            <div className='review_landing_page'></div>

            <p className='fCleaning_pride'>fCleaning services prides itself on providing excellent customer service and <br/>
                professional home cleaning services. Here are some of our testimonials from some of our many<br/>
                happy customers _..._
            </p>


            <article style={{
                'display': 'flex',
                'justifyContent': 'center'
            }}>

                <div className='more_reviews'>

                    <div className='each_review'>
                        <p className='p_p_p'>"These guys are amazing! Super efficient and good prices. <br/>
                            And they actually call back. They have wonderful care services!<br/>
                            Thank you, I will never go anywhere else again"
                        </p>

                        <i className='orange ubuntu bold' style={{'fontSize': '13px'}}>-- Natalie, via Google</i>
                    </div>

                    <div className='each_review'>
                        <p >"
                            Very thorough cleaning, a job well done every single time!<br/>
                            Reliable, trustworthy, professional and great at what they do!
                            "
                        </p>

                        <i className='orange ubuntu bold' style={{'fontSize': '13px'}}>-- Deborah, via Facebook</i>
                    </div>

                    <div className='each_review'>
                        <p >"
                            Wow, what a fubulous crew!! Best home deep cleaning i have ever had <br/>
                            Moved furnitures and got in all the nooks and crannies. Granite counters,<br/>
                            wood floors and bathroom spotless.<br/>
                            Thank you so much!!
                            "
                        </p>

                        <i className='orange ubuntu bold' style={{'fontSize': '13px'}}>-- Mercy, via Facebook</i>
                    </div>

                    <div className='div_btn' onClick={moreHandler}>
                        More {!more ? <FaArrowDown /> : <FaArrowUp />}
                    </div>


                    {
                    more ? <div className='each_review'>
                    <div className='each_review'>
                        <p >"
                            Efficient, proffessional, courteous-EXCELLENT experience. Give<br/>
                            them a call you will not be disappointed!
                            "
                        </p>

                        <i className='orange ubuntu bold' style={{'fontSize': '13px'}}>-- Rita, via Facebook</i>
                    </div>


                    <div className='each_review'>
                        <p >"
                            fCleaning and teams are amazing. They went above and beyond. They gave <br/>
                            recommendation on work that was needed, fixed the damage to my carpet that <br/>
                            my chilfren have done. I recommend fCleaning and his team to everyone...
                            "
                        </p>

                        <i className='orange ubuntu bold' style={{'fontSize': '13px'}}>-- Joshua, via Instagram</i>
                    </div>
                    </div>: null}

                </div> 

            </article>


        <div className='Review'>

            
            <Carousel>
                    {
                        info.map((val,ind)=>{
                            return <RevStyle 
                                    feedback={val.feedback} 
                                    profile={val.profile} 
                                    name={val.name} 
                                    pos={val.position} 
                                    key={val.id} 
                                    ind={val.id} 
                                    />
                        })
                    }
            </Carousel>

        </div>
    </>)
}

const mapStateToProps = state=>{
    return {
        info: state.info
    }
}

export default connect(mapStateToProps, null)(Review);