const mongoose = require('mongoose');

const connectToDataBase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bxyft.mongodb.net/?appName=database`
        );
        console.log("Conectado com sucesso ao banco de dados!");
    } catch (error) {
        console.log("Erro ao conectar com o banco de dados: ", error);
    }
};

module.exports = connectToDataBase;