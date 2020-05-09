function fun()
{
    var a=document.getElementById('courseid').value;
    if(a==="B.Tech")
    {
        var array=["Choose","Computer Science & Engineering","Information Technology","Mechanical Engineering","Civil Engineering"];
    }
    else if(a==="M.Tech")
    {
        var array=["Choose","Computer Science & Engineering","Mechanical Engineering"];
    }
    else if(a==="Polytechnic")
    {
        var array=["Choose","Electrical Engineering","Mechanical Engineering","Civil Engineering"];
    }
    else
    {
        var array=[];
    }       
    var string="";
    for(var i=0;i<array.length;i++)
    {
        string=string+"<option>"+array[i]+"</option>"
    }
    string="<select>"+string+"</select>";
    document.getElementById('output').innerHTML=string;
}
