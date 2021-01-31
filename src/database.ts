import mongoose from 'mongoose';

export default () => {
    mongoose.connect(
        'mongodb+srv://andrii:test@cluster0.7x3kj.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).catch(err => {
        console.log(err);
    });

    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

}