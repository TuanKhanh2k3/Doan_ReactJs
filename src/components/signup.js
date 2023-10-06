function SignUp() {
    return (
        <>
            <div class="signup-container">
                <h2>Đăng ký</h2>
                <form class="signup-form" action="#" method="post">
                    <label for="username">Tên người dùng:</label>
                    <input type="text" id="username" name="username" required />

                    <label for="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" required />

                    <label for="confirm_password">Xác nhận mật khẩu:</label>
                    <input type="password" id="confirm_password" name="confirm_password" required />

                    <input type="submit" value="Đăng ký" />
                </form>
            </div>
        </>
    );
}
export default SignUp;