//works!
'use strict';
function perfectCity(departure, destination) {
    var routeLength = 0;

    routeLength += getSingleCoordRoute(departure[0], destination[0]);
    routeLength += getSingleCoordRoute(departure[1], destination[1])

    return routeLength;
}

function getSingleCoordRoute(dep, dest){
    if(~~dep !== ~~dest){
        return Math.abs(dest - dep);
    } else {
        return Math.min(
                    Math.abs(1 - dep - ~~dep + 1 - dest - ~~dest),
                    Math.abs(dest - ~~dest + dep - ~~dep)
                );
    } 
}