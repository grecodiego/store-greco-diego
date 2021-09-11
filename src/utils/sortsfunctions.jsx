

export function sortByNameAZ (array){
        let newArray = array.sort(compareAZ);
        return newArray
}

export function sortByNameZA (array){
        let newArray = array.sort(compareZA);
        return newArray
}

export function sortHigherPrice (array){
    let newArray = array.sort(compareHigher);
        return newArray
}

export function sortLowerPrice (array){
    let newArray = array.sort(compareLower);
    return newArray
}

function compareLower(a, b){
        if(a.cost < b.cost){
            return -1;
    }else if(a.cost > b.cost){
            return 1;
    }else{
            return 0;
    }
}

function compareHigher(a, b){
        if(a.cost < b.cost){
            return 1;
    }else if(a.cost > b.cost){
            return -1;
    }else{
            return 0;
    }
}


function compareAZ(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    }

    function compareZA(a, b){
        if(a.name < b.name) { return 1; }
        if(a.name > b.name) { return -1; }
        return 0;
    }