const client = require('cheerio-httpcli');
const mysql      = require('mysql');
const conn = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Do_you_love_MySQL57?',
	database: 'spajam2017'
})

conn.connect()

let animes = []

const isExit = spot_num => {
	client.fetch(`https://seichimap.jp/spots/${spot_num}`, function (err, $, res) {
		
		if(spot_num === 5000){ // 終わった
			console.log(err)
			let anime_list = Array.from(new Set(animes))
			write_db(anime_list)
			return false
		}

		if(err){
			isExit(spot_num + 1)
		}

		if(!err){
			let spot = { 
				name: $('.detail-info .spots-name').text(),
				anime: $('.detail-info .spots-anime').text(),
				address: $('.detail-info .spots-addr').text(),
				lat: $('.detail-info .spots-distance').attr('data-spot-lat'),
				lng: $('.detail-info .spots-distance').attr('data-spot-lng'),
				image: $('.detail-phatos-item img').attr('src')
			}

			animes.push(spot.anime)
			console.log(spot_num, spot)
		
			isExit(spot_num + 1)
		}
		

	})
}

const write_db = list => {
	let sql = `INSERT INTO anime (title) values (?) `
	conn.query(sql,list[0]  , function(err) {
		
		list.shift()

		if(list.length === 0){
			conn.end()
		   	return false
		} else {
			write_db(list)
		}
	})
}

// start 
isExit(1)

