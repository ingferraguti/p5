
const app = require('../../../app.js');
const db_RapiDevKit_db = require('../../../db/RapiDevKit_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Block
 * 
	{
		Actyve: {
			type: 'Boolean', 
			required : true
		},
		FontendAPIHook: {
			type: 'String'
		},
		Settings: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		BlockType: {
			type: Schema.ObjectId, 
			required : true,
			ref : "Block"
		},
		Privileges: {
			type: Schema.ObjectId,
			ref : "Block"
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


