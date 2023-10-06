function ForgotPassword() {
    return (
        <>
            <div className="forgot-password">
                <div class="forgot-password-container">
                    <h2>Quên mật khẩu</h2>
                    <form class="forgot-password-form" action="#" method="post">
                        <label for="email">Địa chỉ email:</label>
                        <input type="email" id="email" name="email" required />
                        <input type="submit" value="Gửi yêu cầu đặt lại mật khẩu" />
                    </form>
                </div>
            </div>

        </>
    );
}
export default ForgotPassword;