import Button from "./Button";

export default function Card(props) {
    const { title, body } = props;
    return (
        <div className='container'>
        <div className='card p-5 mb-3'>
            <div className='card-title text-center fw-bold fs-1'>
                Hello {title}
            </div>
            <div className='card-body text-center bg-secondary text-white rounded-3'>
                Ini bagian dari body {body}
            </div>
            <div className='footer text-center'>
                <Button color='success' text='Lihat Selengkapnya...' />
            </div>
        </div>
    </div>
    );
}
