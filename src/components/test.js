const ChatkitServer = require('@pusher/chatkit-server')
const tokenUrl =  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/4db7afc8-bbba-445c-9792-518d3e82e96c/token"
const key = "e483611f-568a-46cf-b333-4203e486db71:2RT/gp4vRYfgEi4VED2RAx1HfTWR1gO2BAwfttuVuXA="

const instanceLocator =  "v1:us1:4db7afc8-bbba-445c-9792-518d3e82e96c"

const chatkit = new ChatkitServer.default({
    instanceLocator: instanceLocator,
    key: key,
  })
  chatkit.createUser({
    id: 'tuuu',
    name: 'tina',
  })
  .then(() => {
    console.log('User created successfully');
  }).catch((err) => {
    console.log(err);
  });