const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'YOUR_APIKEY',
		APISecret : 'YOUR_APISECRET_KEY'
	},
	production:{	
		APIKey : 'YOUR_APIKEY',
		APISecret : 'YOUR_APISECRET_KEY'
	}
};

module.exports = config[env]
