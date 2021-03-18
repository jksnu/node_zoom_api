const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'sLYP34EXQ7SDS-PueWck_w',
		APISecret : 'bxAQCsho7DpnFj9OliNoPyDjbEts5tDPKYfu'
	},
	production:{	
		APIKey : 'sLYP34EXQ7SDS-PueWck_w',
		APISecret : 'bxAQCsho7DpnFj9OliNoPyDjbEts5tDPKYfu'
	}
};

module.exports = config[env]
