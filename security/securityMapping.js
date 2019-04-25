/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/blocks/*$' : [],
	'DELETE - /api/blocks/([^/])+$' : [],
	'GET - /api/blocks/findByActyve/([^/])+$' : [],
	'GET - /api/blocks/findByBlockType/([^/])+$' : [],
	'GET - /api/blocks/findByFontendAPIHook/([^/])+$' : [],
	'GET - /api/blocks/([^/])+$' : [],
	'GET - /api/blocks/([^/])+/getBlockType$' : [],
	'GET - /api/blocks/*$' : [],
	'POST - /api/blocks/([^/])+$' : [],
	'POST - /api/blocktypes/*$' : [],
	'DELETE - /api/blocktypes/([^/])+$' : [],
	'GET - /api/blocktypes/findByName/([^/])+$' : [],
	'GET - /api/blocktypes/([^/])+$' : [],
	'GET - /api/blocktypes/([^/])+/getItemType$' : [],
	'GET - /api/blocktypes/*$' : [],
	'POST - /api/blocktypes/([^/])+$' : [],
	'POST - /api/items/*$' : [],
	'DELETE - /api/items/([^/])+$' : [],
	'GET - /api/items/findByActive/([^/])+$' : [],
	'GET - /api/items/findByCreated/([^/])+$' : [],
	'GET - /api/items/findByCreator/([^/])+$' : [],
	'GET - /api/items/findByProtected/([^/])+$' : [],
	'GET - /api/items/findByType/([^/])+$' : [],
	'GET - /api/items/([^/])+$' : [],
	'GET - /api/items/([^/])+/getLink$' : [],
	'GET - /api/items/*$' : [],
	'POST - /api/items/([^/])+$' : [],
	'POST - /api/types/*$' : [],
	'DELETE - /api/types/([^/])+$' : [],
	'GET - /api/types/findByName/([^/])+$' : [],
	'GET - /api/types/([^/])+$' : [],
	'GET - /api/types/*$' : [],
	'POST - /api/types/([^/])+$' : [],
	'POST - /api/roles/*$' : [],
	'DELETE - /api/roles/([^/])+$' : [],
	'GET - /api/roles/([^/])+$' : [],
	'GET - /api/roles/*$' : [],
	'POST - /api/roles/([^/])+$' : [],
	'POST - /api/Users/([^/])+/changePassword$' : ["ADMIN"],
	'POST - /api/Users/*$' : [],
	'DELETE - /api/Users/([^/])+$' : [],
	'GET - /api/Users/findByRolePrivileges/([^/])+$' : [],
	'GET - /api/Users/findBymail/([^/])+$' : [],
	'GET - /api/Users/([^/])+$' : [],
	'GET - /api/Users/*$' : [],
	'POST - /api/Users/([^/])+$' : [],
	

}
