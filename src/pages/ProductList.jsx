import { React, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import { Link } from 'react-router-dom';
function ProductList() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')


    // const fetchData = async () => {
    //     var data = await fetch('https://fakestoreapi.com/products');
    //     data = await data.json();
    //     setProducts(data)
    // }

    const fetchData = async () => {
        try {
            var data = await axios.get('https://fakestoreapi.com/products');
            data = data.data
            setProducts(data)
        } catch (error) {
            console.error(error)
        }
    }
    // console.log(products)
    const searchItem = async () => {
        const data = products.filter(i => (i.title + i.category).toLowerCase().trim().includes(search.toLocaleLowerCase().trim()))
        console.log(data)
        setProducts(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6}>
                        <div className=' d-flex justify-content-center align-items-center mt-5 w-100'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8BANBjuieLmFYqsgBAp5I92RCHwBJ8CdLg&usqp=CAU" alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='d-flex justify-content-center align-items-center  mt-5'>
                            <h1>Welcome</h1>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <input type="text" className='form-check w-50 rounded-3 input-group-text' onChange={(e) => setSearch(e.target.value)} />
                            <button className='btn btn-primary ms-3' onClick={() => searchItem()} >Search</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {products.length > 0 ?
                <div>
                    <div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 rounded-3 mt-5 p-3">
                            {products.map(i => (
                                <Link to={`/single-product/${i.id}`} relative='path' style={{ textDecoration: 'none' }} key={i.id}>
                                    <div className="col " >
                                        <div className="card " >
                                            <img
                                                src={i.image}
                                                style={{ 'height': 350 }}
                                                className="card-img-top"
                                                alt="product_image"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{i.title.length > 24 ? i.title.slice(0, 24) + '....' : i.title}</h5>
                                                <p className="card-text">
                                                    {i.category}
                                                </p>
                                                <p className="card-text">
                                                    $  {i.price}
                                                </p>
                                                <p className="card-text " >
                                                    <span className={i.rating.rate > 4 ? 'text-success' : i.rating.rate > 3 ? 'text-warning' : 'text-danger'}>
                                                        <i className="fa-solid fa-star" />  {i.rating.rate}
                                                    </span>
                                                </p>
                                                <button className="btn btn-primary">view</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                            }
                        </div>
                    </div>
                </div>
                :
                <div className='text-center fs-1 my-5'>
                    <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl" style={{ color: "#ffffff", }} />
                </div>
            }
        </>
    )
}

export default ProductList