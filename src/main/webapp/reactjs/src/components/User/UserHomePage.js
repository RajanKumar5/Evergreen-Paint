import React, { Component } from 'react';
import UserNavigationBar from './UserNavigationBar';
import Footer from '../Footer';
import './home.css'
import { Card } from 'react-bootstrap';

import axios from 'axios';

class UserHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            products: [],
        };
    }

    // API Call (Get All Products)
    componentDidMount() {
        axios.get("http://localhost:8080/home")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    products: data
                });
            });
    }

    showProductDetails = (productId) => {
        this.props.history.push("/productDetail/" + productId);
    }

    render() {
        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <UserNavigationBar history={this.props.history} />
                <div className="headeru">
                    <div className="containeru">
                        <div className="rowu">
                            <div className="col-2u">
                                <h1>A COLORFUL HOUSE IS A HAPPY HOUSE</h1>
                                <p>
                                    </p>
                            </div>
                            <div className="col-2u">
                                <img src="https://media.istockphoto.com/photos/closeup-of-two-women-choosing-samples-of-wall-paint-interior-designer-picture-id1291484089?b=1&k=20&m=1291484089&s=170667a&w=0&h=gtWY29g4W1JdouTtyG-jnc5JRTUQ5OGTiwvzpFe9sN8=" alt="error" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="categories">
                    <div className="small-containeru">
                        <div className="rowu">
                            <div className="col-3u">
                                <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMHBhaW50fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="error" />
                            </div>
                            <div className="col-3u">
                                <img src="https://images.unsplash.com/photo-1597857306105-b23e08328d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhaW50JTIwYnVja2V0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="error" />
                            </div>
                            <div className="col-3u">
                                <img src="https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpbnQlMjBidWNrZXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="error" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="small-containeru">
                    <h2 className="titleu">Featured Products</h2>
                    <div className="wrapper"></div>
                    <span><i className="shopping-cart"></i></span>
                    <div className="clear"></div>
                    <div className="rowu" id="instrumentHomeBody">

                        {
                            this.state.products.length === 0 ?
                                <Card style={{ width: '18rem' }} className="mb-5">
                                    <Card.Img variant="top" src="https://unsplash.com/a/img/empty-states/photos.png" width="300px" height="300px" />
                                    <Card.Body>
                                        <Card.Title>Oops, No Product</Card.Title>
                                        <Card.Text>
                                            Try again after some time.
                                        </Card.Text>
                                    </Card.Body>
                                </Card> :
                                this.state.products.map((product) => (
                                    <Card style={{ width: '18rem' }} className="mb-5 productItem" key={product.productId} onClick={this.showProductDetails.bind(this, product.productId)}>
                                        <Card.Img variant="top" src={product.imageURL} width="250px" height="250px" />
                                        <Card.Body>
                                            <Card.Title className="text-center">{product.productName}</Card.Title>
                                            <Card.Text className="text-center">
                                                {product.description}
                                            </Card.Text>
                                            <Card.Text className="text-center">
                                                Price: ${Math.round(product.price * (1 + (new Date().getMonth() / 100)))}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))
                        }

                    </div>
                </div>


                <div className="offeru">
                    <div className="small-containeru">
                        <div className="rowu">
                            <div className="col-2u">
                                <img src="https://images.unsplash.com/photo-1581079948988-537795b40f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50JTIwYnVja2V0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="offer-img" alt="" />
                            </div>
                            <div className="col-2u">
                                <h1>PICK A COLOR THAT REFLECTS YOUR PERSONALITY</h1>
                                <p>Get All New Shades, Exculsively Availabe on Evergreen Paint</p>
                                {/* <small>The violin, sometimes known as a fiddle, is a wooden chordophone (string instrument) in the violin family. Most violins have a hollow wooden body.</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="testimonialu">
                    <div className="small-containeru">
                        <div className="rowu">
                            <div className="col-3u">
                                <i className="fa fa-quote-left"></i><br />
                                <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </center>
                                <img src="images/user-2.png" alt="" />
                                <h3>Name</h3>
                            </div>
                            <div className="col-3u">
                                <i className="fa fa-quote-left"></i><br />
                                <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </center>
                                <img src="images/user-3.png" alt="" />
                                <h3>Name</h3>
                            </div>
                            <div className="col-3u">
                                <i className="fa fa-quote-left"></i><br />
                                <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </center>
                                <img src="images/user-1.png" alt="" />
                                <h3>Name</h3>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* <div className="brands">
                    <div className="small-containeru">
                        <div className="rowu">
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div> */}
                <br /><br />

                <Footer />
            </div>
        );
    }
}

export default UserHomePage;