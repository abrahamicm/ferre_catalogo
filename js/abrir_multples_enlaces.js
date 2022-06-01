var locs = []
document.querySelectorAll(".edit a").forEach((x, y) => {
    locs.push(x.href)
})
var i = 0
var intervalo = setInterval(() => {
    window.open(locs[i])
    i++
    if (i > locs.length) {
        clearInterval(intervalo)
    }
}, 1000)