let batsman = [
    {
        number: 0,
        runsScored: 0,
        batting: false
    },
    {
        number: 1,
        runsScored: 0,
        batting: false
    },
    {
        number: 2,
        runsScored: 0,
        batting: false
    },
    {
        number: 3,
        runsScored: 0,
        batting: false
    },
    {
        number: 4,
        runsScored: 0,
        batting: false
    },
    {
        number: 5,
        runsScored: 0,
        batting: false
    },
    {
        number: 6,
        runsScored: 0,
        batting: false
    },
    {
        number: 7,
        runsScored: 0,
        batting: false
    },
    {
        number: 8,
        runsScored: 0,
        batting: false
    },
    {
        number: 9,
        runsScored: 0,
        batting: false
    },
    {
        number: 10,
        runsScored: 0,
        batting: false
    }

]

const scoreboard = () => {
    for (let i = 0; i < batsman.length; i++) {
        const batsmanBatting = batsman[i]
        console.log(`${batsmanBatting.number + 1}`);
    }
}

scoreboard()