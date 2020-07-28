  
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

/* Abrir modal */
for (let card of cards) {
    card.addEventListener("click", function () {
        const videoId = card.getAttribute("id"); /* Pegando o id do vídeo. O id foi passado na div de cada card */
        modalOverlay.classList.add("active"); /* Abrindo a modal adicionando o a classe overlay */
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}` /* Abrindo a modal passando o id do vídeo */
    })
}

/* Fechar modal */
document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active"); /* Fechando a modal */
    modalOverlay.querySelector("iframe").src = ""; /* Encerrando o áudio do vídeo quando fecha a modal */
})