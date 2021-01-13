### Adding elements to the page 

`var body = document.body
body.append(")` <br>

### Creating an element 

`var div = document.createElement("div")
body.append(div)` 

#### Adding text to an element 

`div.TextContent = "Hello world"` <br>

or <br>

`div.innerText = "Hello world"` <br>

[comment]: <> (What is the difference between the two?)

### Removing Element from the dom 

`${element}.remove`

### Getting snd setting attributes 

`div.setAttribute("id", "name")` <br>

or <br>

`div.id = "name"`

### Data attributes