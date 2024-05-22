const mongoose = require('mongoose')

const dbConnect = async (conStr) => {
    console.log(conStr)
    try {
        await mongoose.connect(conStr).then(() => {
            console.log("db connected...")
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = dbConnect