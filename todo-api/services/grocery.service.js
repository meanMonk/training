const client = require('../db.cassandra');

function groceryService() {
    const loadAllDailyProduct = async (req,res,next) => {
        let query = 'SELECT * FROM grocery.dailyneeds_box;';
        client.execute(query,[]).then((data) => {
            res.status(200).send({
                data
            })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({
                message: `Interal server error`
            })
        });
    }

    const loadDailyProduct = (req,res) => {
        let params = [req.params.id]
        let query = 'SELECT * FROM grocery.dailyneeds_box WHERE itemId = ? AND name = ?';

        let inserQuery = `INSER INTO grocery.dailyneeds_box (itemid, name, price) VALUES (${req.body.id}, ${req.body.name}, ${req.body.price})`

        client.execute(query,params).then((result) => {
            res.status(200).send({
                result
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




