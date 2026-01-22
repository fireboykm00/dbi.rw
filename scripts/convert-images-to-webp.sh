#!/bin/bash

# Next.js Image Optimization Script (Fedora Optimized)
# Converts all JPG/PNG images to WebP format for better performance

echo "🚀 Starting Next.js Image Optimization on Fedora..."
echo "This script will convert all JPG/PNG images to WebP format"
echo "WebP images are typically 30-50% smaller than JPG/PNG with same quality"
echo ""

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp (libwebp-tools) is not installed."
    echo "Please install it using DNF:"
    echo "  sudo dnf install libwebp-tools"
    exit 1
fi

# Create backup directory
BACKUP_DIR="public/images-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📁 Creating backup of original images in: $BACKUP_DIR"

# Find all JPG and PNG files and convert them to WebP
CONVERTED_COUNT=0
TOTAL_SIZE_BEFORE=0
TOTAL_SIZE_AFTER=0

# Use find with a loop
# Using a while loop with process substitution to keep variable scope
while read -r img; do
    # Skip if file no longer exists or is empty
    [ -e "$img" ] || continue

    # Get file info (GNU stat syntax for Fedora)
    FILE_SIZE_BEFORE=$(stat -c%s "$img")
    FILE_EXT="${img##*.}"
    FILE_NAME_NO_EXT="${img%.*}"
    WEBP_FILE="${FILE_NAME_NO_EXT}.webp"

    # Backup original
    mkdir -p "$(dirname "${BACKUP_DIR}/${img}")"
    cp "$img" "${BACKUP_DIR}/${img}"

    # Convert to WebP with quality 80
    echo "🔄 Converting: $img"
    cwebp -q 80 "$img" -o "$WEBP_FILE" -quiet

    # Get WebP file size
    FILE_SIZE_AFTER=$(stat -c%s "$WEBP_FILE")

    # Calculate savings
    SIZE_REDUCTION=$((FILE_SIZE_BEFORE - FILE_SIZE_AFTER))
    
    # Avoid division by zero
    if [ "$FILE_SIZE_BEFORE" -ne 0 ]; then
        PERCENTAGE_REDUCTION=$((100 * SIZE_REDUCTION / FILE_SIZE_BEFORE))
    else
        PERCENTAGE_REDUCTION=0
    fi

    echo "    Before: $((FILE_SIZE_BEFORE / 1024)) KB"
    echo "    After:  $((FILE_SIZE_AFTER / 1024)) KB"
    echo "    Saved:  ${PERCENTAGE_REDUCTION}% ($((SIZE_REDUCTION / 1024)) KB)"
    echo ""

    # Update totals
    TOTAL_SIZE_BEFORE=$((TOTAL_SIZE_BEFORE + FILE_SIZE_BEFORE))
    TOTAL_SIZE_AFTER=$((TOTAL_SIZE_AFTER + FILE_SIZE_AFTER))
    CONVERTED_COUNT=$((CONVERTED_COUNT + 1))

done < <(find public -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \))

# Calculate overall savings
if [ $CONVERTED_COUNT -gt 0 ]; then
    TOTAL_SAVINGS=$((TOTAL_SIZE_BEFORE - TOTAL_SIZE_AFTER))
    OVERALL_PERCENTAGE=$((100 * TOTAL_SAVINGS / TOTAL_SIZE_BEFORE))

    echo "🎉 Conversion Complete!"
    echo ""
    echo "📊 Summary:"
    echo "    Files converted: $CONVERTED_COUNT"
    echo "    Total size before: $((TOTAL_SIZE_BEFORE / 1024)) KB"
    echo "    Total size after:  $((TOTAL_SIZE_AFTER / 1024)) KB"
    echo "    Total savings:      ${OVERALL_PERCENTAGE}% ($((TOTAL_SAVINGS / 1024)) KB)"
    echo ""
    echo "💡 Next Steps:"
    echo "    1. Update your Next.js Image components to use the .webp versions"
    echo "    2. Run 'dnf info libwebp-tools' if you want to see other webp utilities"
    echo "    3. Run Lighthouse audit to see performance improvements"
    echo ""
    echo "📁 Backup location: $BACKUP_DIR"
else
    echo "⚠️  No JPG/PNG files found to convert in the 'public' directory."
fi

echo ""
echo "✅ Script completed successfully!"
