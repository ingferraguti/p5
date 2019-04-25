
const app = require('../../../app.js');
const db_RapiDevKit_db = require('../../../db/RapiDevKit_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Item
 * 
	{
		Active: {
			type: 'Boolean', 
			required : true
		},
		Created: {
			type: 'Integer'
		},
		Data: {
			type: 'String'
		},
		Modified: {
			type: 'Integer'
		},
		Order: {
			type: 'Integer'
		},
		Protected: {
			type: 'Boolean'
		},
		Status: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		Creator: {
			type: Schema.ObjectId,
			ref : "Item"
		},
		Link: {
			type: Schema.ObjectId,
			ref : "Item"
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


