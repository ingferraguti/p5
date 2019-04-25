
const app = require('../../../app.js');
const db_RapiDevKit_db = require('../../../db/RapiDevKit_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB User
 * 
	{
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
		
		
		//EXTERNAL RELATIONS
		
		Creator: {
			type: Schema.ObjectId,
			ref : "Item"
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
 * Service.changePassword
 *	@description Change password of user from admin
 *	@returns object
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



/**
 * UserService.edit
 *   @description Save user
 *   @returns object
 *
 */
app.post(properties.api + '/Users/:id', function (req, res) {
	let user = req.body;
	delete user.password;

	db_RapiDevKit_db.User.findByIdAndUpdate(req.params.id, user, {
		'new': true
	}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * UserService.changePassword
 *   @description Change password of user from admin
 *   @returns object
 *
 */
app['post'](properties.api + '/Users/:id/changePassword', function (req, res) {

	db_RapiDevKit_db.User.findOne({
		username: req.user.username,
		password: req.body.passwordAdmin
	}).exec(function (err, user) {
		if (err) return handleError(err, res);
		if (!user) return handleError("Admin password not valid", res);

		db_RapiDevKit_db.User.findByIdAndUpdate(req.params.id, {
			password: req.body.passwordNew
		}, {
			'new': true
		}, function (err, obj) {
			if (err) return handleError(err, res);
			res.send({
				success: true
			});
		});

	});
});



/**
 * UserService.changePassword
 *   @description Change password of user from admin
 *   @returns object
 *
 */
app['post'](properties.api + '/Users/:id/changePassword', function(req, res){
	res.send([]);
});
			
