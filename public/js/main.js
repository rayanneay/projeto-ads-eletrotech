document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.inicio-banner');
    if (!banner || banner.dataset.carousel) return;

    banner.dataset.carousel = 'ok';

    const slides = banner.querySelectorAll('.banner-slide');
    const dots = banner.querySelectorAll('.banner-dot');
    const anterior = banner.querySelector('.banner-seta-anterior');
    const proxima = banner.querySelector('.banner-seta-proxima');
    const INTERVALO = 6000;
    let atual = 0;
    let timer;

    function irPara(indice) {
        const proximo = (indice + slides.length) % slides.length;
        if (proximo === atual) return;

        slides[atual].classList.remove('active');
        dots[atual].classList.remove('active');

        atual = proximo;

        slides[atual].classList.add('active');
        dots[atual].classList.add('active');
    }

    function parar() {
        clearInterval(timer);
    }

    function iniciar() {
        parar();
        timer = setInterval(() => irPara(atual + 1), INTERVALO);
    }

    function irManual(indice) {
        irPara(indice);
        iniciar();
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => irManual(i));
    });

    anterior.addEventListener('click', () => irManual(atual - 1));
    proxima.addEventListener('click', () => irManual(atual + 1));

    iniciar();
});