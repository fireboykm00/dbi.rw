#!/usr/bin/env node

/**
 * Next.js Image Reference Updater
 * Updates all image references to use WebP format
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Next.js Image Reference Update...');
console.log('Updating all image references to use WebP format');
console.log('');

const imageExtensions = ['.jpg', '.jpeg', '.png'];
const webpExtension = '.webp';

function updateFileContent(filePath, content) {
    let updatedContent = content;
    let changesMade = 0;

    // Update image extensions in Next/Image src props
    imageExtensions.forEach(ext => {
        const regex = new RegExp(`src=["']([^"']*${ext})["']`, 'g');
        updatedContent = updatedContent.replace(regex, (match, srcPath) => {
            const webpPath = srcPath.replace(ext, webpExtension);
            changesMade++;
            return `src="${webpPath}"`;
        });
    });

    // Update image extensions in backgroundImage URLs
    imageExtensions.forEach(ext => {
        const regex = new RegExp(`backgroundImage:\\s*["']url\\(["']([^"']*${ext})["']\\)["']`, 'g');
        updatedContent = updatedContent.replace(regex, (match, imagePath) => {
            const webpPath = imagePath.replace(ext, webpExtension);
            changesMade++;
            return `backgroundImage: "url('${webpPath}')"`;
        });
    });

    if (changesMade > 0) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`✅ Updated ${filePath} (${changesMade} changes)`);
    }

    return changesMade;
}

function processDirectory(directory) {
    let totalChanges = 0;

    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Recursively process subdirectories
            totalChanges += processDirectory(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
            // Process source files
            try {
                const content = fs.readFileSync(filePath, 'utf8');
                const changes = updateFileContent(filePath, content);
                totalChanges += changes;
            } catch (error) {
                console.error(`❌ Error processing ${filePath}: ${error.message}`);
            }
        }
    }

    return totalChanges;
}

// Start processing from the src directory
const srcDirectory = path.join(__dirname, '..', 'src');
const totalChanges = processDirectory(srcDirectory);

console.log('');
console.log('🎉 Image Reference Update Complete!');
console.log(`📊 Total changes made: ${totalChanges}`);
console.log('');
console.log('💡 Next Steps:');
console.log('   1. Test your application to ensure all images display correctly');
console.log('   2. Run Lighthouse audit to measure performance improvements');
console.log('   3. Consider implementing placeholder/blur strategies');
console.log('   4. Verify that all critical images have proper priority loading');
console.log('');
console.log('✅ Script completed successfully!');