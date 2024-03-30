import app from './index.js'

app.listen(5000, () => {
    const url = 'http://localhost:5000/api-docs'
    console.log()
    console.log("server is listening at port 5000");
    console.log('-------------------------------------------------------------------------------------')
    console.log(`Go to the Documentation to understand the use of api : ${url}`)
    console.log('-------------------------------------------------------------------------------------')
    console.log()
  });