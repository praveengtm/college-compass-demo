const colleges = require('../../data/colleges.json');

function filterColleges(query) {
  let results = colleges;
  results = results.filter(c => c.course === query.course && c.fees <= query.maxFee && c.name.includes(query.keyword));  return results;
}

module.exports = { filterColleges };
