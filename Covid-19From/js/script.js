function test() {
    alpha=/^[A-Za-z]+$/;
    num = /[^0-9]/;
    //name
    x=document.getElementById('name').value;
    if (x.length<3 || !(x.match(alpha))){
        alert('entrez un Prénom valid');
        return false;
    }
    //last name
    y=document.getElementById('lname').value;
    if (y.length<3 || !(y.match(alpha))){
        alert('entrez un nom valid');
        return false;
    }
    //age
    a=document.getElementById('age').value;
    if (a.length==0 || parseInt(a)<=0 || a.match(alpha) ) {
        alert('entrez un age valid');
        return false;
    }
    //adress
    z=document.getElementById('adress').value.length;
    if (z<10) {
        alert('entrez une adress valid');
        return false;
    }
    //number
    n=document.getElementById('pnum').value;
    if ((n.match(alpha)) || (n.length!=8)) {
        alert('entrez un numero de tel valid');
        return false;
    }
    //email
    m=document.getElementById('email').value;
    if ((m.length==0) || (m.length>50) || (m.indexOf("@")<m.lastIndeaxOf("."))) {
        alert('entrez un mail valid');
        return false;
    }
}
function test2() {
    //points
    pts=0;
    s=document.querySelectorAll('#ch');
    for (i = 0; i < s.length; ++i) {
        if(s[i].checked){
            pts=pts+1;
        }
    }
    alert('your total points are '+pts)
}