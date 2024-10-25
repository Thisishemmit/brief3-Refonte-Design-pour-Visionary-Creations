const cards = document.querySelectorAll(".hover-card")

console.log(cards[0].previousElementSibling.clientHeight);

for (let i = 0; i < cards.length; i++) {
    const pHeight = cards[i].previousElementSibling.clientHeight
    cards[i].style.height = pHeight + "px"
    const pWidth = cards[i].previousElementSibling.clientWidth
    cards[i].style.width = pWidth + "px"
}
