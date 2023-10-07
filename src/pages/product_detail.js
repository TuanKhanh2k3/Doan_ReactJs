import Banner from "../components/banner"
import Header from "../components/header"
import ProductDetail from "../components/product_detail";
import { json } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail(props) {

    const [product_type, setProduct_type] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/get_data_detail.php')
            .then(response => response.json())
            .then(json => setProduct_type(json))
    }, []);


    const lst_product_deltail = product_type.map(function (item) {
        return <ProductDetail data={item} />
    })
    return (
        <>
            <Header />
            {lst_product_deltail}
        </>
    )
}
export default Detail;