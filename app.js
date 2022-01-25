const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    const exec = require('child_process').exec;
    const myShellScript = exec('sh testScript.sh');
    myShellScript.stdout.on('data', (data)=>{
        console.log('data success', data); 
        // do whatever you want here with data
    });
    myShellScript.stderr.on('data', (data)=>{
        console.error('data err', data);
    });

    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})