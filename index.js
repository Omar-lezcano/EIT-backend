const app = require("./app");
const port = 4000;
const dbURL = `mongodb+srv://omarlezcano10:yUJZFlpPSox0pdVl@omar-cluster.wwuvvib.mongodb.net/eit-61543?retryWrites=true&w=majority`;
const mongoose = require("mongoose");

mongoose.connect(dbURL)
            .then(() => {
                console.log(`\x1b[35m Conexión a la DB satisfactoria \x1b[37m`);

                //Poner en marcha mi servidor express
                app.listen(port, () => {
                    console.log(`\x1b[36m Servidor funcionando en puerto ${port} \x1b[37m`)

                    // setTimeout(() => {
                    //     console.log(`timeout`)
                    // }, 2000)
                })
            })
            .catch((error) => {
                console.log(error)
            })



// app.listen(port, () => {
//     console.log(`Servidor funconando en puerto ${port}`)
// })