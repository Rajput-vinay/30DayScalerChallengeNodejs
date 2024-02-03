const {exec} = require("child_process");
function executeCommand(command){
    exec(command,(error,stdout,stderr)=>{
        if(error){
            console.log(`Error command run: ${error.message}`);
        }
        else if(stderr){
            console.log(`command stderr run: ${stderr}`);
        }
       else{
            console.log(`command output: ${stdout}`);
       }
    })
}
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js! @rajput-vinay"');