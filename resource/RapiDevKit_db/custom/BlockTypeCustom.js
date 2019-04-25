
const app = require('../../../app.js');
const db_RapiDevKit_db = require('../../../db/RapiDevKit_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB BlockType
 * 
	{
		Code: {
			type: 'String'
		},
		Name: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		BlockType: {
			type: Schema.ObjectId, 
			required : true,
			ref : "Block"
		},
		ItemType: {
			type: Schema.ObjectId, 
			required : true,
			ref : "BlockType"
		},
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


