const env = process.env.NODE_ENV;
let config = {
    BASE_URL: ''
}
if (env === 'development') {
    config.BASE_URL = 'http://localhost:3000';
} else if (env === 'production') {
    config.BASE_URL = 'http://localhost:9003';
}else {
    config.BASE_URL = ''
}

export {
    config
};