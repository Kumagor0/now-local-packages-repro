const localDependency = require('local-dependency');

console.log(localDependency());

module.exports = (req, res) => {
  res.send(localDependency());
};
