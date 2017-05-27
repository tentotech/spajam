const client = require('cheerio-httpcli');
const mysql      = require('mysql');
const conn = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Do_you_love_MySQL57?',
	database: 'spajam2017'
})

conn.connect()

let spots = []
let all_animes

const isExit = spot_num => {
	client.fetch(`https://seichimap.jp/spots/${spot_num}`, function (err, $, res) {
		
		if(spot_num === 5000){ // 終わった
			write_db(spots)
			console.log(err)
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
				image: $('.detail-phatos-item img').attr('src'),
				comment: $('.detail-info .spots-note').text(),
				anime_id: isAnimeId(all_animes, $('.detail-info .spots-anime').text())
			}
			
			if(spot.anime_id) spots.push(spot)

			console.log(spot_num,spot)

			isExit(spot_num + 1)
		}
		

	})
}


const write_db = list => {
	let sql = `INSERT INTO sacred_place (anime_id,name,longitude,latitude,radius,image,address,comment) values (?,?,?,?,?,?,?,?) `
	conn.query(sql, [ list[0].anime_id, list[0].name, list[0].lng, list[0].lat, 500, list[0].image, list[0].address, list[0].comment ]  , function(err) {
		
		list.shift()

		if(list.length === 0){
			conn.end()
		   	return false
		} else {
			write_db(list)
		}
	})
}

const isAnimeId = (animes,title) => {

	let ans = ''
	animes.map(anime => {
		if(title === anime.title){
			ans = anime.id
		}
	})

	if(ans.length === 0){
		return false
	} else {
		return ans
	}

}

conn.query('select * from anime', (err,resp) => {
	all_animes = resp
	isExit(1)
})
// start 

