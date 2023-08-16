import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { type: string } }) {
    return NextResponse.json({ date: 'Blog List', type: params.type }, { status: 200 })
}
