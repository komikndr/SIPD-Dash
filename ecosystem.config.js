module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      user : 'microsite',
      host : '103.56.93.6',
      ref  : 'origin/master',
      repo : 'https://github.com/komikndr/SIPD-Dash',
      path : '/home/microsite',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
