import Header from "./header";
import { NavLink } from "react-router-dom";
function Cart() {
    return (<>
        <Header />
        <h3>GIỎ HÀNG</h3>
        <table class="table" >
            <div className="container">
                <thead>
                    <tr>
                        <th scope="col">Sản Phẩm</th>
                        <th scope="col">Đơn Giá</th>
                        <th scope="col">Số Lượng</th>
                        <th scope="col">Thành Công</th>
                        <th scope="col">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    <th><p>Rau Cải Xanh<img src="img/cart/cart-1.jpg" /></p></th>
                    <th><p>10.0000</p></th>
                    <th><p>2</p></th>
                    <th><p>20.000</p></th>
                    <th><button>Xóa</button>
                        <NavLink to={""}>Cập Nhật</NavLink></th>
                </tbody>
            </div>

        </table>
        <div className="row">
            <div className="col-6 left">
                <NavLink to={'/muahang'}>Tiếp Tục Mua Hàng</NavLink>
            </div>
            <div className="col-6 right">
                <NavLink to={'/pay'}>Thanh Toán</NavLink>
            </div>
        </div>

    </>);
}
export default Cart;