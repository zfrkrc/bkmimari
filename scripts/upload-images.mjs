import * as Minio from 'minio';
import fs from 'fs';
import path from 'path';

// Use environment variables or fallbacks
const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_RAW_ENDPOINT || '172.16.16.90',
    port: parseInt(process.env.MINIO_PORT || '6000'),
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
    secretKey: process.env.MINIO_SECRET_KEY || '818wlxjncI6J80'
});

const bucketName = process.env.MINIO_BUCKET || 'bkmimari';
const imagesDir = './public/assets/images';

async function uploadImages() {
    console.log('--- MinIO Sync Started ---');
    try {
        if (!fs.existsSync(imagesDir)) {
            console.log('No local images found to upload.');
            return;
        }

        const exists = await minioClient.bucketExists(bucketName);
        if (!exists) {
            await minioClient.makeBucket(bucketName, 'us-east-1');
            console.log(`Bucket ${bucketName} created.`);

            const policy = {
                Version: "2012-10-17",
                Statement: [
                    {
                        Effect: "Allow",
                        Principal: { AWS: ["*"] },
                        Action: ["s3:GetBucketLocation", "s3:ListBucket"],
                        Resource: [`arn:aws:s3:::${bucketName}`]
                    },
                    {
                        Effect: "Allow",
                        Principal: { AWS: ["*"] },
                        Action: ["s3:GetObject"],
                        Resource: [`arn:aws:s3:::${bucketName}/*`]
                    }
                ]
            };
            await minioClient.setBucketPolicy(bucketName, JSON.stringify(policy));
            console.log(`Bucket policy set to public read.`);
        }

        const files = fs.readdirSync(imagesDir);
        for (const file of files) {
            const filePath = path.join(imagesDir, file);
            if (fs.lstatSync(filePath).isFile()) {
                const fileStream = fs.createReadStream(filePath);
                await minioClient.putObject(bucketName, file, fileStream);
                console.log(`Synced: ${file}`);
            }
        }
        console.log('--- MinIO Sync Completed Successfully ---');
    } catch (err) {
        console.error('MinIO Sync Error:', err);
    }
}

uploadImages();
