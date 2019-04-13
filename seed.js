const { db, Vegetable } = require('./models');



db.sync({force: true})
    .then(() => {
        Vegetable.create({
            name: "Tomato",
            color: "Red",
            planted_on: "8/2/18"
        })
        Vegetable.create({
            name: "Cucumber",
            color: "Green",
            planted_on: "8/1/18"
        })
        console.log('Databse synced!')
    })
    .catch(err => {
        console.log('Disaster! Something went wrong!')
        console.log(err)
    })
    /* .finally(() => {
        db.close()
    }) */