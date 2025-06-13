//EASY  

console.log("EASY ---->")

// document.getElementById("main-heading").textContent="My Awesome Shop";

// //-------------------------------------------------------------------------

// const tag=document.getElementsByClassName("tagline")[0]
// tag.innerHTML="Find the <strong>best</strong> products here!"

//--------------------------------------------------------------------------

const selector=document.querySelector('footer p');
selector.textContent="Amaan 2025";



///////////////////////////////////////////////

//MEDIUM

// console.log("MEDIUM ---->")

// const modifyApp=document.getElementById('app-container')

// const headingTagSelect=document.createElement('h2')
// headingTagSelect.textContent="About Us"

// const paragraphTagSelect=document.createElement('p')
// paragraphTagSelect.textContent="We are a small team passionate about quality products."

// modifyApp.append(headingTagSelect,paragraphTagSelect);

////////////////////////////////////////////////

//HARD

console.log("HARD ---->")

const createDiv= document.createElement('div');
createDiv.classList.add("contact-info");

const para=document.createElement('p')
para.textContent='Email: contact@awesomeshop.com';

const para1=document.createElement('p')
para1.textContent="Phone: 123-456-7890";

createDiv.appendChild(para)
createDiv.appendChild(para1);

const foot=document.querySelector('footer')
selector.insertBefore(createDiv,selector.firstChild)




////////////////////////////////////////////////