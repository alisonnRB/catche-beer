import { NextResponse } from 'next/server';
import { getStoreStatus } from '../../../script/hour';

export async function GET() {
  const isStoreOpen = getStoreStatus();
  return NextResponse.json({ isStoreOpen });
}