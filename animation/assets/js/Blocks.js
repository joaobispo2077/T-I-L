class Blocks {
    constructor() {
        this.posicaoSection = document.getElementById('second_container');
        this.blocoEsquerdo = document.querySelector('#rect');
        this.blocoDireito = document.querySelector('#rect2');

    }
    scrollBlocks() {
        window.requestAnimationFrame(this.calculoScroll.bind(this))
    }
    calculoScroll() {
        const posicao = this.posicaoSection.getBoundingClientRect()['y'];
        console.log(posicao);

        if (posicao < 423 && posicao > 31) {
            this.blocoEsquerdo.style.transform = `translate(-${posicao}px)`
            this.blocoDireito.style.transform = `translate(${posicao}px)`
        }
    }

}
export { Blocks }