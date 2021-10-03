const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('🔥 MongoDB Connected!'))
    .catch((err) => console.log(`Error from DB : ${err.message}`))

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected Successfully!');
})

mongoose.connection.on('error', (err) => {
    console.log(`Error from DB : ${err.message}`)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose Connected is Disconnect!');
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(1)
})