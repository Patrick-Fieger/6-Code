const fs = require('fs');

// Patienten in gewissem Zeitraum zurücksenden
function getPatientInTimeRange(req,res){
	fs.readFile(__dirname + '/../data/patient_' + req.params.patient + '.json', 'utf8', function(err, contents) {
		const filteredArray = filterArrayByDate(JSON.parse(contents).data,req.params.from,req.params.to);
		res.send(filteredArray).status(200).end();
	});
}

// Fragen zurücksenden
function getQuestions(req,res){
	fs.readFile(__dirname + '/../data/questions.json', 'utf8', function(err, contents) {
		const data = JSON.parse(contents).data;
		
		res.send(data).status(200).end();
	});
}

// Filtern nach Datum
function filterArrayByDate(array,from,to){
	let arr = [];
	for (let index = 0; index < array.length; index++) {
		const date = parseInt(array[index].date.split('/')[0]);
		if(date >= parseInt(from) && date <= parseInt(to)){
			arr.push(array[index]);
		}
	}

	return arr;
}

module.exports = {
	getPatientInTimeRange : getPatientInTimeRange,
	getQuestions : getQuestions
}