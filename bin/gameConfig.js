
module.exports = [{
	"type": "CASTLE",
	"hp": 100000,
	"price": 1000,
	"moveTargets": false,
	"attackTargets": ["ORK", "HUNTER"],
	"damage": 100,
	"moveSpeed": 0,
	"attackSpeed": 1,
	"attackRadius": 4,
	"block": true,
	"spawnInterval": 30
}, {
	"type": "ORK",
	"hp": 1000,
	"price": 100,
	"moveTargets": ["TOWER","CASTLE", "HUNTER","ORK"],
	"attackTargets": ["TOWER","CASTLE", "HUNTER","WALL","ORK"],
	"damage": 100,
	"moveSpeed": 1,
	"attackSpeed": 1,
	"attackRadius": 2,
	"block": false
}, {
	"type": "TOWER",
	"hp": 1000,
	"price": 9,
	"moveTargets": false,
	"attackTargets": ["CASTLE", "ORK","HUNTER"],
	"damage": 100,
	"moveSpeed": 1,
	"attackSpeed": 1,
	"attackRadius": 4,
	"block": true
},{
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
	"hp": 1000,
	"price": 100,
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
	"price": 100,
	"moveTargets": ["ORK"],
	"attackTargets": ["ORK"],
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
}];