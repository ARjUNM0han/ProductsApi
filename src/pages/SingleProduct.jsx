import { React, useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function SingleProduct() {


    const params = useParams();
    const [product, setProduct] = useState([])


    const fetchSingleProduct = async () => {
        try {
            var data = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
            data = data.data
            setProduct(data)
        } catch (error) {
            console.error(error, 'error')
        }
    }


    useEffect(() => {
        fetchSingleProduct()
    }, [])
    // console.log(product)
    return (
        <>
            {product.id ?
                <section className="">
                    <div className="container py-4">
                        <h1 className="h1 text-center" id="pageHeaderTitle">
                            {product?.title}
                        </h1>

                        <article className="postcard dark green">
                            <div className="postcard__img_link" href="#">
                                <img
                                    className="postcard__img"
                                    src={product?.image}
                                    alt="Image Title"
                                />
                            </div>
                            <div className="postcard__text">
                                <h1 className="postcard__title green">
                                    <a href="#">{product?.title}</a>
                                </h1>
                                <div className="postcard__title ">
                                    $ {product?.price}
                                </div>
                                <div className="postcard__bar" />
                                <div className="postcard__preview-txt">
                                    {product?.description}
                                </div>
                                <div className="postcard__preview-txt">
                                    {product?.rating?.rate} / 5
                                </div>

                            </div>
                        </article>

                    </div>
                </section>
                :
                <div className=' d-flex justify-content-center text-center fs-1 my-5 loader'>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                </div>
            }
        </>

    )
}

export default SingleProduct