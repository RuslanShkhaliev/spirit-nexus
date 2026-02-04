import { MOCKS_CONFIG } from '@config/mocks';
import { SpiritStatus } from '@entities/spirit';
import { NextResponse } from 'next/server';
import { spiritsMapMock } from '../_mock';

export async function POST(
	_: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const spiritId = (await params).id;
	const spirit = spiritsMapMock.get(Number(spiritId));

	if (!spirit) {
		return NextResponse.json(
			{ message: 'Spirit not found' },
			{ status: 404 },
		);
	}

	const shouldFail = Math.random() < MOCKS_CONFIG.API_ERROR_RATE;

	if (shouldFail) {
		return NextResponse.json(
			{ message: 'Capture failed' },
			{ status: 500 },
		);
	}

	spirit.status = SpiritStatus.CAPTURED;

	return NextResponse.json(spirit);
}
