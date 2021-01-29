window["addEventListener"]("DOMContentLoaded", () => {
    !(() => {
        const $ = (parent, elem) => parent.querySelectorAll(elem)
        const contents = $(document, ".content")
        const cards = $(document, ".card")
        const colors = ["#124e96", "#ffd460", "#e2434b", "#fe5f55", "#fd0054", "#ffd717", "#ed733f"]
        cards.forEach(card => {
            card.addEventListener("mouseover", () => {
                const random = Math.floor(Math.random() * colors.length)
                contents.forEach(content=>content.style.backgroundColor = colors[random]
                )
            }) 
        })
    })()
})