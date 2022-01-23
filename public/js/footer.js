const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/GoGoGadgets-light-logo.png" class="logo"alt="">
            <div class="footer-ul-container">
                <ul class="ul-category">
                    <li class="category-title">Gaming</li>
                    <li><a href="#" class="footer-link">Computers</a></li>
                    <li><a href="#" class="footer-link">Controllers</a></li>
                    <li><a href="#" class="footer-link">Accessories</a></li>
                    <li><a href="#" class="footer-link">Monitors</a></li>
                    <li><a href="#" class="footer-link">Consoles</a></li>
                </ul>

                <ul class="ul-category">
                
                    <li class="category-title">Audio Visual</li>
                    <li><a href="#" class="footer-link">Speakers</a></li>
                    <li><a href="#" class="footer-link">Headphones</a></li>
                    <li><a href="#" class="footer-link">Cameras</a></li>
                    <li><a href="#" class="footer-link">Head Units</a></li>
                    <li><a href="#" class="footer-link">Accessories</a></li>
                </ul>
                <ul class="ul-category">
                    <li class="category-title">3D Printing</li>
                    <li><a href="#" class="footer-link">3D Printers</a></li>
                    <li><a href="#" class="footer-link">Filament</a></li>
                    <li><a href="#" class="footer-link">Resin</a></li>
                    <li><a href="#" class="footer-link">3D Pens</a></li>
                    <li><a href="#" class="footer-link">Accessories</a></li>
                </ul>
                <ul class="ul-category">
                    <li class="category-title">Toys</li>
                    <li><a href="#" class="footer-link">Remote Controlled</a></li>
                    <li><a href="#" class="footer-link">Building</a></li>
                    <li><a href="#" class="footer-link">Learning</a></li>
                    <li><a href="#" class="footer-link">Games</a></li>
                    <li><a href="#" class="footer-link">Blasters</a></li>
                    <li><a href="#" class="footer-link">Accessories</a></li>
                </ul>

                
            </div>
            
        </div>
        <p class="footer-title">About Company</p>
        <p class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nulla? Labore ab maxime soluta inventore
            doloribus temporibus minima incidunt est voluptates optio mollitia magnam, eaque reprehenderit alias hic autem
            adipisci?</p>
        <p class="about">Support E-mail: help@gogogadets.com, customersupport@gogogadgets.com </p>  
        <p class="about">Telephone: 1-800-999-9999</p>  
        <div class="footer-socials">
            <div>
                <a href="#" class="social-link">Terms & Conditions</a>
                <a href="#" class="social-link">Privacy Page</a>
            </div>
            <div>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">Go Go Gadets, Best gadgets across the internet</p>
    
    `;
}

createFooter();