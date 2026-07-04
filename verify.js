import fs from 'fs';

const required = [
  'server.js',
  'index.html',
  'main.js',
  'styles.css',
  'bot.js',
  'commands.js',
  'ai.js',
  'images.js',
  'data/commands.js',
  'ui/dashboard.js',
  'ui/chat-view.js',
  'ui/commands-view.js',
  'ui/tools-view.js',
];

let ok = true;
for (const f of required) {
  if (fs.existsSync(f)) {
    console.log('  ✅ ' + f);
  } else {
    console.error('  ❌ ' + f + ' MISSING');
    ok = false;
  }
}

if (!ok) {
  console.error('\n❌ Fichiers manquants!');
  process.exit(1);
} else {
  console.log('\n✅ ' + required.length + ' fichiers OK');
}
