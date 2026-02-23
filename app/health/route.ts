import { NextResponse } from 'next/server';

export async function GET() {
    return new NextResponse('OK', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
    });
}

export async function HEAD() {
    return new NextResponse(null, { status: 200 });
}
