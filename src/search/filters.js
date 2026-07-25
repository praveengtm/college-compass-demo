const colleges = require('../../data/colleges.json');

function filterColleges(query) {
  let results = colleges;
  results = results.filter(c => c.course === query.course);
  return results;
}

module.exports = { filterColleges };
