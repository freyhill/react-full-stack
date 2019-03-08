/********************
 * @file: http封装
 * @author: leinov
 * @date: 2019-03-03
 ********************/
import axios from 'axios';
export default class http {
    static request({ method = "get", url = "", data = {} }) {
        return new Promise((resolve, reject) => {
            axios.request({ method: method, url: url, data: data }).then((data) => {
                if (data.status === 200) {
                    resolve(data.data);
                } else {
                    reject("error")
                }
            })
        })
    }
}