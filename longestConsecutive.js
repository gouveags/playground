function longestConsecutive(nums) {
    if(nums.length === 1) return 1;

    const sortedNums = nums.sort((a,b) => {
        if (a < b) return -1;            
        if (a > b) return 1;
        if (a === b) return;
    });

    let biggestConsecutive = 0;
    let consecutiveSequence;

    for (let i = 0; i < sortedNums.length; i++){

        if(sortedNums[i] === sortedNums[i - 1]) continue;

        if(sortedNums[i] -1 === sortedNums[i - 1]){
            consecutiveSequence += 1;
        } else {
            consecutiveSequence = 1;
        }

        if(consecutiveSequence > biggestConsecutive){
            biggestConsecutive = consecutiveSequence;
        }
    }

    return biggestConsecutive;
}


longestConsecutive([2,20,4,10,3,4,5]);