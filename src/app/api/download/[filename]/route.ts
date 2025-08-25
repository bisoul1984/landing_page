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
    
    // Read the file
    const fileBuffer = readFileSync(filePath);
    
    // Determine content type based on file extension
    const isPdf = filename.toLowerCase().endsWith('.pdf');
    const isImage = filename.toLowerCase().match(/\.(png|jpg|jpeg|gif|webp)$/);
    
    let contentType = 'application/octet-stream';
    if (isPdf) {
      contentType = 'application/pdf';
    } else if (isImage) {
      const ext = filename.toLowerCase().split('.').pop();
      contentType = `image/${ext}`;
    }
    
    // Return the file with download headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving file:', error);
    return new NextResponse('File not found', { status: 404 });
  }
}
