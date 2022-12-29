function codeEditor() {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/twilight");
    editor.setValue("def execute(): \n\t for i in range(10):\n\t\t print(i) \nexecute()")


} 
