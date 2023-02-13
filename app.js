const handleInput=document.getElementById("handle");
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the handle from the input field
    const handle = handleInput.value;
    document.getElementById("container").innerHTML=`<p></p>`;
    fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=1`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.result[0].id);
      continuous(data.result[0].id,handle);  
      document.body.innerHTML=`<h1><a href="http://www.codeforces.com">Go to Codeforces</a></h1>`
    })

});

function continuous(id,handle){
  setInterval(function(){
    console.log(id);
    fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=1`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.result[0].id!=id){
        if(data.result[0].verdict=="OK"){
          alert("Great ,You nailed it!");
          id=data.result[0].id;
        }else{
          alert("OOPS Try Again!");
          id=data.result[0].id;
        }
      } 
    })

  },5000);
}
    

    

