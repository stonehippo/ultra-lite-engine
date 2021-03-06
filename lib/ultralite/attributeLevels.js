const attributeLevels = {
	ST: {
		weak: {
			baseRoll: 8,
			hitPoints: 8,
			basicDamage: "1d6/2"
		},
		normal: {
			baseRoll: 10,
			hitPoints: 10,
			basicDamage: "1d6"
		},
		strong: {
			baseRoll: 14,
			hitPoints: 14,
			basicDamage: "2d6"
		},
		veryStrong: {
			baseRoll: 18,
			hitPoints: 18,
			basicDamage: "3d6"
		}
	},
	DX: {
		clumsy: {
			baseRoll: 8
		},
		normal: {
			baseRoll: 10
		},
		agile: {
			baseRoll: 12
		},
		veryAgile: {
			baseRoll: 14
		},
		extreme: {
			baseRoll: 16
		}
	},
	IQ: {
		dull: {
			baseRoll: 8
		},
		normal: {
			baseRoll: 10
		},
		smart: {
			baseRoll: 12
		},
		verySmart: {
			baseRoll: 14
		},
		genius: {
			baseRoll: 16
		}
	},
	HT:  {
		sickly: {
			baseRoll: 8
		},
		normal: {
			baseRoll: 10
		},
		hardy: {
			baseRoll: 14
		},
		veryHardy: {
			baseRoll: 18
		}
	}
}

export default attributeLevels;
