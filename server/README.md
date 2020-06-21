# Server with express nodeJS

## App

### Start
  #### Starts all project
```
yarn init -y or npm init -y
```

### Install express on debian and derivatives
    npm install express or yarn add express

### Express start
```javaScript  
  // To import o express
  const express = require('express')
  
  const app = express()
  // Routes with callback
  app.get('/', (req, res) => res.send('Hello word') )
  
  const port = 3333
  
  // App listens on port 3333  
  app.listen(port, console.log("App listens on port 3333"))
```

### Run app 
  > npm run start