import React from 'react'
import Cards from './Cards'

const Card = ({
    title = "Title",
    description = "Description",
    image = "url",
    button_text = "Click"
}) => {
    return (
        <div className="col-4">
            <div className="card" style={{"width " : "18rem"}}>
                <img
                    src={image}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-success">{button_text}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;