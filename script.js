// h2 observer
const h2Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("h2-load", entry.isIntersecting)
        if(entry.isIntersecting){h2Observer.unobserve(entry.target)}
    })
},
{
    threshold: 1,    
});

const h2Tags = document.querySelectorAll(".header2")
h2Tags.forEach( tag => {
    h2Observer.observe(tag)
});


// project tile observer
const tileObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("tile-load", entry.isIntersecting)
        if(entry.isIntersecting){tileObserver.unobserve(entry.target)}
    })
},
{
    threshold: 1,
})

const tiles = document.querySelectorAll(".tile")
tiles.forEach( tile => {
    tileObserver.observe(tile)
});