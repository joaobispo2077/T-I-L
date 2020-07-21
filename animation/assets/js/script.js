import { Blocks } from './Blocks.js'

window.onload = () => {
    let animaBlocks = new Blocks();
    document.addEventListener('scroll', animaBlocks.scrollBlocks.bind(animaBlocks))
}