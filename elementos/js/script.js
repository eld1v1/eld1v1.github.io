document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("#menu li");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`Você selecionou: ${item.textContent}`);
        });
    });
});
