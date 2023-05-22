import styles from './Links.css'

export default function Links() {
    return (
        <section className='section-link' id='links'>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="#">Portfólio (Em construção)</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://wa.me/+5524999777059">Whatsapp</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://instagram.com/caiomoreira0605?igshid=MzRlODBiNWFlZA==">Instagram</a>
                </div>
            </div>

            <div className='logo d-flex justify-content-center'>
                <img className="img-fluid" src="./assets/favicon.svg" alt="Foto do Caio" />
            </div>
        </section>
    )
}