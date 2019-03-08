/********************
 * @file: 文件读写
 * @author: leinov
 * @date: 2019-03-03
 ********************/
const fs = require("fs");
module.exports.readFile = function (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                return console.error(err);
            }
            resolve(data)
        });
    })
}
module.exports.writeFile = function (path, alertData,data,res) {
    fs.writeFile(path, JSON.stringify(data), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        res.send(JSON.stringify(alertData));
    });
}

