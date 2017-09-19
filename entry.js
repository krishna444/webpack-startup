//import another file
import content from "./content"
//import stylesheet like this
import "./static/style.css"
//Import image like this
import image from './static/fe-icon.svg'
//let image = require("./fe-icon.svg");

//Import index file
import './index.html'
document.writeln("Entry point here<br>");
document.writeln("Another Javascript:" + content + "<br>");
document.write("Test of SVG image load: <img src=" + image + " height=100px width=100px/><br>")

/**Class Test */
class Test {
    constructor() {
        this.name = "Hello world!";
    }

    display() {
        console.log(this.name);
        document.write("Class Test Message:" + this.name)
    }
}

let test = new Test();
test.display();