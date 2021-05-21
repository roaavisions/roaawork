// examing the document object
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[4]);
//document.all[4].textContent='hello'
//console.log(document.form[0]);
console.log(document.link);
console.log(document.images);
//getelement
var li =document.getElementsByClassName('.list-group-items');
//console.log(li);
//li[1].style.color='green';
//consol.log(li[0])
//console.log(li[2].textContent='myitems');
 var i=document.querySelector('.list-group-items');
 i.style.color='red';
 var lastitem=document.querySelector('.list-group-items:last-child');
 lastitem.style.color='blue';
 var seconditem =document.querySelector('.list-group-items:nth-child(2)');
 seconditem.style.color='red';
 //qureySelectorAll
 var titles=document.querySelectorAll('#title');
 console.log(titles);
 var even = document.querySelectorAll('.li:nth-child(even)')
 var odd = document.querySelectorAll('.li:nth-child(odd)')
 for(i=0;i<odd.length;i++){
odd[i].style.backgroundColor='#f4f4f4';

even[i].style.backgroundColor='#ccc';
 }


 //parentNode
 var listitems=document.querySelector('#items');
 console.log(listitems.parentNode.parentNode);
 listitems.parentNode.style.background='gray';
 //childNOde
 console.log(listitems.childNodes)
 console.log(listitems.children)
 console.log(listitems.children[1].style.color='green')
 console.log(listitems.children[2].style.backgroundColore='yellow')
 console.log(listitems.firstChild);
 console.log(listitems.firstElementChild)
 listitems.firstElementChild.textContent='hello 1';
 listitems.lastElementChild.textContent="hello 4 "
 //nextsibling
 console.log(listitems.nextSibling)
 //previoussibling
 console.log(listitems.previousElementSibling);
     
 //create a div
 var newDiv= document.createElement('div');

 // add class name
 newDiv.className='hello';
 //add id
 newDiv.id='hello1';
 //add atrripute
 newDiv.setAttribute('title','hello Div');
 // create text node
 var newDivText = document.createTextNode('hello world');
// add text to div
newDiv.appendChild(newDivText)
console.log(newDiv) 
var continar =document.querySelector('header .container');
console.log(continar)
var h1 =document.querySelector('header h1')
console.log(h1)
continar.insertBefore(newDiv,h1)
newDiv.style.fontSize='30px';
newDiv.style.color='white';
newDiv.style.height='10px';