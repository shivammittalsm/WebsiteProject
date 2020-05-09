function disha()
{
    var req = new XMLHttpRequest();
	req.open('GET','disha.html',true);
	req.send();
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200)
		{
            document.getElementById('changedata').innerHTML = req.responseText;
        }
    }
}

function lca()
{
    var req = new XMLHttpRequest();
	req.open('GET','lca.html',true);
	req.send();
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200)
		{
            document.getElementById('changedata').innerHTML = req.responseText;
        }
    }
}
function oorja()
{
    var req = new XMLHttpRequest();
	req.open('GET','oorja.html',true);
	req.send();
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200)
		{
            document.getElementById('changedata').innerHTML = req.responseText;
        }
    }
}
function sactivity()
{
    var req = new XMLHttpRequest();
	req.open('GET','sactivity.html',true);
	req.send();
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200)
		{
            document.getElementById('changedata').innerHTML = req.responseText;
        }
    }
}
function spic()
{
    var req = new XMLHttpRequest();
	req.open('GET','spic.html',true);
	req.send();
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200)
		{
            document.getElementById('changedata').innerHTML = req.responseText;
        }
    }
}
function cac()
{
    var req = new XMLHttpRequest();
	req.open('GET','cac.html',true);
	req.send();
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200)
		{
            document.getElementById('changedata').innerHTML = req.responseText;
        }
    }
}
function cpc()
{
    var req = new XMLHttpRequest();
	req.open('GET','cpc.html',true);
	req.send();
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200)
		{
            document.getElementById('changedata').innerHTML = req.responseText;
        }
    }
}