import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { year: string } }) {
    return NextResponse.json({ date: 'Member List', year: params.year }, { status: 200 })
}
