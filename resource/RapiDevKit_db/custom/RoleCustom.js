
const app = require('../../../app.js');
const db_RapiDevKit_db = require('../../../db/RapiDevKit_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Role
 * 
	{
		Name: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		Privileges: {
			type: Schema.ObjectId,
			ref : "Block"
		},
		RolePrivileges: {
			type: Schema.ObjectId,
			ref : "User"
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


