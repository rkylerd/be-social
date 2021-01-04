const NODE_ENV = process.env.NODE_ENV || 'development';
const { localApi, externalApi } = require(`./${NODE_ENV}`);

export {
    localApi,
    externalApi
}