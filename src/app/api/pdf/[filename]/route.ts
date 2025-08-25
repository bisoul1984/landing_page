import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = decodeURIComponent(params.filename);
    const filePath = join(process.cwd(), 'public', 'image', filename);
    
    // Read the PDF file
    const fileBuffer = readFileSync(filePath);
    
    // Return the PDF with headers to force inline display
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="' + filename + '"',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('PDF not found', { status: 404 });
  }
}
