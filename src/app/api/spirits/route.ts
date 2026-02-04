import { Spirit } from '@entities/spirit';
import { NextResponse } from 'next/server';
import { spiritsMock } from './_mock';

export async function GET(): Promise<NextResponse<Spirit[]>> {
	return NextResponse.json(spiritsMock);
}
