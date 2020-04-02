const Primus = require('primus');

let go = (server) => {
    let primus = new Primus(server, {/* options */});
    primus.on('connection', (spark) => {
        console.log('test')

        spark.on('data',(data)=> {
            console.log(data);
        })
    });
}

module.exports.go = go;