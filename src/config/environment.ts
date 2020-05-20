const { NODE_ENV, HTTP_HOST, HTTP_PORT } = process.env;

export const env = NODE_ENV || 'development';
export const httpHost = HTTP_HOST || '127.0.0.1';
export const httpPort = parseInt(HTTP_PORT || '3000', 10);