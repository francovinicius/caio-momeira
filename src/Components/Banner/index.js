import styles from './Banner.css'

export default function Banner() {
    return (
        <section>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='d-flex align-items-center justify-content-center navegacao'>
                    <a className="nav-link" href="/">Sobre</a>
                    <a className="nav-link" href="/links">Links</a>
                    <a className="nav-link" href="/contato">Contato</a>
                </div>

                <img className="img-fluid" src="./assets/img/caio-moreira.jpg" alt="Foto do Caio" />
                <h3>Caio Moreira</h3>


            </div>

        </section>
    )
}