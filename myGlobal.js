var myGlobalVariable;
(function(){
   var myGlobalVariable = "Local";
   myGlobalVariable = "Global";
   console.log("你好");
}());