import { NextRequest, NextResponse } from 'next/server';
import minioClient from '@/lib/minio';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ filename: string }> }
) {
    const { filename } = await params;
    const bucket = process.env.MINIO_BUCKET || 'bkmimari';

    try {
        const dataStream = await minioClient.getObject(bucket, filename);

        // Convert readable stream to a format Next.js can return
        // We can use the native ReadableStream
        const stream = new ReadableStream({
            async start(controller) {
                dataStream.on('data', (chunk) => controller.enqueue(chunk));
                dataStream.on('end', () => controller.close());
                dataStream.on('error', (err) => controller.error(err));
            },
        });

        return new NextResponse(stream, {
            headers: {
                'Content-Type': getContentType(filename),
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error(`Error fetching image ${filename} from MinIO:`, error);
        return new NextResponse('Image not found', { status: 404 });
    }
}

function getContentType(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
        case 'webp': return 'image/webp';
        case 'jpg':
        case 'jpeg': return 'image/jpeg';
        case 'png': return 'image/png';
        case 'gif': return 'image/gif';
        case 'svg': return 'image/svg+xml';
        default: return 'application/octet-stream';
    }
}
