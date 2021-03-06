var request = require('request');

const chalk  = require('chalk');

// var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
var urlRoot = "https://api.github.ncsu.edu";

var config = {};
// Retrieve our api token from the environment variables.
config.token = process.env.GITHUBTOKEN;

if( !config.token )
{
	console.log(chalk`{red.bold GITHUBTOKEN is not defined!}`);
	console.log(`Please set your environment variables with appropriate token.`);
	console.log(chalk`{italic You may need to refresh your shell in order for your changes to take place.}`);
	process.exit(1);
}

console.log(chalk.green(`Your token is: ${config.token.substring(0,4)}...`));


if (process.env.NODE_ENV != 'test')
{
	(async () => {
		await listAuthenicatedUserRepos();
		await listBranches("skundal", "HW1-CS510");
		await createRepo("skundal","newtestrepo");
		await createIssue("skundal", "HW1-CS510", "Test Issue");
		await enableWikiSupport("skundal","HW1-CS510");

	})()
}

function getDefaultOptions(endpoint, method)
{
	var options = {
		url: urlRoot + endpoint,
		method: method,
		headers: {
			"User-Agent": "CSC510-REST-WORKSHOP",
			"content-type": "application/json",
			"Authorization": `token ${config.token}`
		}
	};
	return options;
}

async function getUser()
{
	let options = getDefaultOptions("/user", "GET");

	// Send a http request to url and specify a callback that will be called upon its return.
	return new Promise(function(resolve, reject)
	{
		request(options, function (error, response, body) {

			resolve( JSON.parse(body).login );
		});
	});
}

function listAuthenicatedUserRepos()
{
	let options = getDefaultOptions("/user/repos?visibility=all", "GET");

	// Send a http request to url and specify a callback that will be called upon its return.
	return new Promise(function(resolve, reject)
	{
		request(options, function (error, response, body) 
		{
			if( error )
			{
				console.log( chalk.red( error ));
				reject(error);
				return; // Terminate execution.
			}

			var obj = JSON.parse(body);
			for( var i = 0; i < obj.length; i++ )
			{
				var name = obj[i].name;
				console.log( name );
			}

			// Return object for people calling our method.
			resolve( obj );
		});
	});

}

// 1. Write code for listBranches in a given repo under an owner. See list branches
function listBranches(owner,repo)
{
	// GET /repos/:owner/:repo/branches
	var cmd = "/repos/"+owner+"/"+repo+"/branches"
	let options = getDefaultOptions(cmd, "GET");

	// Send a http request to url and specify a callback that will be called upon its return.
	return new Promise(function(resolve, reject)
	{
		request(options, function (error, response, body) {

			// console.debug( options );
			if( error )
                        {
                                console.log( chalk.red( error ));
                                reject(error);
                                return; // Terminate execution.
                        }
			var obj=JSON.parse(body);
			console.log(obj)
			resolve(obj);

		});
	});
}

// 2. Write code to create a new repo
async function createRepo(owner,repo)
{

	let options = getDefaultOptions("/user/repos", "POST");
	let repo_config = {
		"name": repo,
		"description": "Repository created using REST API",
		"private": false,
  		"has_issues": true,
  		"has_projects": true,
		"has_wiki": true
	};
	options.body = JSON.stringify(repo_config);


	// Send a http request to url and specify a callback that will be called upon its return.
	return new Promise(function(resolve, reject)
	{
		request(options, function (error, response, body) {
			if (error) {
				console.log(chalk.red(error));
				reject(error);
				return;//Terminate execution
			}
			resolve( response.statusCode );
		});
	});

}
// 3. Write code for creating an issue for an existing repo.
async function createIssue(owner,repo, issueName, issueBody)
{
	let options = getDefaultOptions("/repos/" + owner + "/" + repo + "/issues", "POST");
	let issue_data = {
		"title": "Testing issue creation - REST API",
		"body": "Testing the issue creation using REST API"
	};
	options.body = JSON.stringify(issue_data);

	// Send a http request to url and specify a callback that will be called upon its return.
	return new Promise(function(resolve, reject)
	{
		request(options, function (error, response, body) {
			if (error) {
				console.log(chalk.red(error));
				//conole.log("error");
				reject(error);
				return;//Terminate execution
			}
			resolve( response.statusCode );
		});
	});
}

// 4. Write code for editing a repo to enable wiki support.
async function enableWikiSupport(owner,repo)
{
	let options = getDefaultOptions("/repos/" + owner + "/" + repo, "PATCH");
	let wiki_data = {
		"name": repo,
		"has_wiki": "true"
	};
	options.body = JSON.stringify(wiki_data);
	// Send a http request to url and specify a callback that will be called upon its return.
	return new Promise(function(resolve, reject)
	{
		request(options, function (error, response, body) {
			if (error) {
				console.log(chalk.red(error));
				//conole.log("error");
				reject(error);
				return;//Terminate execution
			}
				var obj=JSON.parse(body);
	                        console.log(obj)
        	                resolve(obj);
		});
	});	
}

module.exports.getUser = getUser;
module.exports.listAuthenicatedUserRepos = listAuthenicatedUserRepos;
module.exports.listBranches = listBranches;
module.exports.createRepo = createRepo;
module.exports.createIssue = createIssue;
module.exports.enableWikiSupport = enableWikiSupport;


