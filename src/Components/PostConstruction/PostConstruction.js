
import './PostConstruction.css';
import { NavLink } from 'react-router-dom';

const PostConstruction = ()=>{
    return (<>
        <div className='PostConstruction'>
            <div className='post_landi_image'></div>
            <h1 className="h_constrct">Post-Construction Clean Up</h1>

            <div className='flex_txt'>
                <p>
                    fCleaning services offers construction clean-up services <br />
                    reasonable prices. We have team of commercial cleaning <br />
                    professionals who can quickly and thoroughly  clean your newly <br/>
                    constructed homes right on the construction site. We also offer <br />
                    clean-up of homes that are undergoing extensive remodels. We <br/>
                    offer extensive dep cleaning that is designed to put the finishing <br/>
                    touches on your new or newly remodeled home.

                </p>

                <p>
                    Let the experts at fCleaning service help you with all of <br />
                    your construction clean-up cleaning needs. We know that getting<br />
                    your home cleaned should be done consistently and in a timely <br />
                    matter. Give fCleaning Service a chance to clean your home today.
                </p>
            </div>


            <div>
                <p style={{'color':'red', 'textAlign': 'center'}} className='buk'>
                    <b>
                        Book a Cleaner Today
                    </b>
                </p>

                <p style={{ 'textAlign': 'center' }}>
                    <a href="tel:09016021512" className="book_us_from_post_construction">
                        Call fCleaning Service today so we can take care of your construction clean-up needs.
                    </a>
                </p>
            </div>
        </div>
    </>)
}

export default PostConstruction;