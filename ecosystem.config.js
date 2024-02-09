module.exports = {
    apps: [{
      name: 'front-cardapio-food',
      script: 'npm',
      args: 'start',
      cwd: '/home/ubuntu/site-cadapio-food/cardapio-food',
      env: {
        NODE_ENV: 'production'
      }
    }]
};