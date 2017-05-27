const express = require('express')
const app        = express()
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./express-sql/db.sqlite3')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

app.post('/sql',function(req,res){
	db.run(req.body.sql, (err, resp) => {
		if(err)  res.status(400).json({error: err})
		if(!err) res.json({response: resp || 'success'})
	})
})

//サーバ起動
app.listen(port)
console.log('listen on port ' + port)
