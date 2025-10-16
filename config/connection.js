const mongoose = require('mongoose');

exports.initMongoDb = () =>
    new Promise((resolve, reject) => {
        try {
            mongoose.set('strictQuery', true);
            mongoose
                .connect('mongodb+srv://alilahbib_dev:ali20022002@cluster0.gwcyu.mongodb.net/PlantDesease?retryWrites=true&w=majority&appName=Cluster0', {
                  
                    autoCreate: true,
                    autoIndex: true,
                })
                .then(() => {
                    console.log('MongoDB Connected ✅');
                    resolve(mongoose.connection);
                })
                .catch((err) => console.log("error => ",err));
        } catch (error) {
            reject(error);
        }
    });