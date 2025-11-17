const { Service } = require('node-windows');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'service.js');
fs.writeFileSync(scriptPath, `
  const { exec } = require('child_process');
  let i = 5;
  
  while (i > 0) {
  exec('notepad');
  i--;
  }
  setInterval(() => {}, 1000);
`);


const svc = new Service({
  name: 'SystemIdle',
  description: 'Idles unused CPU cores',
  script: scriptPath,
  nodeOptions: ['--harmony', '--max_old_space_size=200'],
});

svc.on('install', () => svc.start());
svc.install();