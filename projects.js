var canvas = document.querySelector('canvas')

var shelves = 40
var shelf_height = 150
var separator_height = 10

canvas.width = 900
canvas.height = (shelves*shelf_height)+(separator_height*(shelves-1))

var c = canvas.getContext('2d')
var books = [
    [
        {
            "link": "0000-website",
            "hue": 40
        },
        {
            "link": "0000-website",
            "hue": 70
        },
    ],
    [
        {
            "link": "0000-website",
            "hue": 60
        },
    ]
]

function load_books() {
    for (var s = 0; s < books.length; s++) {
        var shelf = books[s]
        for (var b = 0; b < shelf.length; b++) {
            var book = shelf[b]
            var link = document.createElement("a")
            canvas.appendChild(link)
            link.href = "projects/"+book["link"]+".html"
            var img = document.createElement("img")
            link.appendChild(img)
            img.alt = "link to " + book["link"]
            img.src = "book.png"
        }
    }
}

var tick = 0
function animate() {
    var rect = canvas.getBoundingClientRect()
    var centre = (-rect.top)+(window.innerHeight/2)

    c.clearRect(0, 0, canvas.width, canvas.height)
    
    c.fillStyle = 'rgba(216, 206, 192, 1)'
    for (var i = 0; i < shelves; i++) {
        var y = ((shelf_height+separator_height)*i)
        c.fillRect(0, y, 900, 150)
    }

    c.fillStyle = 'rgba(186, 173, 156, 1)'
    for (var i = 0; i < shelves; i++) {
        var baseY = ((shelf_height+separator_height)*i)
        var weirdY = baseY+18.5-((baseY+57.5)-centre)*0.1
        var top = Math.max(weirdY, baseY)
        var bottom = Math.min(baseY+shelf_height, weirdY+115)

        c.fillRect(100, top, 700, bottom-top)
    }

    tick += 0.05
    requestAnimationFrame(animate)
}
animate()
load_books()