var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "<< TOKEN GOES HERE  >>";
var userId = "scyadav";

//The repository that is created and all remaining functions are called upon it.
var repo = "scyadav-Hello-World";

var urlRoot = "https://github.ncsu.edu/api/v3";
// NCSU Enterprise endpoint


//Function 1:
listBranches(userId, "HW0")
// "HW0" is an already created repository in my github account.

//Function 2: 
createRepo()

//Function 3: 
createIssue(userId, repo)

//Function 4: 
editRepo(userId, repo)

//Function 5: 
listReactions(userId, repo, "1")

//Add the reactions to the added issue manually. 
//The function then lists the reactions or else will output []
//i.e. no reactions


function listBranches(owner,repo)
{
	var options = {
		url: urlRoot + '/repos/' + owner + "/" + repo +"/branches",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
}

function createRepo()
{
var options = {
		url: urlRoot + "/user/repos",
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			  "name": repo,
			  "description": "This is scyadav demo repository",
			  "homepage": "https://github.com",
			  "private": false,
			  "has_issues": true,
			  "has_projects": true,
			  "has_wiki": true
}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = body;
		console.log( obj );
	});
}  


function createIssue(owner,repo)
{
var options = {
		url: urlRoot + '/repos/' + owner + "/" + repo +"/issues",
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			  "title": "Found a bug",
			  "body": "I'm having a problem with this."
			}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = body;
		console.log( obj );
		
	});
	
}

// The repo is made private and the description is changed
function editRepo(owner,repo)
{
var options = {
		url: urlRoot + '/repos/' + owner + "/" + repo,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
 			 "name": repo,
  		       	 "description": "This is scyadav demo HW1 repository",
  		       	 "homepage": "https://github.com",
  		         "private": true
  		       }
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = body;
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
	
}


function listReactions(owner, repo, number)
{
var options = {
		url: urlRoot + "/repos/" + owner + "/" + repo + "/issues/" + number + "/reactions",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			"Accept": "application/vnd.github.squirrel-girl-preview"
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		for( var i = 0; i < obj.length; i++ )
		{
			var content = obj[i].content;
			console.log( content );
		}
		
	});
	
}