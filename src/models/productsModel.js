const fs = require('fs');
const funkosJSON = JSON.parse(fs.readFileSync("./src/data/funkos.json","utf-8"))

const getAll = async () => {
  let response = {};
  try {
    response = {
      isError: false,
      data: funkosJSON,
    };

    
  } catch (e) {
    response = {
      isError: true,
      message: `No pudimos recuperar los datos ${e}.`,
    };
  
  } 
  return response;
};

const getItem = async ({product_id}) => {
  let response = {};
  try {
    const item = funkosJSON.filter(item => item.product_id === parseInt(product_id))
    response = {
      isError: false,
      data: item[0],
    };

    
  } catch (e) {
    response = {
      isError: true,
      message: `No pudimos recuperar los datos ${e}.`,
    };
  
  } 
  return response;
};

module.exports = {
  getAll, 
  getItem 
};
