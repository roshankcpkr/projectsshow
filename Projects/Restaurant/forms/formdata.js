function post(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var date=document.getElementById("date").value;
    var time=document.getElementById("time").value;
    var people=document.getElementById("people").value;
    var message=document.getElementById("message").value;
    var today=new Date();
    today.setDate(today.getDate() - 1);
    var input=new Date(date);
    if (input<=today)
    {
        alert("Invalid Date");
        return;
    }
    if(Math.sign(phone)!=1||phone.toString().length!=10 )
    {
        alert("Invalid Phone number");
        return;
    }
    if(Math.sign(people)==-1){
        alert("Invalid number of people selected!");
        return;
    }
    var map=new Map([["name",name],["phone",phone],["date",date],["time",time],["people",people],["message",message]]);
    localStorage.setItem(name,JSON.stringify(Array.from(map.entries())));
    alert("Reservation Confirmed!");
}