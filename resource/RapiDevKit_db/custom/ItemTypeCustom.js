
const app = require('../../../app.js');
const db_RapiDevKit_db = require('../../../db/RapiDevKit_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB ItemType
 * 
	{
		Name: {
			type: 'String'
		},
		Schema: {
			type: 'String'
		},
		Validation: {
			type: 'String'
		},
		Visualization: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		ItemType: {
			type: Schema.ObjectId, 
			required : true,
			ref : "BlockType"
		},
		Type: {
			type: Schema.ObjectId, 
			required : true,
			ref : "Item"
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


