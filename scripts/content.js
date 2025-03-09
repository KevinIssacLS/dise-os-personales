document.addEventListener('DOMContentLoaded', function (params) {
    var Header = 
    '<header>'+
    '<nav>'+
        '<picture>'+
            '<img src="http://kevin-issac-ls.epizy.com/images/logo-%C3%ADcono.png" alt="">'+
        '</picture>'+
        '<div class="title"><p>Nombre de la página</p></div>'+
        '<div class="links"></div>'+
    '</nav>'+
'</header>';

    var Footer='<footer>'+
    '<div class="logo">'+
        '<figure>'+
            '<img src="" alt="">'+
        '</figure>'+
        '<p>&copy; 2025. Kevin Issac. Todos los derechos reservados</p>'+
    '</div>'+
    '<div class="pages">'+
        '<ul>'+
            '<li><a href="">Principal</a></li>'+
            '<li><a href="">Portafolio</a></li>'+
            '<li><a href="">Mapa de sitio</a></li>'+
        '</ul>'+
    '</div>'+
    '<div class="social">'+
        '<ul>'+
            '<li><a href=""></a></li>'+
        '</ul>'+
    '</div>'+
'</footer>';

// Agregar navbar al inicio del body
document.body.insertAdjacentHTML('afterbegin', Header);

// Agregar footer al final del body
document.body.insertAdjacentHTML('beforeend', Footer);
})
