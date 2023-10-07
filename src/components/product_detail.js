
function ProductDetail(props) {
    return (
        <>
            <section class="product-details spad mt-2 p-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-5">
                            <div class="w-100">
                                <div class="product__details__pic">
                                    <div class="product__details__pic__item">
                                        <img src={props.data.url} />
                                    </div>
                                </div>
                            </div>
                            <div className="product_small">
                                <div class="col-lg-4 col-md-4">
                                    <div class="product__details__pic">
                                        <div class="product__details__pic__item">
                                            <img class="product__details__pic__item--large" src="img/product/details/product-details-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="product__details__pic">
                                        <div class="product__details__pic__item">
                                            <img class="product__details__pic__item--large" src="img/product/details/product-details-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="product__details__pic">
                                        <div class="product__details__pic__item">
                                            <img class="product__details__pic__item--large" src="img/product/details/product-details-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="product__details__text">
                                <p>{props.data.name} </p>
                                <p>{props.data.price}</p>
                                <div class="product__details__quantity">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <span class="dec qtybtn">-</span>
                                            <input type="text" value="1" />
                                            <span class="inc qtybtn">+</span>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="primary-btn mt-3">THÊM VÀO GIỎ HÀNG</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductDetail;