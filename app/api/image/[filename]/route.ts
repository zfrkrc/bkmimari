import { NextRequest, NextResponse } from 'next/server';
import minioClient from '@/lib/minio';
import { Readable } from 'stream';

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ filename: string }> }
) {
    const { filename } = await context.params;
    const bucket = process.env.MINIO_BUCKET || 'bkmimari';

    try {
        const dataStream = await minioClient.getObject(bucket, filename);

        // Convert Node.js Readable to Web ReadableStream (Next.js expectation)
        const webStream = Readable.toWeb(dataStream);

        return new NextResponse(webStream as any, {
            headers: {
                'Content-Type': getContentType(filename),
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error: any) {
        console.error(`Error proxying ${filename} from MinIO:`, error.message);
        return new NextResponse(`Error: ${error.message}`, { status: error.code === 'NoSuchKey' ? 404 : 500 });
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
