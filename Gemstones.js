John has collected various rocks. Each rock has various minerals embeded in it. Each type of mineral is designated by a lowercase letter in the range a-z.
There may be multiple occurrences of a mineral in a rock. A mineral is called a gemstone if it occurs at least once in each of the rocks in John's collection.

Given a list of minerals embedded in each of John's rocks, display the number of types of gemstones he has in his collection.
For example, the array of mineral composition strings arr = ["abc", "abc", "bc"]. The minerals b and c appear in each composite, so there are 2 gemstones.

Solution:

function gemstones(arr) {
    let gemstones = 0;
    const firstRock = arr[0];
    let pastMinerals = [];
    for (const mineral of firstRock) {
        if (!pastMinerals.includes(mineral)) {
            let count = 0;
            for (const rock of arr) {
                if (rock.includes(mineral)) {
                    count += 1;
                }
            }
            if (count === arr.length) {
                gemstones += 1;
            }
            pastMinerals.push(mineral);
        }
    }
    return gemstones;
}
