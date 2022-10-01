
import './GeneralLandPage.css';

const  GeneralLandPage = ({foto})=>{
    return(<>
        <div className='GeneralLandPage'>
            <div className='gen_img'>
                <img src={foto} alt='hero_img' className='hero_img'/>
            </div>
        </div>
    </>)
}

export default GeneralLandPage;