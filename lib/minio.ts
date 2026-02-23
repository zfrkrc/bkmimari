import * as Minio from 'minio';

const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_RAW_ENDPOINT || '172.16.16.90',
    port: parseInt(process.env.MINIO_PORT || '6000'),
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY || '',
    secretKey: process.env.MINIO_SECRET_KEY || '',
});

export default minioClient;
