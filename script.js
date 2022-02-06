const menuMobile = document.getElementById('menu-mobile'),
    nav = document.querySelector('nav'),
    connect = document.getElementById('connect'),
    connectList = document.getElementById('connect-list');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('ativo');
    setTimeout(() => {
        nav.classList.toggle('ativo');
        document.body.classList.toggle('open-menu');
    }, 50);
});

connect.addEventListener('click', () => {
    [connectList, connect].forEach(each => each.classList.toggle('ativo'))
})