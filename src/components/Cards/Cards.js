import React from 'react'
import Card from 'react-bootstrap/Card';
import Home from '../Home/Home';
function Cards() {
    const cards = [
        {
            image: 'https://m.media-amazon.com/images/I/91xdNu6S9DL._SX679_.jpg',
            title: 'Realmi nazro',
        },
        {
            image: 'https://m.media-amazon.com/images/I/71DSxfKzkJL._SX679_.jpg',
            title: 'Realmi N53',
        },
        {
            image: 'https://m.media-amazon.com/images/I/41GsqdiCvOL._SX300_SY300_QL70_FMwebp_.jpg',
            title: 'Redmi 12 5G',
        },
        {
            image: 'https://m.media-amazon.com/images/I/41yx-OTfNwL._SX300_SY300_QL70_FMwebp_.jpg',
            title: 'Oppo A78 5G',

        },
        {
            image: 'https://m.media-amazon.com/images/I/5134aj-bXnL._SX300_SY300_QL70_FMwebp_.jpg',
            title: 'Samsung Galaxi M34',
        },
        {
            image: 'https://m.media-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg',
            title: 'Apple Iphone 13',
        },
        {
            image: 'https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg',
            title: 'Iphone 14 pro max',
        },
        {
            image: 'https://m.media-amazon.com/images/I/41kyuER2HjL._SX300_SY300_QL70_FMwebp_.jpg',
            title: 'Samsung s23',
        },
    ];
    return (
        <div>
            <Home />
            <div className='bg-red-300 w-full p-5 mt-5 flex items-center justify-center gap-5 flex-wrap sm:flex'>
                {
                    cards.map((item) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title className='text-white text-2xl font-bold font-mono'>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }

            </div>

        </div>


    )
}

export default Cards
