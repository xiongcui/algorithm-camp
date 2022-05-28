let padStart = (maxLength, string) => {
  let str = this;
  if (str.length >= maxLength) {
    return str;
  } else {
    let strLength = maxLength - str.length,
      num = Math.ceil(strLength / string.length);
    while (num >= 1) {
      string += string;
    }
    return String(string.slice(0, strLength) + str);
  }
};
console.time("xc的代码");
for (let i = 0; i < 10000; i++) console.log("hahahh".padStart(10000, "0"));
console.timeEnd("xc的代码");
