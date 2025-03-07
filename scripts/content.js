document.addEventListener('DOMContentLoaded', function (params) {
    const Header = `
    <header>
    <nav>
        <picture>
            <img src="" alt="">
        </picture>
        <div class="title"></div>
        <div class="links"></div>
    </nav>
</header>
    `;

    const Footer=`
    <footer>
    <div class="logo">
        <figure>
            <img src="" alt="">
        </figure>
        <p>&copy; 2025. Kevin Issac. Todos los derechos reservados</p>
    </div>
    <div class="pages">
        <ul>
            <li><a href="">Principal</a></li>
            <li><a href="">Portafolio</a></li>
        </ul>
    </div>
    <div class="contact">
        <ul>
            <li><a href=""></a></li>
        </ul>
    </div>
</footer>`;

this.body.prepend(Header);
this.body.append(Footer);
})