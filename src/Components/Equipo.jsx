import fono from '../assets/equipo/fono.png'
import fono2 from '../assets/equipo/fono2.png'
import fono3 from '../assets/equipo/fono3.png'
import fono4 from '../assets/equipo/fono4.png'
import fono5 from '../assets/equipo/fono5.png'
import fono6 from '../assets/equipo/fono6.png'
import fono7 from '../assets/equipo/fono7.png'
import to from '../assets/equipo/to.png'
import kine from '../assets/equipo/kine.png'
import directora1 from '../assets/equipo/directora1.png'
import directora2 from '../assets/equipo/directora2.png'
import rehabLogo from '../assets/Recurso9.svg';
import 'animate.css'

export function Equipo() {
     
    return (
        <div className=' row justify-content-center row-gap-3 animate__animated animate__backInUp'>
            <br></br>
            <img width="128" height="64" src={rehabLogo} alt="logo" />
            <h2>Dirección</h2>
            <div className='row justify-content-center direccion row-gap-3'>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={directora1} className="img-fluid img-thumbnail" alt="equipoKine1"/>
                    <h5 className='text-light'>catalinaaldana@rehabilitasantiago.cl</h5>
                </div>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={directora2} className="img-fluid img-thumbnail" alt="equipoKine1"/>
                    <h5 className='text-light'>mariapazruisenor@rehabilitasantiago.cl</h5>
                </div>
            </div>
            <hr/>
            <h2>Equipo Fonoaudiología</h2>
            <div className='row justify-content-center equipoFono row-gap-3'>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={fono} className="img-fluid img-thumbnail" alt="equipoFono1"/>
                </div>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={fono2} className="img-fluid img-thumbnail" alt="equipoFono1"/>
                </div>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={fono3} className="img-fluid img-thumbnail" alt="equipoFono3"/>
                </div>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={fono4} className="img-fluid img-thumbnail" alt="equipoFono4"/>
                </div>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={fono5} className="img-fluid img-thumbnail" alt="equipoFono5"/>
                </div>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={fono6} className="img-fluid img-thumbnail" alt="equipoFono6"/>
                </div>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={fono7} className="img-fluid img-thumbnail" alt="equipoFono7"/>
                </div>
            </div>
            <hr/>
            <h2>Equipo Terapia Ocupacional</h2>
            <div className='row justify-content-center equipoTo row-gap-3'>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={to} className="img-fluid img-thumbnail" alt="equipoTo1"/>
                </div>
            </div>
            <hr/>
            <h2>Equipo Kinesiología</h2>
            <div className='row justify-content-center equipoKine row-gap-3'>
                <div className='container col-sm-6 col-md-4 col-lg-4'>
                    <img src={kine} className="img-fluid img-thumbnail" alt="equipoKine1"/>
                </div>
            </div>
        </div>
    );
}