import os from "os";
import f, { unlinkSync } from"fs";
console.log(os.cpus())
console.log(os.freemem())
console.log(os.version())

let d=f.readFileSync("./data.txt",{encoding:"utf-8"})
console.log(d)
let e=f.appendFileSync("./data.txt","This is a second line")
console.log("appended succesfully")
let g=f.unlinkSync("./Readme.md")
console.log("file deleted succesfully")
