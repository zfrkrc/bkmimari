import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id');
    if (!id || !/^GTM-[A-Z0-9]+$/.test(id)) {
        return new NextResponse('Invalid GTM id', { status: 400 });
    }
    try {
        const res = await fetch(`https://www.googletagmanager.com/gtm.js?id=${id}`, {
            headers: { 'User-Agent': request.headers.get('user-agent') || '' },
        });
        if (!res.ok) {
            return new NextResponse('GTM fetch failed', { status: res.status });
        }
        const body = await res.text();
        return new NextResponse(body, {
            headers: {
                'Content-Type': 'application/javascript; charset=utf-8',
                'Cache-Control': 'public, max-age=300, s-maxage=300',
            },
        });
    } catch (error: any) {
        console.error('Error proxying GTM:', error?.message);
        return new NextResponse(`Error: ${error?.message}`, { status: 500 });
    }
}
