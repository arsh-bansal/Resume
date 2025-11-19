# Images Directory

This directory contains all images for the portfolio website.

## Directory Structure

```
public/images/
├── og-image.jpg          # OG image for social sharing (1200x630px)
├── developer.jpg         # Developer portrait image
└── projects/
    ├── gnosis.png        # Image for Gnosis project
    ├── skilltree.png     # Image for Skilltree project
    ├── santorini.png     # Image for Santorini project
    └── unexp.png         # Image for UNEXP project
```

## Image Requirements

### OG Image (Open Graph) - `/images/og-image.jpg`
- **Size**: 1200x630px (recommended for social sharing)
- **Format**: JPG or PNG
- **Purpose**: Appears when sharing the website link on social media (Facebook, Twitter, LinkedIn, etc.)
- **Location**: `/images/og-image.jpg`
- **Note**: This image should include your name, title, and be visually appealing for social previews

### Developer Image - `/images/developer.jpg`
- **Size**: 800x800px or larger (square recommended)
- **Format**: JPG or PNG
- **Purpose**: Your professional portrait displayed on the Hero and About sections
- **Location**: `/images/developer.jpg`
- **Note**: This should be a professional headshot/portrait

### Project Images
- **Size**: 1200x800px or larger (landscape recommended)
- **Format**: JPG or PNG
- **Purpose**: Featured image on project cards and detail pages
- **Location**: `/images/projects/{slug}.png`
  - Example: `/images/projects/gnosis.png`

## Projects

1. **Gnosis** (`gnosis`) - `/images/projects/gnosis.png`
2. **Skilltree** (`skilltree`) - `/images/projects/skilltree.png`
3. **Santorini Board Game** (`santorini`) - `/images/projects/santorini.png`
4. **UNEXP** (`unexp`) - `/images/projects/unexp.png`

## Adding Images

1. Place your images in the appropriate directories:
   - OG image: `public/images/og-image.jpg`
   - Developer image: `public/images/developer.jpg`
   - Project images: `public/images/projects/{slug}.png`
2. Images will be automatically optimized by Next.js Image component
3. Update `data/portfolio.ts` if you need to change project image paths

## Social Sharing

When you share your portfolio link on social media platforms, the OG image (`og-image.jpg`) will automatically appear as the preview image. Make sure it's:
- High quality (1200x630px)
- Includes your name and title
- Visually appealing and professional
- Represents your brand/portfolio
