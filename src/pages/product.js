import { json } from "react-router-dom";
import Header from "../components/header"
import Product_cpn from "../components/product";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
// Trang san pham

function Product(props) {
    const [product_type, setProduct_type] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/get_data.php')
            .then(response => response.json())
            .then(json => setProduct_type(json))
    }, []);


    const lst_product_type = product_type.map(function (item) {
        return <Product_cpn data={item} />
    })
    return (
        <>
            <Header />
            {lst_product_type}
            <Footer />
        </>
    )
}
export default Product;