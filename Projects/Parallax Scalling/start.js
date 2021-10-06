(() => {
    function onScroll() {
        const moonElem = document.querySelector('.moon')
        const wishElem = document.querySelector('.wish')
        const mountainBgElem = document.querySelector('.mountain_bg')

        if (window.innerWidth < 800) {
            moonElem.style.transform = `translate(${window.scrollY * 0.5}%, ${window.scrollY * (-0.7)}%)`
            wishElem.style.transform = `translateY(${window.scrollY * (-0.8)}%)`
            mountainBgElem.style.transform = `translateY(${window.scrollY * 0.045}%)`
        } else if (window.innerWidth < 1300) {
            moonElem.style.transform = `translate(${window.scrollY * 0.5}%, ${window.scrollY * (-0.75)}%)`
            wishElem.style.transform = `translateY(${window.scrollY * (-0.9)}%)`
            mountainBgElem.style.transform = `translateY(${window.scrollY * 0.05}%)`
        } else {
            moonElem.style.transform = `translate(${window.scrollY * 0.6}%, ${window.scrollY * (-0.8)}%)`
            wishElem.style.transform = `translateY(${window.scrollY * (-1.2)}%)`
            mountainBgElem.style.transform = `translateY(${window.scrollY * 0.06}vh)`
        }
        console.log(window.innerWidth)
    }
    function run() {
        if (window.innerWidth > 1400) {
            const mountainBgElem = document.querySelector('.mountain_bg')
            mountainBgElem.style.top = `35%`
        }
        document.addEventListener('scroll', onScroll)
    }
    run()
})()