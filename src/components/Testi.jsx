import Card from "./Card";

export default function Testi() {
    return (
        <div className='container'>
            <div className='title'>
                <h1 className='fw-bold text-center mb-5'>
                    Our Testimonials is Here
                </h1>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <Card
                        {...{
                            title: "color black",
                            body: "lorem color",
                        }}
                    />
                </div>
                <div className='col-4'>
                    <Card title='Belanja Disini Keren' body='lorem color' />
                </div>
                <div className='col-4'>
                    <Card title='Belanja Disini Mantab' body='lorem color' />
                </div>
            </div>
        </div>
    );
}
