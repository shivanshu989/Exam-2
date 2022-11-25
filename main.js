document.getElementById('c1').onclick = b1;
document.getElementById('c2').onclick = b2;
document.getElementById('c3').onclick = b3;
document.getElementById('c4').onclick = b4;
document.getElementById('c5').onclick = b5;
document.getElementById('submit').onclick = loadDoc;


function b1() {
    // alert("clicked");
    document.getElementById('main').style.backgroundColor = 'blue';
    document.getElementById('text').style.color = 'skyblue';

    
}
function b2() {
    // alert("clicked");
    document.getElementById('main').style.backgroundColor = 'green';
    document.getElementById('text').style.color = 'greenyellow';

}
function b3() {
    // alert("clicked");
    document.getElementById('main').style.backgroundColor = 'pink';
    document.getElementById('text').style.color = 'red';

}
function b4() {
    // alert("clicked");
    document.getElementById('main').style.backgroundColor = 'skyblue';
    document.getElementById('text').style.color = 'blue';

}
function b5() {
    // alert("clicked");
    document.getElementById('main').style.backgroundColor = 'grey';
    document.getElementById('text').style.color = 'black';

}
// ---------------------------------------------------------------------
function loadDoc() {
    var name = document.getElementById('movie').value;
    document.getElementById('demo').innerHTML = '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        for(var i = 0; i < response.length; i++){
          let r = response[i].show.image.medium;
          document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML + `<img src ='${r}' />`;
        }
      }
    };
    xhttp.open("GET", `https://api.tvmaze.com/search/shows?q=${name}`, true);
    xhttp.send();
  }
// alert(b1);