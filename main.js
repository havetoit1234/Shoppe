var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
// Mảng dữ liệu Product
var listProduct = [
    {
        id : 1,
        img : 'https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85',
        name : 'Iphone 13 Promax',
        priceOld : 13000000,
        priceNew : 12000000,
        percentSale : 70,
        rating: 4,
        main : 'USA',
        type : 'SmartPhone',
        sold : 1100
    },
    {
        id : 2,
        img : 'https://cf.shopee.vn/file/640d0210cb189339628e29995d85fde5',
        name : 'Xiaomi PocoX3 Pro',
        priceOld : 10000000,
        priceNew : 7000000,
        percentSale : 30,
        rating: 3,
        main : 'China',
        type : 'SmartPhone',
        sold : 700
    },
    {
        id : 3,
        img : 'https://cf.shopee.vn/file/feb15c2008a2775da9f4f6dad1b9b6c0',
        name : 'Điện Thoại Realme C11 2021 (2GB/32GB) - Hàng Chính Hãng',
        priceOld : 3000000,
        priceNew : 2990000,
        percentSale : 30,
        rating: 3,
        main : 'China',
        type : 'SmartPhone',
        sold : 2000
    },
    {
        id : 4,
        img : 'https://cf.shopee.vn/file/e0e8898d08434f4f9b685481e1583646',
        name : ' Điện thoại Samsung Galaxy Note 10+ 256GB',
        priceOld : 14000000,
        priceNew : 13490000,
        percentSale : 50,
        rating: 5,
        main : 'Korea',
        type : 'SmartPhone',
        sold : 1500
    },
    {
        id : 5,
        img : 'https://cf.shopee.vn/file/e524f3573714605d595a82219f505923',
        name : 'Điện thoại Samsung Galaxy A52s 5G (8GB/256GB)',
        priceOld : 11000000,
        priceNew : 7500000,
        percentSale : 45,
        rating: 4,
        main : 'Korea',
        type : 'SmartPhone',
        sold : 3000
    },
    {
        id : 6,
        img : 'https://cf.shopee.vn/file/ce7a7a74de4c2c324d9aec822125c498',
        name : 'Điện thoại OPPO A74 (8GB/128GB) - Hàng Chính Hãng',
        priceOld : 7000000,
        priceNew : 5000000,
        percentSale : 25,
        rating: 4,
        main : 'China',
        type : 'SmartPhone',
        sold : 100
    },
    {
        id : 7,
        img : 'https://cf.shopee.vn/file/ec91bcdfe28b28d5ed19c50b429060d0',
        name : 'Điện thoại OPPO Find X3 Pro 5G - Hàng Chính Hãng',
        priceOld : 26000000,
        priceNew : 22000000,
        percentSale : 10,
        rating: 5,
        main : 'China',
        type : 'SmartPhone',
        sold : 70
    },
    {
        id : 8,
        img : "https://cf.shopee.vn/file/60add66dce88e225743a31fa737ce9d7",
        name : 'Điện thoại Xiaomi 11T Pro 12+256GB | Chip SnapdragonTM 888| Pin 5000 mAh | BH 24T',
        priceOld : 1900000,
        priceNew : 1590000,
        percentSale : 15,
        rating: 4,
        main : 'China',
        type : 'SmartPhone',
        sold : 20
    },
    {
        id : 9,
        img : 'https://cf.shopee.vn/file/f30f9448ec08ba6f5c9eaec2eddb14c9',
        name : ' Máy tính bảng Samsung Galaxy Tab A7 Lite (SM-T225) - Hàng Chính Hãng',
        priceOld : 1000000,
        priceNew : 7490000,
        percentSale : 20,
        rating: 3,
        main : 'Korea',
        type : 'SmartPhone',
        sold : 150
    },
    {
        id : 10,
        img : 'https://cf.shopee.vn/file/b86c9d8b0d1f630d47b6c4de9df3cfe0',
        name : 'Điện Thoại Samsung Galaxy A72 (8GB/128GB) - Hàng Chính Hãng',
        priceOld : 9000000,
        priceNew : 7500000,
        percentSale : 39,
        rating: 4,
        main : 'Korea',
        type : 'SmartPhone',
        sold : 300
    },{
        id : 11,
        img : 'https://cf.shopee.vn/file/0aa63c491599bab06d571d7390db8d62',
        name : 'Điện Thoại Samsung Galaxy M62 8GB/256GB - Hàng Chính Hãng',
        priceOld : 13000000,
        priceNew : 10000000,
        percentSale : 20,
        rating: 4,
        main : 'Koera',
        type : 'SmartPhone',
        sold : 100
    },
    {
        id : 12,
        img : "https://cf.shopee.vn/file/3a1e507ae75fcce015269797801ffd8e",
        name : 'Apple iPhone 13 256GB',
        priceOld : 24000000,
        priceNew : 21000000,
        percentSale : 20,
        rating: 4,
        main : 'USA',
        type : 'SmartPhone',
        sold : 200
    },
    {
        id : 13,
        img : 'https://cf.shopee.vn/file/ba82e969e3d4c2d540a29cce74490a04',
        name : 'Apple iPhone 13 Pro 1T',
        priceOld : 4600000,
        priceNew : 4490000,
        percentSale : 15,
        rating: 4,
        main : 'USA',
        type : 'SmartPhone',
        sold : 2000
    },
    {
        id : 14,
        img : 'https://cf.shopee.vn/file/687ded7ad482df198d924f558cfd751e',
        name : ' Apple iPhone 13 Pro Max 1T',
        priceOld : 50000000,
        priceNew : 47490000,
        percentSale : 7,
        rating: 5,
        main : 'USA',
        type : 'SmartPhone',
        sold : 15
    },
    {
        id : 15,
        img : 'https://cf.shopee.vn/file/41694acce229f8102e750ab976683b90',
        name : 'Điện thoại Vivo Y20 (2021) 4GB + 64GB - Hàng chính hãng',
        priceOld : 9000000,
        priceNew : 7000000,
        percentSale : 35,
        rating: 4,
        main : 'China',
        type : 'SmartPhone',
        sold : 300
    }
];

var btn_Login = $('.auth-form__switch-btn');
var btn_Register = $$('.auth-form__switch-btn')[1];
var form_Register = $('.auth-form');
console.log(form_Register)
var form_Login = $$('.auth-form')[1];

// Switch Register and Login
btn_Login.onclick = function() {
    form_Register.classList.remove('active');
    form_Login.classList.add('active');
}
btn_Register.onclick = function() {
    form_Login.classList.remove('active');
    form_Register.classList.add('active');
}

// Ấn để hiên ra đăng kí và đăng nhập
function onRegister() {
    $('.modal').classList.add('active');
    form_Register.classList.add('active');
    form_Login.classList.remove('active')
    console.log(123)
}

function onLogin() {
    $('.modal').classList.add('active');
    form_Register.classList.remove('active');
    form_Login.classList.add('active');
}
// Click out form exit 
var modal = $('.modal');
modal.onclick = function() {
    modal.classList.remove('active');
}
// Ngăn chặn sự nổi bọt
$('.modal__body').addEventListener('click', function(event) {
    event.stopPropagation();
})
// handle button cancle
var button_cancles = $$('.btn.cancle');
button_cancles.forEach(btn => {
    btn.onclick = function() {
        $('.modal').classList.remove('active');
    }
})

// Form validation 
var input = $$('.auth-form__input');
for (var i = 0; i < input.length; i++) {
    confirm1(input[i]);
}

function confirm1(input) {
    input.onblur = function() {
        if (input.value.trim() == '') {
            input.classList.add('input-error');
            input.parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
        }
    }
    input.onmouseout = function() {
        if (input.value.trim() !== '') {
            input.classList.remove('input-error');
            input.parentElement.querySelector('.error-msg').innerHTML = '';
        }
    }
}

// Register
var accoutList = JSON.parse(localStorage.getItem('accoutList')) || [];

var accountActives = JSON.parse(localStorage.getItem('accountActives')) || [];

function taoId() {
    var id = Math.random().toString().substr(2, 10) 
    return id
}
// Create Object Account
function accountUser(id, email, password, username) {
    this.email = email;
    this.password = password;
    this.username = username;
    if (!id) {
        this.id = taoId();
    } else {
        this.id = id;
    }
}
// Object Account is active
function accoutActive(email, password) {
    this.email = email;
    this.password = password;
}
// Create Account
function createAccount() {
    var email = $('#email-register').value;
    var username = $('#username-register').value;
    var password = $('#password-register').value;
    var password_confirm = $('#password-confirm').value;
    var input_register = $$('.register');
    for (var i = 0; i < input_register.length; i++) {
        input_register[i].classList.remove('input-error')
        input_register[i].parentElement.querySelector('.error-msg').innerHTML = '';
    }
    // formRegister validate
    if (email.trim() == '') {
        $('#email-register').classList.add('input-error');
        $('#email-register').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    if (username.trim() == '') {
        $('#username-register').classList.add('input-error');
        $('#username-register').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    var checkEmail;
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        checkEmail = true;
    } else {
        checkEmail = false;
    }
    if (email.trim() != '' && !checkEmail) {
        $('#email-register').classList.add('input-error');
        $('#email-register').parentElement.querySelector('.error-msg').innerHTML = 'Trường này phải là email';
    }
    if (password.trim() == '') {
        $('#password-register').classList.add('input-error');
        $('#password-register').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }
    if (password_confirm.trim() == '') {
        $('#password-confirm').classList.add('input-error');
        $('#password-confirm').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }
    if (password.trim().length < 8 && password.trim().length > 0) {
        $('#password-register').classList.add('input-error')
        $('#password-register').parentElement.querySelector('.error-msg').innerHTML = 'Mật khẩu an toàn phải từ 8 ký tự trở lên';
    }
    if (password.trim().length >= 8) {
        if (password_confirm != '' && password_confirm != password) {
            $('#password-confirm').classList.add('input-error')
            $('#password-confirm').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng xác thực đúng mật khẩu';
        }
    }

// Check information Register
    var checkOld = true;
    for (var i = 0; i < accoutList.length; i++) {
        var currentAccount = accoutList[i];
        if (email == currentAccount.email) {
            check = false;
            $('#email-register').classList.add('input-error');
            $('#email-register').parentElement.querySelector('.error-msg').innerHTML = 'Email đã tồn tại, vui lòng nhập lại email khác';
        }
    }
    var checkUsername = true;
    for (var i = 0; i < accoutList.length; i++) {
        var currentAccount = accoutList[i];
        if (username == currentAccount.username) {
            checkUsername = false;
            $('#username-register').classList.add('input-error');
            $('#username-register').parentElement.querySelector('.error-msg').innerHTML = 'username đã tồn tại, vui lòng nhập lại username khác';
        }
    }
    if (checkEmail && checkUsername && username.trim() != '' && password.trim() != '' && password_confirm.trim().length >= 8 && password_confirm.trim() === password.trim() && checkOld == true) {
        var newAccount = new accountUser(null, email, password, username);
        accoutList.push(newAccount);
        localStorage.setItem('accoutList',JSON.stringify(accoutList) );
        modal.classList.remove('active');
        alert('Bạn đã đăng ký tài khoản thành công !');
    }
}

// Đăng nhập
function renderLoginRegister() {
    $('.user').innerHTML = `<li onclick="onRegister()" class="header__navbar-item header__navbar-item-strong header__navbar-item--separate">Đăng ký</li>
    <li onclick="onLogin()" class="header__navbar-item header__navbar-item-strong">Đăng nhập</li>`
    var arrayAccount = JSON.parse(localStorage.getItem('accountActives'));
    for (var i = 0; i < arrayAccount.length; i++) {
        arrayAccount.splice(i, 1);
    }
    localStorage.setItem('accountActives', JSON.stringify(arrayAccount));
}
// Login on FormLogin
function loginAccount() {
    var email = document.getElementById('email-login').value;
    var password = document.getElementById('password-login').value;
    var input_login = $$('.login');
    for (var i = 0; i < input_login.length; i++) {
        input_login[i].classList.remove('input-error')
        input_login[i].parentElement.querySelector('.error-msg').innerHTML = '';
    }
    if (email.trim() == '') {
        document.getElementById('email-login').classList.add('input-error');
        document.getElementById('email-login').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    if (password.trim() == '') {
        document.getElementById('password-login').classList.add('input-error');
        document.getElementById('password-login').parentElement.querySelector('.error-msg').innerHTML = 'Vui lòng nhập đúng giá trị của trường này';
    }

    var checkEmail = false;
    var checkPassword = false;
    for (var i = 0; i < accoutList.length; i++) {
        var currentAccount = accoutList[i];
        if (email == currentAccount.email) {
            checkEmail = true;
            if (password == currentAccount.password) {
                checkPassword = true;
            }
        }
    }
    if (checkEmail == false && email.trim().length > 0) {
        document.getElementById('email-login').classList.add('input-error');
        document.getElementById('email-login').parentElement.querySelector('.error-msg').innerHTML = 'Email không tồn tại, vui lòng nhập lại !';
    }
    if (checkEmail == true) {
        if (checkPassword == false && password.trim().length > 0) {
            document.getElementById('password-login').classList.add('input-error');
            document.getElementById('password-login').parentElement.querySelector('.error-msg').innerHTML = 'Sai mật khẩu, vui lòng nhập lại !';
        }
    }
    if (checkEmail == true && checkPassword == true) {
        document.getElementById('email-login').value = '';
        document.getElementById('password-login').value = '';
        for (var i = 0; i < accoutList.length; i++) {
            var currentAccount = accoutList[i];
            if (email == currentAccount.email) {
                var thisAccount = currentAccount;
            }
        }
        var accountIn = new accoutActive(email, password);
        accountActives.push(accountIn);
        localStorage.setItem('accountActives', JSON.stringify(accountActives));
        modal.classList.remove('active');
        setTimeout(() => {
            $('.user').innerHTML = ''
            $('.user').innerHTML = `<li class="header__navbar-item header__navbar-user">
                                                            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" class="header__navbar-user-img"> 
                                                            <span class="header__navbar-user-name">${thisAccount.username}</span>
                                                            <ul class="header__navbar-user-menu">
                                                                <li class="header__navbar-user-item">
                                                                    <a href="">Tài khoản của tôi</a>
                                                                </li>
                                                                <li class="header__navbar-user-item">
                                                                    <a href="">Địa chỉ của tôi</a>
                                                                </li>
                                                                <li class="header__navbar-user-item">
                                                                    <a href="">Đơn mua</a>
                                                                </li>
                                                                <li onclick="renderLoginRegister(),removeAllCart(),renderCartNoti()" class="header__navbar-user-item">
                                                                    <a href="">Đăng xuất</a>
                                                                </li>
                                                            </ul>
                                                        </li>`;
            alert('Bạn đã đăng nhập thành công !');
        }, 1000);
    }
}

// Render Account User Login
function checkAccountStatus() {
    var account = JSON.parse(localStorage.getItem('accountActives'));
    if (account == null) {
        account = [];
    }
    if (account.length == 0) {
        $('.user').innerHTML = `<li onclick = "onRegister()" class="header__navbar-item header__navbar-item-strong header__navbar-item--separate">Đăng ký</li>
    <li onclick = "onLogin()" class="header__navbar-item header__navbar-item-strong">Đăng nhập</li>`
    }
    if (account.length == 1) {
        for (var i = 0; i < accoutList.length; i++) {
            var currentAccount = accoutList[i];
            if (account[0].email == currentAccount.email) {
                var thisAccount = currentAccount;
            }
        }
        $('.user').innerHTML = ''
        $('.user').innerHTML = `<li class="header__navbar-item header__navbar-user">
                                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" class="header__navbar-user-img"> 
                                                        <span class="header__navbar-user-name">${thisAccount.username}</span>
                                                        <ul class="header__navbar-user-menu">
                                                            <li class="header__navbar-user-item">
                                                                <a href="">Tài khoản của tôi</a>
                                                            </li>
                                                            <li class="header__navbar-user-item">
                                                                <a href="">Địa chỉ của tôi</a>
                                                            </li>
                                                            <li class="header__navbar-user-item">
                                                                <a href="">Đơn mua</a>
                                                            </li>
                                                            <li onclick="renderLoginRegister(),removeAllCart(),renderCartNoti()" class="header__navbar-user-item">
                                                                <a>Đăng xuất</a>
                                                            </li>
                                                        </ul>
                                                    </li>`;
    }
}

checkAccountStatus();

// Render UI Content
function renderAppContainer() {
    $('.app__container').innerHTML =`
    <div class="animateLoading">
        <span class="loader"></span>
    </div>
    `
    setTimeout(()=>{
        $('.app__container').innerHTML = `
        <div class="grid">
            <div class="grid__row app__content">
                <div class="grid__column-2">
                    <nav class="category">
                        <h3 class="category__heading">
                            <i class="category__heading-icon fas fa-list"></i> Danh mục
                        </h3>

                        <ul class="category-list">
                            <li class="category-item ">
                                <a href="#" class="category-item__link">Điện thoại chính hãng</a>
                            </li>
                            <li class="category-item">
                                <a href="#" class="category-item__link">Phụ kiện chính hãng</a>
                            </li>
                            <li class="category-item">
                                <a href="#" class="category-item__link">Linh kiện chính hãng</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="grid__column-10">
                    <div class="home-filter">
                        <span class="home-filter__lable">Sắp xếp theo</span>
                        <button class="home-filter-btn btn">Phổ biến</button>
                        <button class="home-filter-btn btn btn--primary">Mới nhất</button>
                        <button class="home-filter-btn btn">Bán chạy</button>

                        <div class="select-input">
                            <span class="select-input__lable">
                                Giá
                            </span>
                            <i class="select-input__icon fas fa-angle-down"></i>
                            <ul class="select-input__list">
                                <li class="select-input__item">
                                    <a href="" class="select-input__link">Giá: Thấp đến cao</a>
                                </li>
                                <li class="select-input__item">
                                    <a href="" class="select-input__link">Giá: Cao đến thấp</a>
                                </li>
                            </ul>
                        </div>
                        <div class="home-filter__page">
                            <span class="home-filter__page-num">
                                <span class="home-filter__page-current">1</span> / 14
                            </span>
                            <div class="home-filter__page-control">
                                <a class="home-filter__page-btn home-filter__page-btn__disable">
                                    <i class="fas fa-angle-left home-filter__page-btn__no-enable"></i>
                                </a>
                                <a class="home-filter__page-btn ">
                                    <i class="fas fa-angle-right home-filter__page-btn__enable"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="home-product">
                        <div class="grid__row list-product">
                            // Render Product 
                        </div>
                    </div>

                    <ul class="pagination home-product-pagination">
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">
                                <i class="pagination-item__icon fas fa-angle-left"></i>
                            </a>
                        </li>

                        <li class="pagination-item pagination-item--active">
                            <a href="" class="pagination-item__link">1</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">2</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">3</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">4</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">5</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">...</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">14</a>
                        </li>

                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">
                                <i class="pagination-item__icon fas fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>`
    
    // Handle button active
    var btn1 = $$(".home-filter-btn.btn")
    console.log($('button.home-filter-btn.btn.btn--primary'))
    btn1.forEach(btn=>{
        btn.onclick = () =>{
            $('button.home-filter-btn.btn.btn--primary').classList.remove('btn--primary')
            btn.classList.add('btn--primary')
        }
    })
    var html = listProduct.map(product =>{
        return `
        <div class="grid__column-2-5">
            <a onclick="renderProductDetail('${product.id}')" class="home-product-item" href="#">
                <img src="${product.img}" alt="" class="home-product-item__img">
                <h4 class="home-product-item__name">${product.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${product.priceOld}₫</span>
                    <span class="home-product-item__price-current">${product.priceNew}₫</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="home-product-item__star-gold fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="home-product-item__sold">${product.sold} đã bán</div>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">${product.type}</span>
                    <span class="home-product-item__origin-title">${product.main}</span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">${product.percentSale}%</span>
                    <span class="home-product-item__sale-off-lable">GIẢM</span>
                </div>
            </a>
        </div>`
        
    })
    var htmls = html.join(' ');
    $('.list-product').innerHTML = htmls;
    },2000)
    // Handle Heart
    var hearts = $$('.home-product-item__like')
    hearts.forEach(heart => {
        heart.addEventListener('click',(e)=>{
            e.preventDefault()
            e.stopPropagation()
            heart.classList.toggle('active')
        })
    })
}
renderAppContainer();

// Render Product when Click is Product
function renderProductDetail(id) {
    let thisProduct
    listProduct.forEach(item =>{
        if(item.id == id){
            thisProduct = item
        }
    })
    $('.app__container').innerHTML = `
        <div class="grid">
            <div class="grid__row product-detail">
                <img src="${thisProduct.img}" alt="" class="product-detail-img">
                <div class="product-detail-infor">
                    <h1 class="product-detail-name">${thisProduct.name}</h1>
                    <div class="product-detail-price">
                        <div class="product-detail-price-price">
                            <p class="product-detail-priceOld">${thisProduct.priceOld} ₫</p>
                            <p class="product-detail-priceSale">${thisProduct.priceNew} ₫</p>
                            <p class="product-detail-percentSale">${thisProduct.percentSale}% GIẢM</p>
                        </div>
                        <div class="product-detail-price-slogan">
                            <img src="./asset/img/soganicon.png" alt="" class="product-detail-price-slogan-img">
                            <div class="product-detail-price-slogan-text-text">
                                <p class="product-detail-price-slogan-text">Mua gì cũng rẻ</p>
                                <p class="product-detail-price-slogan-ad">Giá tốt nhất so với các sản phẩm cùng loại trên Shopee!</p>
                            </div>
                        </div>
                    </div>
                    <button onclick="addCart(${thisProduct.id}),renderCartNoti()" class="product-detail-btn">
                        <i class="fas fa-cart-plus product-detail-btn-icon"></i>
                        Thêm Vào Giỏ Hàng
                    </button>
                </div>
            </div>
        </div>`
}

// Object CartItem
function cartItem(id, number) {
    this.id = id;
    this.number = number;
}

// Get cartItem of LocalStorage
function getCartListItem() {
    var cartListItem = JSON.parse(localStorage.getItem('cartListItem')) || [] ;
    return cartListItem;
}
// Save cartItem up LocalStorage
function saveCartListItemToStorage(cartListItem) {
    localStorage.setItem('cartListItem', JSON.stringify(cartListItem));
}

// Add cart
function addCart(id) {
    var account = JSON.parse(localStorage.getItem('accountActives')) || [];
    if (account.length == 0) {
        alert('Vui lòng đăng nhập để mua hàng !');
    }
    else{
        alert('Thêm thành công sản phẩm này !');
        var cartListItem = getCartListItem();
        var checkCart = false;
        cartListItem.forEach(carItem =>{
            if(carItem.id == id){
                carItem.number++
                checkCart = true
            }
        })
        if (checkCart === false) {
            var itemCart = new cartItem(id, 1);
            cartListItem.push(itemCart);
        }
        saveCartListItemToStorage(cartListItem);
        
    }
}

function addCartNumber(id) {
    var cartListItem = getCartListItem();
    cartListItem.forEach(carItem =>{
        if(carItem.id == id){
            carItem.number++
        }
    })
    saveCartListItemToStorage(cartListItem);
    renderCart()
}

function renderCart() {
    var cartListItem = getCartListItem();
    if (cartListItem.length === 0) {
        $('.app__container').innerHTML = `
    <div class="cart-empty">
        <img src="./asset/img/no_cart.png" alt="" class="cart-empty-img">
        <div class="cart-empty-text">Giỏ hàng của bạn còn trống</div>
        <button onclick="renderAppContainer();" class="cart-empty-btn">MUA NGAY</button>
    </div>`
    } else{
        var thisProducts = [];
        var thisCartItems = [];
        cartListItem.forEach(cartItem =>{
            listProduct.forEach(product =>{
                if(cartItem.id == product.id){
                    thisProducts.push(product)
                    thisCartItems.push(cartItem)
                }
            })
        })
        var htmlCart = `<div class="cart">`
        for (var i = 0; i < thisProducts.length; i++) {
            htmlCart += `
            <div class="cart-item">
                <img class="cart-item-img" src="${thisProducts[i].img}" alt="">
                <p class="cart-item-name">${thisProducts[i].name}</p>
                <div class="cart-item-price">
                    <p class="cart-item-price-old">${thisProducts[i].priceOld} ₫</p>
                    <p class="cart-item-price-sale">${thisProducts[i].priceNew} ₫</p>
                </div>
                <span class="cart-item-number">
                    <button onclick="removeCartNumber('${thisProducts[i].id}'),renderCartNoti()" class="cart-item-number-btn"> - </button>
                    <p class="cart-item-number-text">
                        ${thisCartItems[i].number}
                    </p>
                    <button onclick="addCartNumber('${thisProducts[i].id}'),renderCartNoti()" class="cart-item-number-btn"> + </button>
                </span>
                <p class="cart-item-sum-money">${thisProducts[i].priceNew*thisCartItems[i].number} ₫</p>
                <div class="cart-item-delete">
                    <i onclick="removeCartItem('${thisProducts[i].id}'),renderCartNoti()" class="fas fa-trash cart-item-delete-icon"></i>
                </div>
            </div>`
        }
        htmlCart += `<button onclick="removeAllCart(),renderCartNoti()" class="delete-all">Xóa toàn bộ sản phẩm</button>`
        $('.app__container').innerHTML = htmlCart;
    }
}
function removeCartNumber(id) {
    var cartListItem = getCartListItem();
    cartListItem.forEach((carItem,index ) =>{
        if(carItem.id == id){
            carItem.number--
            saveCartListItemToStorage(cartListItem);
            renderCart()
        }
        if(carItem.number == 0){
                let result = confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không")
                if(result){
                    cartListItem.splice(index,1)
                    saveCartListItemToStorage(cartListItem);
                    renderCart()  
                }else{
                    carItem.number++
                    saveCartListItemToStorage(cartListItem);
                    renderCart()
                }
        }
    })
}

function removeCartItem(id) {
    var cartListItem = getCartListItem();
    cartListItem.forEach((cartItem , index)=>{
        if(cartItem.id == id){
            cartListItem.splice(index,1)
            saveCartListItemToStorage(cartListItem);
            renderCart()
        }
    })
}

function removeAllCart() {
    var cartListItem = getCartListItem();
    cartListItem.splice(0, cartListItem.length);
    saveCartListItemToStorage(cartListItem);
    $('.app__container').innerHTML = `
    <div class="cart-empty">
        <img src="./asset/img/no_cart.png" alt="" class="cart-empty-img">
        <div class="cart-empty-text">Giỏ hàng của bạn còn trống</div>
        <button onclick="renderAppContainer();" class="cart-empty-btn">MUA NGAY</button>
    </div>`
}

function renderCartNoti() {
    var cartListItem = getCartListItem();
    console.log(cartListItem.length)
    if (cartListItem.length === 0) {
        $('.header__cart').innerHTML = `
        <div class="header__cart-wrap">
            <i class="header__cart-icon fas fa-shopping-cart"></i>
            <div class="header__cart-list" onclick = "renderCart()" style="cursor: pointer">
                <img src="./asset/img/no_cart.png" alt="" class="header__cart--no-cart-img">
                <p class="header__cart-list--no-cart-msg">
                    Chưa có sản phẩm
                </p>
            </div>
        </div>`
    }else{
        var thisProducts = [];
        var thisCartItems = [];
        cartListItem.forEach(cartItem =>{
            listProduct.forEach(product =>{
                if(cartItem.id == product.id){
                    thisProducts.push(product)
                    thisCartItems.push(cartItem)
                }
            })
        })
        htmlNoti = `<div class="header__cart-wrap">
                        <i class="header__cart-icon fas fa-shopping-cart"></i>
                        <span class="header__cart-notice">${thisCartItems.length}</span>
                        <div class="header__cart-list">
                            <h4 class="header__cart-heading">Sản phẩm đã thêm</h4>
                            <ul class="header__cart-list-item">`
        for (var i = 0; i < thisProducts.length; i++) {
            htmlNoti += `
                <li class="header__cart-item">
                    <img src="${thisProducts[i].img}" alt="" class="header__cart-img">
                    <div class="header__cart-item-info">
                        <div class="header__cart-item-head">
                            <h5 class="header__cart-item-name">${thisProducts[i].name}</h5>
                            <div class="header__cart-item-price-wrap">
                                <span class="header__cart-item-price">${thisProducts[i].priceNew} ₫</span>
                                <span class="header__cart-item-multiply">x</span>
                                <span class="header__cart-item-qnt">${thisCartItems[i].number}</span>
                            </div>
                        </div>
                        
                    </div>
                </li>
            `
        }
        htmlNoti += `</ul>`
        htmlNoti += `<button onclick="renderCart()" class="btn btn--primary header__cart-has-cart-button">Xem giỏ hàng</button>`
        htmlNoti += `</div>
        </div>`
        $('.header__cart').innerHTML = htmlNoti;
    }
}

renderCartNoti();