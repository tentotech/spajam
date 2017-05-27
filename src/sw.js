import {fetchMySQL} from './utils'


function markAsRead() {
  fetchMySQL('INSERT INTO history(user_id, sacred_place_id, timestamp) VALUES ()')
}
