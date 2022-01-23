//Dynamically adds navbar to each page where scripte is included

const createNav = () => {
    let nav =document.querySelector('.nav-bar');

    nav.innerHTML = `
    <div class="nav">
            <img src="img/GoGoGadgets-logo-new.png"  class="brand-logo" alt="">
        
            <div class="nav-items">

                <div class="search">
                    <input type="text" class="search-box" placeholder="Search brands, products, etc.">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#" class="user"><img src="img/user.png" alt=""></a>
                <a href="#" class="cart"><img src="img/cart.png" alt=""></a>    

            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Gaming</a></li>
            <li class="link-item"><a href="#" class="link">Audio & Visual</a></li>
            <li class="link-item"><a href="#" class="link">3d Printing</a></li>
            <li class="link-item"><a href="#" class="link">Toys</a></li>
            
        </ul>
    
    `;
} 

createNav();