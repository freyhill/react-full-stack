/********************
 * @file: http封装
 * @author: leinov
 * @date: 2019-03-03
 ********************/
import axios from 'axios';
import config from '../config';
export default class http {
    static request({ method = "get", url = "", data = {} }) {
        url = config.host + url;
        console.log(url);
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