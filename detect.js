// const fs = require('fs');
// const path = require('path');

// // Extensions and folder names to detect
// const targets = ['.git', '.env', '.gitignore'];
// const extensions = ['.png', '.jpg', '.jpeg', '.img', '.pdf'];

// function scanDirectory(dir) {
//     fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
//         const fullPath = path.join(dir, entry.name);

//         if (entry.isDirectory()) {
//             if (targets.includes(entry.name)) {
//                 console.log(`Found folder: ${fullPath}`);
//             }
//             scanDirectory(fullPath); // Recurse into subdirectory
//         } else {
//             const ext = path.extname(entry.name).toLowerCase();
//             if (targets.includes(entry.name) || extensions.includes(ext)) {
//                 console.log(`Found file: ${fullPath}`);
//             }
//         }
//     });
// }

// // Start scanning from current directory
// scanDirectory(process.cwd());

const fs = require('fs');
const path = require('path');

const keywords = ['delta', 'email', 'password', 'details'];
const extensions = ['.html', '.css', '.js'];

function searchInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8').toLowerCase();
    keywords.forEach(keyword => {
        if (content.includes(keyword.toLowerCase())) {
            console.log(`Found "${keyword}" in: ${filePath}`);
        }
    });
}

function scanDirectory(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            if (entry.name === 'node_modules') return; // 🚫 Skip node_modules
            scanDirectory(fullPath);
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            if (extensions.includes(ext)) {
                searchInFile(fullPath);
            }
        }
    });
}

// 🚀 Start scanning from current directory
scanDirectory(process.cwd());
