import { NavLink } from "react-router-dom";
function Login() {
    return (
        <>
            <div class="login-container">
                <h2>Đăng nhập</h2>
                <form class="login-form" action="#" method="post">
                    <label for="username">Tên người dùng:</label>
                    <input type="text" id="username" name="username" required />

                    <label for="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" required />

                    <input type="submit" value="Đăng nhập" />
                </form>
                <div class="forgot-password">
                    <NavLink to={"/forgotpassword"}>Quên mật khẩu?</NavLink>
                </div>
                <div class="signup-link">
                    Chưa có tài khoản? <NavLink to={"/signup"}>Đăng ký</NavLink>
                </div>
            </div>
        </>
    );
}
export default Login;