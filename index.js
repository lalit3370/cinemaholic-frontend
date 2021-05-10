const express = require('express');
const { spawn } = require('child_process')

// var multer = require('multer')
var cors = require('cors');

const app = express()
app.use(cors())

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })
// var upload = multer({ storage: storage }).single('file')

app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  

app.get("/name", (req, res) => {
    // console.log(req.query)
    const process = spawn('/home/shanky/anaconda3/bin/python', ['recommend.py', req.query.name]);
    process.stdout.on('data', (data) => {
    //     // console.log(data)
        console.log("outputdata:-", data.toString())
        res.write(data.toString())
    //     // data = JSON.parse(data.toString())
    //     // console.log(data.hello)

    })
    process.stderr.on('data', (data) => {
        console.log("outputerr", data.toString())
    })
    process.on('close', (code) => {
        res.end()
    })
})
// app.post('/upload', function (req, res) {

//     upload(req, res, function (err) {
//         if (err instanceof multer.MulterError) {
//             console.log(err)
//             return res.status(500).json(err)
//         } else if (err) {
//             console.log(err)
//             return res.status(500).json(err)
//         }
//         console.log(req.file.filename)
//         const process = spawn('/home/piyush/anaconda3/envs/p36/bin/python3.6', ['python.py',req.file.filename]);
//         let output={};
//         process.stdout.on('data', (data) => {
//             console.log("outputdata:-", data.toString())
//             output = JSON.parse(data.toString())
//         })
//         process.stderr.on('data', (data) => {
//         //    console.log(data.toString())
//         })
//         process.on('close', (code) => {
//            return res.json(output)
//         })
//         // return res.status(200).send(req.file)
//     })

// });

app.listen(5000, () => {
    console.log("server started")
})