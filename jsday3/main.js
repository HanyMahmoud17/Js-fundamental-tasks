
//task 1


var p1;
var p2;

function param(p1,p2){
    try{
        if(arguments.length !==2){
            document.write("enter params again");
            var e=new Error("invalid params");
            throw e;
        }else{
            document.write("goood");
            return p1+p2;
        }
    
    }catch{
        alert(e);
    
    }
}
// param(1,5,6)


// task 2

var start=document.getElementById('start');

start=document.addEventListener('click',function showing(){
    
    alert("Clock Started");

    function show()
   {
    var now= new Date()
    // var x= now.toLocaleDateString()
    // document.write(x)
    // document.write(now) //show full time
    document.write("<div>" + now.toLocaleTimeString() + "</div" + "<br>")
   } 
   var y=setInterval(show,1000) // hof 
   document.write("id:",y)

//    this to end clock
    function cleartimeout()
    {
        clearInterval(y)
        alert('End of clock')
    }
    setTimeout(cleartimeout,5000) // once time 
})

//task 3



setTimeout(function()
{
        window.open("C:\Users\LAPTOP WORLD\Desktop\show\show.txt")//  new tap
     var newindow = window.open("","winndow name","_blank") // new window

      newindow.document.write("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nemo aliquid, quisquam in suscipit, alias facere corrupti neque laboriosam repellendus magnam, eveniet quasi odit perspiciatis fuga repudiandae dolorem esse");
      

},1000)


function write()
{
    var newindow = window.open("","winndow name ","_blank") 

    
}


//task 4

function addNumbers() {
    try{

  
    if (arguments.length === 0) {
      var x= new Error("At least one argument is required.");
      throw x
    }
    
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number") {
        var y= new TypeError("Only numbers can be added.");
        throw y
    }else{
      sum += arguments[i];
    }
    }
    alert(`sum of number is : ${sum}`);
    }
    catch{
        alert(x)
        alert(y)
    }
    
  }

 addNumbers(1,10);
     
