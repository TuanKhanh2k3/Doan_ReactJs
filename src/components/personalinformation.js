import { NavLink } from "react-router-dom";

function PersonalInformation() {

    return (
        <>
            <div class="container_info">
                <div class="personal-info">
                    <h2>Thông tin cá nhân</h2>
                    <div class="bordered">
                        <p><strong>Họ và tên:</strong> Nguyễn Tuấn Khanh</p>
                        <p><strong>Ngày sinh:</strong> 07/11/2003</p>
                        <p><strong>Địa chỉ:</strong> 588 Đường HUỲNH TẤN PHÁT, Quận 7, TP HCM</p>
                        <p><strong>Email:</strong> khanh@email.com</p>
                        <p><strong>Điện thoại:</strong> (09) 11297370</p>
                    </div>
                </div>
                <NavLink to={"/"}>Trở Lại</NavLink>
            </div>
           
        </>
    );
}
export default PersonalInformation;