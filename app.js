
class ScrollEvent {
    
}

function randint(min,max) {
    return Math.floor(Math.random() * (max - min)) + min
}

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

// window.addEventListener("scroll",() => {
//     findElementByQuery(".activity","#activity",".footer").forEach(val => {
//         val.style.backgroundColor = `rgba(${randint(0,244)},${randint(0,244)},${randint(0,244)},0.7)`
//         val.style.left = `${randint(-innerWidth / 4,innerWidth / 4)}px`
//     })
// })


function pageY_Offset(...elements) {
    const off_set = []
    for(element of elements){
        for(e of element){
            off_set.push(e.getBoundingClientRect().top)
        }
    }
    const combine_off_set = []
    for(o of off_set){
        try {
            combine_off_set.push(...o)
        }
        catch (err) {
            combine_off_set.push(o)
        }
    }
    return combine_off_set
}
