
import './LandingPage.css';
import ParticlesBackground from '../Particles/ParticlesBackground';

const LandingPage = ()=>{
    return(<>
            {/* <ParticlesBackground /> */}
        <section className='LandingPage'>
            
            <div className='text-contents'>
                <p className='asdf'>
                    Clean, Proffessional  <br/>and
                    fair <span className='blend'>services.</span>
                </p>

                <p className='qwert'>
                    We are certified company. We provide the  <br/>best
                    cleaning for you and your company.
                </p>

                <div className="central">
                    <button className="zxcv pointer">Our Service</button>
                </div>
            </div>


        </section>
    </>)
}

export default LandingPage;