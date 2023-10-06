import Footer from "./footer";
import Header from "./header";
import { NavLink } from "react-router-dom";
function Pay() {
    return (
        <>
            <Header />
            <h3>Thanh Toán</h3>
            <h6>Danh Sách Sản Phẩm</h6>
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
                        <th><p>Tên Sản Phẩm<img src="" /></p></th>
                        <th><p>10.0000</p></th>
                        <th><p>2</p></th>
                        <th><p>20.000</p></th>
                        <th><button>Xóa</button>
                            <NavLink to={""}>Cập Nhật</NavLink></th>
                    </tbody>
                </div>

            </table>
            <div className="row">
                <div className="col-6 infomation">
                    <h5>Thông Tin Người Nhận Hàng</h5>
                    <p>Họ Tên: <span>Nguyễn Tuấn Khanh</span></p>
                    <p>Điện Thoại: <span>0911297370</span></p>
                    <p>Địa Chỉ: <span>Tây Ninh</span></p>
                </div>
                <div className="col-6 pay" >
                    <h5>Hình Thức Thanh Toán</h5>
                    <div className="row">
                        <div className="col-12 cod">
                            <p><input type="checkbox" /> COD</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 cod">
                            <p><input type="checkbox" /> Chuyển Khoảng Ngân Hàng</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 cod">
                            <p><input type="checkbox" /> Thanh Toán Ngân Hàng</p>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-secondary">Thanh Toán</button>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Pay;