var text = "Hello!!! ";
var text_from_env = process.env.HELLO_TXT;
var home = process.env.HOME;
var env_vars = JSON.stringify(process.env,null,2);
text = text + "process.env.HELLO_TXT: (" + text_from_env+ ") : Home is : (" + home +") ALL env is : " + env_vars;
console.log(text);