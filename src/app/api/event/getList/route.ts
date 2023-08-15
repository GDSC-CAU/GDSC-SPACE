import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    return NextResponse.json({ date: 'Event List' }, { status: 200 })
}
