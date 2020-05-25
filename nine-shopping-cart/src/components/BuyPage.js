import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import { random, commerce} from "faker"
import {Container, Col, Row} from 'reactstrap'
import CardItem from './CardItem'

const BuyPage = ({addIncart}) => {

    const apiKey = "INSERT_YOUR_API_KEY_HERE"
    const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
    const local_url = "https://api.jsonbin.io/b/5ec913debbaf1f2589458bef"
    const [product, setProduct] = useState([])

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header: {
    //             Authorization: apiKey
    //         }
    //     }); 
    // }

    const fetchPhotos = async () => {
        const {data} = await Axios.get(local_url); 

        const {photos} = data;

        const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))

        setProduct(allProducts);

    }

    useEffect(() => {
        fetchPhotos()
    }, [])
 
    return(
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map(prod => {
                    return(
                        <Col md={4} key={prod.id}>
                            <CardItem
                                product={prod}
                                addInCart={addIncart}    
                            ></CardItem>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )

}

export default BuyPage;