function compareTriplets(a, b) {
    let aPoints = 0;
    let bPoints = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aPoints += 1;
        } else if (a[i] < b[i]) {
            bPoints += 1;
        }
    }
    
    return [aPoints, bPoints];
}
