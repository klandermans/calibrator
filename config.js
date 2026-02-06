config = [
        {
            group: 'hokofarm',
            type: 'ric_voeding_1_32',
            weights: [0, 20],
            maxAllowed: 2.0, // max 2% afwijking
            ids: Array.from({length: 32}, (_, i) => i + 1)
        },
        {
            group: 'hokofarm',
            type: 'ric_voeding_33_64',
            weights: [0, 20],
            maxAllowed: 2.0, // max 2% afwijking
            ids: Array.from({length: 32}, (_, i) => i + 1)
        },        
        
        {
            group: 'hokofarm',
            type: 'ric_transitiestal',
            weights: [0, 20],
            maxAllowed: 2.0, // max 2% afwijking
            ids: Array.from({length: 32}, (_, i) => i + 1)
        },
        
        {
            group: 'trioliet',
            type: 'keuken',
            weights: [0, 20, 40, 60, 80, 100],
            maxAllowed: 5.0,
            ids: [0, 1, 2, 3, 4]
        },
        {
            group: 'greenfeed',
            type: 'lokbrok',
            weights: [10, 10, 10],
            maxAllowed: 10.0,
            ids: [301, 119, 121, 131]
        },
        {
            group: 'greenfeed',
            type: 'co2',
            weights: [0, 0], 
            maxAllowed: 1.5,
            ids: [301, 119, 121, 131]
        }
];
