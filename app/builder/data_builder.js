// Bitte ignorieren, einfach ein kleines Script um Dummy-Daten zu erzeugen




const fs = require('fs');

// const names = [
//     "patient_1",
//     "patient_2",
//     "patient_3",
//     "patient_4",
//     "patient_5",
//     "patient_6",
//     "patient_7",
//     "patient_8",
//     "patient_9",
//     "patient_10"
// ]

const names_knn = [
    "patient_11",
    "patient_12"
]

const befindlichkeit = [0,10,20,30,40,50,60,70,80,90,100]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// NORMAL Random creation
// for (let index = 0; index < names_knn.length; index++) {
//     const element = names[index];
//     const jj = {
//         data : []
//     };

//     for (let index2 = 0; index2 < 52; index2++) {
//         const sample = {
//             "date": (index2 + 1) + " KW",
//             "week": (index2 + 1),
//             "befindlichkeit" : befindlichkeit[getRandomInt(0,10)],
//             "questions" : [
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4),
//                 getRandomInt(0,4)
//             ]
//         };

//         jj.data.push(sample);
//     }

//     fs.writeFile(__dirname + "/../data/" + names[index] + ".json", JSON.stringify(jj), function(err) {
//         if(err) {
//             return console.log(err);
//         }
    
//         console.log("The file was saved!");
//     });
// }



for (let index = 0; index < names_knn.length; index++) {
    // const element = names_knn[index];
    const jj = {
        data : []
    };

    for (let index2 = 0; index2 < 24; index2++) {
        const sample = {
            "date": (index2 + 1) + " KW",
            "week": (index2 + 1),
            "befindlichkeit" : befindlichkeit[getRandomInt(0,5)],
            "questions" : [
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4),
                getRandomInt(2,4)
            ]
        };

        jj.data.push(sample);
    }

    for (let index2 = 24; index2 < 40; index2++) {
        const sample = {
            "date": (index2 + 1) + " KW",
            "week": (index2 + 1),
            "befindlichkeit" : befindlichkeit[getRandomInt(5,10)],
            "questions" : [
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3),
                getRandomInt(1,3)
            ]
        };

        jj.data.push(sample);
    }

    for (let index2 = 40; index2 < 49; index2++) {
        const sample = {
            "date": (index2 + 1) + " KW",
            "week": (index2 + 1),
            "befindlichkeit" : befindlichkeit[getRandomInt(5,10)],
            "questions" : [
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1),
                getRandomInt(0,1)
            ]
        };

        jj.data.push(sample);
    }

    for (let index2 = 49; index2 < 52; index2++) {
        const sample = {
            "date": (index2 + 1) + " KW",
            "week": (index2 + 1),
            "befindlichkeit" : befindlichkeit[getRandomInt(8,10)],
            "questions" : [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        };

        jj.data.push(sample);
    }


    fs.writeFile(__dirname + "/../data/" + names_knn[index] + ".json", JSON.stringify(jj), function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });
}