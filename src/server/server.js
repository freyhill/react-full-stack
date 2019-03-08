/********************
 * @file: 电影数据后端接口
 * @desc: 数据增删改查
 * @author: leinov
 * @date: 2019-03-03
 ********************/

var express = require('express');
var bodyParser = require('body-parser');
var moment = require("moment");
var app = express();
var file = require("./file.js");
var filePath = __dirname + '/data.json';
var crypto = require("crypto");
moment.locale('zh-cn');
app.use(bodyParser.json());
// 生成id
function sign(id,type){
	const hash = crypto.createHash(type);
	hash.update(id);
	const rsign = hash.digest("hex"); // hex 16进制 32位
	return rsign;
}

// 获取数据
app.get('/api/getdata', function (req, res) {
    file.readFile(filePath).then((data) => {
        res.send(data.toString());
    })
});

// 添加数据
app.post('/api/add', function (req, res) {
    var postData = req.body;
    file.readFile(filePath).then((data) => {
        var data = JSON.parse(data.toString());
        postData.id = sign(moment().format('MMMM Do YYYY, h:mm:ss a'),"md5")
        postData.time = moment().format('LLL');
        data.push(postData);
        file.writeFile(filePath, postData, data, res)
    })
});

//修改数据
app.put('/api/alter', function (req, res) {
    var alterData = req.body;
    file.readFile(filePath).then((data) => {
        var data = JSON.parse(data.toString());
        var newData = data.map((item) => {
            if (item.id === alterData.id) {
                item.title = alterData.title;
                alterData.time = item.time;
            }
            return item;
        })
        file.writeFile(filePath, alterData, newData,res)
    })

})

// 删除数据
app.delete('/api/delete', function (req, res) {
    var deleteData = req.body;
    file.readFile(filePath).then((data) => {
        var data = JSON.parse(data.toString());
        var newData = data.filter((item) => {
            return item.id != deleteData.id;
        })
        file.writeFile(filePath, newData, newData, res)
    })

})

// 监听端口，启动程序
app.listen(9003, function () {
    console.log(`server listening on port 9003`);
});












