// the goal of the javascript is to add the ability for the classes of each panel to switch once they have been clicked, making the design interactive

const panels = document.querySelectorAll('.panel')
// the document query selector allows us to select anything. We need to select the panels class, however because there is more than one panel class, we use 'querySelectorAll'. this puts all of the elements selected into a node list which is similar to an array 
//console.log(panels) - open up chrome devtools console to see the node list

panels.forEach((panel) => { //forEach loops through each of the specified list 
    panel.addEventListener('click', () => { // takes each panel and listens for a click, once that click happens, we add another function
        removeActiveClasses() // adding a function that removes the active classes from other panels, so they all don't remain wide
        panel.classList.add('active') // 'panel.classList' provides a list of the classes, we then add a method on the object called '.add' where we add the 'active class'
    }) 
})
// this loops through the panel, it is a high order array method which takes in a function

function removeActiveClasses() { //set the function for removing the active classes
    panels.forEach(panel => { // like above, loop through the 'panels' classes, when an function has one argument, () are not needed around 'panel'
        panel.classList.remove('active') // for the particular 'panels' that we are looping through, on the 'classlist' object, we  call 'remove' on all the 'active' classes 

    })
}