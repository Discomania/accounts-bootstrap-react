Package.describe({
	summary: 'Bootstrap UI Components for Useraccounts-React',
	version: '1.0.0',
	name: 'meteoreact:accounts-bootstrap-react',
	git: 'https://github.com/Discomania/accounts-bootstrap-react.git'
})

Package.onUse(api => {
	api.versionsFrom('2.9.0')

	api.use('ecmascript')
	api.mainModule('index.js', ['client', 'server'])
})

Npm.depends({
	"bootstrap": '^5.2.3',
	"react-bootstrap": '^2.7.0',
	"react-bootstrap-icons": "^1.10.2",
});