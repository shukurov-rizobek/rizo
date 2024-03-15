const openModalBtn = document.querySelector("header button"),
    modal = document.querySelector(".modal")

openModalBtn.addEventListener("click", () => {
    modal.style.transform="translate(-50%, -50%) scale(1)" 
})

const closeModal = document.querySelector(".modal__header button")

closeModal.addEventListener("click", () => {
    modal.style.transform="translate(-50%, -50%) scale(0)"
})
