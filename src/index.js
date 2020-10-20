module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.map(element => element.join(""));
    regStr = ""
    bracketsConfig.forEach(element => {
		if (isNaN(Number(element))) {
            regStr += '\\' + element[0] + '\\' + element[1] + "|";
        } else {
            regStr += element[0] + element[1] + "|";
        }
    })
    reg = new RegExp(regStr.slice(0, -1));
    while (reg.test(str)) {
        str = str.replace(reg, '');
    }
    if (str == "") {
        return true;
    } else {
        return false;
    }
}
