const dataController = require('./controller/data')

module.exports = function(app){
	app.get('/patient/:patient/:from/:to', dataController.getPatientInTimeRange);

	app.get('/questions', dataController.getQuestions);
}

// Dummy-Daten-Script
// const builder = require('./builder/data_builder')