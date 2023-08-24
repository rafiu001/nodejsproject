const fs = require('fs')

// read from file
fs.readFile('./text/blog.txt', (err,res) =>{
    if (err) {
        console.log(err)
    }
    console.log(res.toString());
})

// write to file
fs.writeFile('./text/blog1.txt', 'I love nodejs, I can code anything am A baddest day', (err, res) => {
    console.log('written')
})
// // directory
// // created folder
// if (!fs.existsSync('.img')) {
//     fs.mkdir('./img', (err. res) =>{
//         if (err) console.log(err)
//         console.log('folder created')
// //     })
// }

// deleted folder

