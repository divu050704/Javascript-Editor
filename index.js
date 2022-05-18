window.onload = () => {
  const[input,output] = document.querySelectorAll(".codemirror-textarea");
  const [run,clear] = document.querySelectorAll("button");

  //configuration for codemirror
  //----------------------------------------
  const editor  = CodeMirror.fromTextArea(input,
    {
      lineNumbers:true,
      name:"javascript",
      autoCloseBrackets: true, 
      theme:"dracula", 
      matchBrackets: true 
    });
  editor.setSize("100%","100%");
  
  const shell= CodeMirror.fromTextArea(output,
    {
      lineNumbers: false,
      name:"javascript",
      theme: "dracula"
    });
  shell.setSize("100%","100%");
  //-------------------------------------------------
  run.addEventListener("click", () => {
    const code1 = editor.getValue();
    try{
    shell.replaceRange("\n"+'$ '+ eval(`${code1}`), CodeMirror.Pos(shell.lastLine()));
    }catch(e){
      shell.replaceRange("\n"+'$ '+ e, CodeMirror.Pos(shell.lastLine()));
    }
  });
  clear.addEventListener("click", () => shell.setValue("$"))
}

