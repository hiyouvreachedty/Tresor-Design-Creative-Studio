# Image Naming Guide

## Rules
- All image folders use `kebab-case`
- All image filenames use `kebab-case`
- Never use spaces, underscores, or camera-style names (IMG_001.jpg)
- Format: `.jpg` for photos, `.png` for logos/icons with transparency, `.svg` for vectors

## Folder Structure
```
public/images/
  projects/
    {project-slug}/
      cover.jpg            # Primary hero/cover image
      thumbnail.jpg        # Small card thumbnail
      homepage-desktop.jpg
      homepage-mobile.jpg
      gallery-01.jpg
      gallery-02.jpg
  brand/
    logos/
    marks/
    social-previews/
  portraits/
  services/
```

## Project Slugs
- `tierra-immigration`
- `punktured-art`
- `tresor-design`

## Upload Checklist
- [ ] File is under 5MB (optimize before upload)
- [ ] Filename is semantic and kebab-case
- [ ] Image is placed in the correct project subfolder
- [ ] Image path is referenced correctly in `src/content/projects/index.ts`
