function solve(input) {
    let speed = input[0];
    let zone = input[1];
    let limit = getLimit(zone);
    let infraction = getInfraction(speed, limit);

    if(infraction){
        console.log(infraction);

    }

    function getLimit(zone) {
        switch (zone){
            case "motorway": return 130;
            case "city": return 50;
            case "interstate": return 90;
            case "residential": return 20;
        }
    }
    
    function getInfraction(speed, limit) {
        let overSeed = speed - limit;
        if(overSeed <= 0 ){
            return false;
        }
        else if(overSeed > 0 && overSeed <= 20){
            return 'speeding';
        }
        else if(overSeed > 20 && overSeed <= 40){
            return 'excessive speeding';
        }
        else if(overSeed > 40){
            return 'reckless driving';
        }
    }
}

solve([21, 'residential'])