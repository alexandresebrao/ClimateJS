const capitalize = function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
};

export default function(name) {
  const nameArray = name.split(","), cityname = capitalize(nameArray[0]);

  return cityname + ", " + nameArray[1].toUpperCase();
};