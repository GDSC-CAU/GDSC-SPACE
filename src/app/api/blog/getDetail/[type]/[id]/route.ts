import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string; type: string } }) {
    return NextResponse.json({ date: 'Blog Detail', id: params.id, type: params.type }, { status: 200 })
}
