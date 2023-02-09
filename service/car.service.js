const jsonfile = require("jsonfile");

const getCarDB = () => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  return data;
};

const getCarOneDB = (id) => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  if (!id) throw "Нет нужного параметра";
  return data[id];
};

const postCarDB = (obj) => {
  let data = jsonfile.readFileSync("./models/car.json", (err, file) => {
    if (error) {
      console.error(error);
      throw error;
    }
  });
  let arr = [...data];
  arr.push(obj);
  // console.log(1,arr)

  jsonfile.writeFile("./models/car.json", (error, file) => {
    if (error) {
      console.error(error);
      throw error;
    }
  });

  return true;
};

const updateCarDB = (id) => {
  let data = jsonfile.readFileSync("./models/car.json", (error, file) => {
    if (error) {
      console.error(1, error);
      throw "1";
    }
  });

  let result = data[id];

  result.name = name;
  result.model = model;
  result.years = years;
  result.name = price;

  return result;
};



module.exports = { getCarDB, getCarOneDB, postCarDB, updateCarDB};
