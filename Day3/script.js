//-search: get URL ---- slice(1) -->to remove ? ---- split('&')[0]-->to split data in URL by '&' and [0] get the first element. 
username= location.search.slice(1).split('&')[0].split('=')[1]
// -- split('=')[1]:to split data in the element we got from previous split by '=' then  [1]  get the second one.
email=location.search.slice(1).split('&')[1].split('=')[1]
//assign values to elemnts by (getElementById.textContent)
document.getElementById('username').textContent=username
document.getElementById('email').textContent=email 

