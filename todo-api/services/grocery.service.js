const cassandra = require('cassandra-driver');
const contactPoints = ['127.0.0.1:4095'];
const authProvider = new cassandra.auth.PlainTextAuthProvider('Username','password');

const client = new cassandra.Client({
    contactPoints: contactPoints,
    localDataCenter: 'datacenter1',
    keyspace: 'grocery',
    authProvider: authProvider
});


function execute(query,params,cb) {
    return new Promise((resolve,reject) => {
        client.execute(query,params,(err,result) => {
            if(err) {
                reject()
            } else {
                cb(err,result);
                resolve()
            }
        })
    })
}



function groceryService() {
    const loadAllDailyProduct = async (req,res,next) => {
        let query = 'SELECT * FROM grocery.dailyneeds_box;';
        let data;
        execute(query,[],(err,result) => {
            if(result) {
                data = result
            }
        }).then(() => {
            res.status(200).send({
                data
            })
        }).catch((err) => {
            console.log(error);
            res.status(500).send({
                message: `Interal server error`
            })
        });
    }

    const loadDailyProduct = (req,res) => {
        let params = [req.params.id]
        let query = 'SELECT * FROM grocery.dailyneeds_box WHERE itemId = ? AND name = ?';
        let data;
        execute(query,params,(err,result) => {
            if(result) {
                data = result;
            }
        }).then(() => {
            res.status(200).send({
                data
            })
        }).catch((err) => {
            console.log('error',err);
            res.status(500).send({
                message: 'Internal Server ERROR'
            })
        });
    }

    return {
        loadAllDailyProduct,
        loadDailyProduct
    }
}




module.exports = groceryService();




