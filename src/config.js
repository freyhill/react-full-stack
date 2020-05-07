const env = process.env.NODE_ENV;
let config = {}
if (env === 'development') {
    config.host = '';
} else if (env === 'production') {
    config.host = 'http://localhost:9003';
}else {
    config.host = ''
}

export default config;