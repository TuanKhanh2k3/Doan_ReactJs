import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__left">
                                    <ul>
                                        <li><i class="fa fa-envelope"></i>NguyenTuanKhanh</li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__right">
                                    <div class="header__top__right__social">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                        <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                    </div>

                                    <div class="header__top__right__auth">
                                        <NavLink to={'/login'}><i class="fa fa-user"></i> Đăng nhập | </NavLink>
                                    </div>
                                    <div class="header__top__right__auth">
                                        <NavLink to={'/signup'}> | <i class="fa fa-user"></i> Đăng ký </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="header__logo">
                                <a href="/"><img src="img/logo.png" alt="LOGO" /></a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <nav class="header__menu">
                                <ul>
                                    <li className="active"><NavLink to="/">Trang chủ</NavLink></li>
                                    <li><NavLink to="/list_all">Sản phẩm</NavLink></li>
                                    {/* <li><li><NavLink to="#">Loại sản phẩm</NavLink></li>
                                        <ul class="header__menu__dropdown">
                                            <li><a href="/product_type">Loại sản phẩm 1</a></li>
                                            <li><a href="#">Loại sản phẩm 2</a></li>
                                            <li><a href="#">Loại sản phẩm 3</a></li>
                                            <li><a href="#">Loại sản phẩm 4</a></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-3">
                            <div class="header__cart">
                                <ul>
                                    <li><NavLink to={'/ordermanagement'} className="order">Đơn Hàng</NavLink></li>
                                    <li><NavLink to={'/cart'}><i class="fa fa-shopping-bag"></i><span>3</span></NavLink></li>
                                    <li><NavLink to={'/personalinformation'}><i class="fa fa-user"></i></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="humberger__open">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header