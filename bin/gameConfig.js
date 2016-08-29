
module.exports = [{
	"type": "CASTLE",
	"hp": 100000,
	"price": 0,
	"moveTargets": false,
	"attackTargets": ["ORK", "HUNTER", "TROLL", "TOWER", "ST"],
	"damage": 300,
	"moveSpeed": 0,
	"attackSpeed": 1,
	"attackRadius": 4,
	"block": true,
	"spawnInterval": 30
}, {
	"type": "ORK",
	"hp": 1000,
	"price": 200,
	"moveTargets": ["TOWER","CASTLE", "HUNTER","ORK", "TROLL"],
	"attackTargets": ["TOWER","CASTLE", "HUNTER","WALL","ORK", "TROLL"],
	"damage": 50,
	"moveSpeed": 1,
	"attackSpeed": 1,
	"attackRadius": 2,
	"block": false
}, {
	"type": "TOWER",
	"hp": 1000,
	"price": 200,
	"moveTargets": false,
	"attackTargets": ["ORK","HUNTER","TROLL"],
	"damage": 250,
	"moveSpeed": 1,
	"attackSpeed": 1,
	"attackRadius": 3,
	"block": true
},{
	"type": "ST",
	"hp": 10000,
	"price": 1000,
	"moveTargets": false,
	"attackTargets": ["ORK","HUNTER","TROLL"],
	"damage": 300,
	"moveSpeed": 1,
	"attackSpeed": 1,
	"attackRadius": 4,
	"block": true
}, {
	"type": "PLACE",
	"hp": 1,
	"price": 100,
	"moveTargets": false,
	"attackTargets": [],
	"damage": 0,
	"moveSpeed": 0,
	"attackSpeed": 0,
	"attackRadius": 0,
	"block": false
},{
	"type": "WALL",
	"hp": 600,
	"price": 30,
	"moveTargets": false,
	"attackTargets": [],
	"damage": 0,
	"moveSpeed": 0,
	"attackSpeed": 0,
	"attackRadius": 0,
	"block": true
},{
	"type": "HUNTER",
	"hp": 1000,
	"price": 250,
	"moveTargets": ["ORK", "TROLL", "CASTLE"],
	"attackTargets": ["ORK", "TROLL", "CASTLE"],
	"damage": 500,
	"moveSpeed": 2,
	"attackSpeed": 2,
	"attackRadius": 2,
	"block": false
},{
	"type": "BLOCK",
	"hp": 10000,
	"price": 0,
	"moveTargets": false,
	"attackTargets": false,
	"damage": 0,
	"moveSpeed": 0,
	"attackSpeed": 0,
	"attackRadius": 0,
	"block": true
},{
	"type": "TROLL",
	"hp": 10000,
	"price": 500,
	"moveTargets": ["TOWER","WALL","ST"],
	"attackTargets": ["TOWER","WALL","ST"],
	"damage": 200,
	"moveSpeed": 1,
	"attackSpeed": 2,
	"attackRadius": 2,
	"block": false
},{
	"type": "WALLKILLER",
	"hp": 3000,
	"price": 200,
	"moveTargets": ["WALL"],
	"attackTargets": ["WALL"],
	"damage": 75,
	"moveSpeed": 1,
	"attackSpeed": 2,
	"attackRadius": 2,
	"block": false
}];