import Button from "./Button"
import logo from '../images/hero.svg'


export default function Hero(props) {
    const color = 'warning'
    const text = 'Ayo berbelanja disni'
    const onClick = () => {
        const result = confirm('Anda ini berbelanja ?')
        result ? alert('Selamat anda mendapatkan diskon') : alert('anda tidak mendapatkan diskon')
    }
    
    return (
        <div className="container min-vh-100" id="hero">
            <div className="row justify-content-center align-items-center">
                <div className="col-6">
                    <h1>Selamat Datang Di Toko Kami</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptate.</p>
                    <Button {...{
                        color,
                        text,
                        onClick
                    }}/ >
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img src={logo} width="50%" alt="gambar hero"/>
                </div>
            </div>
        </div>
    )
}