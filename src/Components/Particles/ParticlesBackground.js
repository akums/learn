
import Particles from 'react-tsparticles'
import particlesConfig from "./config/ParticleConfig"

const ParticlesBackground = ()=>{
    return(<div>
        <Particles params={particlesConfig}></Particles>
    </div>)
}

export default ParticlesBackground;