/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/RapiDevKit_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_RapiDevKit_db_schema = [];
const db_RapiDevKit_db = [];

/**
 * SCHEMA DB RapiDevKit_db
 */



 /**
  * Block
  */
db_RapiDevKit_db_schema.Block = new mongoose.Schema({
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
	BlockType: {
		type: Schema.ObjectId, 
		required : true,
		ref : "BlockType"
	},
	Privileges: {
		type: Schema.ObjectId,
		ref : "Role"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * BlockType
  */
db_RapiDevKit_db_schema.BlockType = new mongoose.Schema({
	Code: {
		type: 'String'
	},
	Name: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	ItemType: {
		type: Schema.ObjectId, 
		required : true,
		ref : "ItemType"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	BlockType: {
		type: Schema.ObjectId, 
		required : true,
		ref : "Block"
	},
	*/
});


 /**
  * Item
  */
db_RapiDevKit_db_schema.Item = new mongoose.Schema({
	Active: {
		type: 'Boolean', 
		required : true
	},
	Created: {
		type: 'Number'
	},
	Data: {
		type: 'String'
	},
	Modified: {
		type: 'Number'
	},
	Order: {
		type: 'Number'
	},
	Protected: {
		type: 'Boolean'
	},
	Status: {
		type: 'String'
	},
	//RELATIONS
	Creator: {
		type: Schema.ObjectId,
		ref : "User"
	},
	Link: {
		type: Schema.ObjectId,
		ref : "Item"
	},
	Type: {
		type: Schema.ObjectId, 
		required : true,
		ref : "ItemType"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * ItemType
  */
db_RapiDevKit_db_schema.ItemType = new mongoose.Schema({
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
	/*
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
	*/
});


 /**
  * Role
  */
db_RapiDevKit_db_schema.Role = new mongoose.Schema({
	Name: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	Privileges: {
		type: Schema.ObjectId,
		ref : "Block"
	},
	RolePrivileges: {
		type: Schema.ObjectId,
		ref : "User"
	},
	*/
});


 /**
  * User
  */
db_RapiDevKit_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	role: {
		type: 'String', 
		required : true
	},
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	RolePrivileges: {
		type: Schema.ObjectId,
		ref : "Role"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	Creator: {
		type: Schema.ObjectId,
		ref : "Item"
	},
	*/
});



// Import schema customization
require('./RapiDevKit_db_customSchema.js');
var RapiDevKit_db_model = require('./RapiDevKit_db_crud.js');

// Declare mongoose model

db_RapiDevKit_db.Block = RapiDevKit_db_model.connection.model('Block', db_RapiDevKit_db_schema.Block );
db_RapiDevKit_db.BlockType = RapiDevKit_db_model.connection.model('BlockType', db_RapiDevKit_db_schema.BlockType );
db_RapiDevKit_db.Item = RapiDevKit_db_model.connection.model('Item', db_RapiDevKit_db_schema.Item );
db_RapiDevKit_db.ItemType = RapiDevKit_db_model.connection.model('ItemType', db_RapiDevKit_db_schema.ItemType );
db_RapiDevKit_db.Role = RapiDevKit_db_model.connection.model('Role', db_RapiDevKit_db_schema.Role );
db_RapiDevKit_db.User = RapiDevKit_db_model.connection.model('User', db_RapiDevKit_db_schema.User );

module.exports = db_RapiDevKit_db;

// Create ADMIN user if does not exist
createUser.createUser();
