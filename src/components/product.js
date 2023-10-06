import ProductOne from "./product_one";

function Product_cpn(props) {
    const lstProduct = props.data.lst_product;
    const lst_p = lstProduct.map(function (item) {
        return (
            <ProductOne data={item} />
        )
    })
    return (
        <>
            <section class="featured spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>{props.data.product_type}</h2>
                            </div>

                        </div>
                    </div>
                    <div class="row featured__filter" id="MixItUp0752E4"  >
                        {lst_p}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Product_cpn;