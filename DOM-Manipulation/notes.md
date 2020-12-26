### What does DOM mean?
-------------------------

Document object model 

<https://www.w3schools.com/js/js_htmldom.asp>

DOM Selector 
---------------
1. getElementsByTagName
2. getElementsByClassName
3. getElementByClassID

4. querySelector --> we can select anything documnet.querySelector("li"). This only returns the first item that it finds
5. querySelectorAll --> This returns all the elements in that tag 

**querySelectors** are going to be used to grab elements in the HTML <br>
we have to check is all the browsers have thhis function working. check on the <caniuse> website. Use these two to get the selection <br>


getAttribute --> we need to select an element document.querySelector("li").getAttribute 
##### or 
var list = document.querySelector("li");
list.getAttribute("random");

we can also set he attribute with <br>
setAttribute()

var list = document.querySelector("li");
list.setAttribute("random", 1000); --> this will change the 23 value in our html to 1000


## Changing Styles 

styles.{property} //ok <br>

##### example 
`document.querySelector("h1").style.background `
<br>

how else can we achieve this? <br>


className //best <br>
classList //best <br>

classList.add <br>
classList.remove <br>
classList.toggle <br>

## Bonus 

innerHTML // Dangerous  <br>
this changed the text of a tag <br>
`document.querySelector("h1").innerHTML = <strong> !!!! </strong>`

parentElement <br>
child <br>

## It is important to CACHE selectors in variables 
--------------------





# Working with event listeners

Most common ones are mouse event and click events <br>

<https://developer.mozilla.org/en-US/docs/Web/Events>


## Callback functions

**Event listener syntax:**

`button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
You didn't see the function being called like this as you may have expected:`

`button.addEventListener("click", addListAfterClick());`
`input.addEventListener("keypress", addListAfterKeypress(event));`


`This is something called a callback function. When that line of javascript runs, we don't want the addListAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.`
