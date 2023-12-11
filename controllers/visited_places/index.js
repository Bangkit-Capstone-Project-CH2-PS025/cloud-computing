const create = require("./create");
const destroy = require("./destroy");
const getAll = require("./getAll");
const getOne = require("./getOne");
const update = require("./update");
const countByCity = require("./countByCity");
const countByCountry = require("./countByCountry");

module.exports = {
  create,
  getAll,
  getOne,
  countByCity,
  countByCountry,
  destroy,
  update,
};
