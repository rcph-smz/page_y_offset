

function findElementByQuery(...queries) {
    const query_ext = ["\.","#","[","]"]
    const query_list = []
    for(query of queries){
        for(ext of query_ext){
            if(query.includes(ext) && document.querySelectorAll(query).length > 1){
                query_list.push(document.querySelectorAll(query))
                break
            }
            else if(query.includes(ext) && document.querySelectorAll(query).length == 1) {
                query_list.push(document.querySelector(query))
                break
            }
        }
    }
    const combine_list = []
    for(query of query_list){
        try {
            combine_list.push(...query)
        }
        catch (err) {
            combine_list.push(query)
        }
    }
    return combine_list
}
function randint(min,max) {
    return Math.floor(Math.random() * (max - min)) + min
}

window.addEventListener("scroll",() => {
    findElementByQuery(".activity","#activity",".footer").forEach(val => {
        val.style.backgroundColor = `rgba(${randint(0,244)},${randint(0,244)},${randint(0,244)},0.7)`
        val.style.left = `${randint(-innerWidth / 4,innerWidth / 4)}px`
    })
})


function pageYOffset(element) {

}