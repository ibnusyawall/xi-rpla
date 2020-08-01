/*var bcrypt = require('bcrypt')

const hash = bcrypt.hashSync('sMkb1s4!', 10)

var hashres = ['$2b$10$vQpaWKwLeRBmOQQgJ/9BFeOp/nVvid0NNDE47dYHs8eeoLgMOIDQG', '$2b$10$yt5lIa5/8Itjb.feAGQ3f.Epz.MDb8KxBqPtIjr6/8kYXWrNSjLCW', '$2b$10$3aW95Au3O12osLzC4xC.iOJvSdqerW3o5m8k8L/XxZ6E.AiHap7fW']

console.log(hash)

var res = bcrypt.compareSync('sMkb1s4!', hashres[Math.floor(Math.random() * hashres.length)] )

console.log(res)
*/

var nedb = require('nedb')


db = new nedb('dbsiswa.db')

db.loadDatabase((err) => console.log('db connect.'))

db.find({}, (err, res) => console.log(res))
