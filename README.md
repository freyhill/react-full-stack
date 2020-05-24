# version-1.2-redux-thunk

## install json-server

json-server 可以模拟接口请求，
```
npm install -g json-server
```

创建一个json文件
```
cd api

touch data.json
```

data.json
```
{
  "userInfo": {
    "name": "leinov2"
  },
  "student": [
    {
      "name": "leinov2",
      "id": 12
    },
    {
      "name": "hahah",
      "id": 13
    },
    {
      "name": "hahah",
      "id": 14
    },
    {
      "name": "leinov2",
      "id": 15
    }
  ]
}
```

start server
```
json-server --watch data.json
```
and visted ```localhost:3000/student```
