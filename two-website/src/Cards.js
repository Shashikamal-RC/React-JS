import React from 'react';
import Card from './Card';

const Cards = () => {

    const cards = [
        {
            "title" : 'Card title',
            "description" : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            "button_text" : 'Go somewhere',
            "image" : "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            "title" : 'Card title',
            "description" : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            "button_text" : 'Go somewhere',
            "image" : "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            "title" : 'Card title',
            "description" : 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            "button_text" : 'Go somewhere',
            "image" : "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    ]

    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                    We love new friends!
                </h2>
                <div className="row">
                    { cards.map(data => {
                        return <Card 
                            title={data.title}
                            description={data.description}
                            image={data.image}
                            button_text={data.button_text} 
                        />
                    }) }
                </div>
            </div>
        </section>
    )
}

export default Cards;