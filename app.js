
class ScrollEvent {
    constructor () {

    }
    pageY_Offset(...elements) {
        const off_set = []
        for(const element of elements){
            try {
                for(const e of element){
                    off_set.push(e.getBoundingClientRect().top)
                }
            }
            catch (err) {
                off_set.push(element.getBoundingClientRect().top)
            }
        }
        const combine_off_set = []
        for(const o of off_set){
            try {
                combine_off_set.push(...o)
            }
            catch (err) {
                combine_off_set.push(o)
            }
        }
        return combine_off_set
    }
    
}

class Query {
    constructor () {

    }
    findElementByQuery(...queries) {
        const query_ext = ["\.","#","[","]"]
        const query_list = []
        for(const query of queries){
            for(const ext of query_ext){
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
        for(const query of query_list){
            try {
                combine_list.push(...query)
            }
            catch (err) {
                combine_list.push(query)
            }
        }
        return {
            getQuery() {
                return combine_list
            },
            gizmos(condition = false,borderColor = "#87ceeb") {
                if(condition) {
                    combine_list.forEach((query) => {
                        query.style.borderStyle = `solid`
                        query.style.borderColor = borderColor
                    })
                }
                else {
                    combine_list.forEach((query) => {
                        query.style.borderStyle = ``
                        query.style.borderColor = ``
                    })
                }
            },
            findByIndex(index) {
                return {
                    getQuery() {
                        return combine_list[index]
                    },
                    gizmos(condition = false,borderColor = "#87ceeb") {
                        if(condition) {
                            combine_list[index].style.borderStyle = `solid`
                            combine_list[index].style.borderColor = borderColor
                        }
                        else {
                            combine_list[index].style.borderStyle = ``
                            combine_list[index].style.borderColor = ``
                        }
                    }
                }
            }
        }
    }
}

class Random {
    constructor() {

    }
    randint(min,max) {
        return Math.floor(Math.random() * (max - min)) + min
    }
}

const query = new Query()
const scrollEvent = new ScrollEvent()
const randint = new Random()

const activities = query.findElementByQuery(".activity").getQuery()

window.addEventListener("scroll",() => {
    activities.forEach(activity => {
        activity.style.left = `${randint.randint(-innerWidth / 4, innerHeight / 4)}px`
    })
})


// query.findElementByQuery(".activity").gizmos(true)


