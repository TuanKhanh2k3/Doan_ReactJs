import { NavLink } from "react-router-dom";
function OrderManagement() {
    return (
        <>
            <div class="container_Or">
                <div class="order">
                    <h2>Đơn hàng #1</h2>
                    <p class="order-status pending">Chờ xác nhận (được huỷ)</p>
                    <p>Chi tiết đơn hàng...</p>
                </div>

                <div class="order">
                    <h2>Đơn hàng #2</h2>
                    <p class="order-status confirmed">Đã xác nhận</p>
                    <p>Chi tiết đơn hàng...</p>
                </div>

                <div class="order">
                    <h2>Đơn hàng #3</h2>
                    <p class="order-status in-progress">Đang giao</p>
                    <p>Chi tiết đơn hàng...</p>
                </div>

                <div class="order">
                    <h2>Đơn hàng #4</h2>
                    <p class="order-status delivered">Đã giao</p>
                    <p>Chi tiết đơn hàng...</p>
                </div>

                <div class="order">
                    <h2>Đơn hàng #5</h2>
                    <p class="order-status cancelled">Huỷ</p>
                    <p>Chi tiết đơn hàng...</p>
                </div>
                <NavLink to={"/"}>Trở Lại</NavLink>
            </div>
           
        </>
    );
}
export default OrderManagement;