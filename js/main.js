/*Global console*/

/* 
Declare variables:
    imagesList. array of image urls used to load masthead slider images array

    images...   array of images stored in cache for masthead slider

    i1...       index-pointer used to load images array

    masthead... HTML container storing the current slide - slide-show part

    slides...   array of elements storing all slides - slide-show part

    buttons...  collected list of 3 buttons in array - main content hide/reveal part

    contents... array of 3 elements - contents in main content hide/reveal part

    container...HTML element that will get a content from array contents

    i...        index-pointer inside loops for slide-show part

    k...        index-pointer inside loops for hide/reveal content part 

    ev...       event parameter for handleClick function
*/

var imagesList = [],
    images = [],
    i1,
    masthead,
    slides = [],
    buttons = [],
    contents = [],
    container,
    i,
    k,
    ev;


/* ======================================================================== */
/* LOAD MASTHEAD SLIDER IMAGES INTO ARRAY */
/*
 * A HTML container collapses when it's empty for a split second, and expands when  
 * it gets the content. Images elements load slower than  text.  To prevent this,
 * it makes sense to pre-load the images (store them in browser's cache).
 */
imagesList = [
    "./img/mh1-solar-home.jpg",
    "./img/mh2-clothesline.jpg",
    "./img/mh3-greenhouse.jpg",
    "./img/mh4-solar-car.jpg"
];
 
images = [];
 
function preload(arr) {
   for (i1 = 0; i1 < arr.length; i1 += 1) {
      images[i1] = new Image();
      images[i1].src = arr[i1];
   }
}

preload(imagesList);


/* ======================================================================== */
/* MASTHEAD SLIDER */

/*
 * Access empty div with the class "mh-image" and pass the reference
 * to variable masthead 
 */
masthead = document.querySelector(".mh-image");

/* 
 * Assign 4 elements to array slides (slide-show content)
 */
slides = [
    "<figure><div class='mh-image-box'><img src=\""+images[0].src+"\" alt=\"Solar Powered Home\"></div><figcaption>To Generate Your Electricity</figcaption></figure>",
    "<figure><div class='mh-image-box'><img src=\""+images[1].src+"\" alt=\"Clothesline\"></div><figcaption>To Dry Your Clothes </figcaption></figure>",
    "<figure><div class='mh-image-box'><img src=\""+images[2].src+"\" alt=\"Greenhouse\"></div><figcaption>To Grow Your Food</figcaption></figure>",
    "<figure><div class='mh-image-box'><img src=\""+images[3].src+"\" alt=\"Solar Powered Car\"></div><figcaption>To Power Your Car</figcaption></figure>"
];


/* 
 * Define function fadeOut. This function will 
 * make currently displayed slide disappear. 
 */
function fadeOut() {
    
    "use strict";
    
    masthead.style.opacity = 0;
}
   

/* 
 * Reset index pointer i for the array slides.
 */
i = 0;

/* 
 * Define function runSlides. 
 * This function will loop through the array slides.
 */
function runSlides() {
    
    "use strict";

   /* 
   Set opacity of masthead to 1.
   Make sure masthead is visible 
   (use style object and opacity on masthead). */
    masthead.style.opacity = 1;
    
   /* 
   Check the value of i.
   If the value of i is greater than 3 
   (3 is index of fourth slide),
   reset the value of i to 0 
   (slide-show starts over). */
    if (i > 3) {
        i = 0;
    }
    
   /* 
   Use i to pass the next in line slide 
   from array slides to masthead. */
    masthead.innerHTML = slides[i];
    
   /* 
   Increment i. */
    i += 1;
    
   /* 
   Use setTimeOut() to call function fadeout 
   after 5 seconds.(Slide will remain displayed 
   for 5s and then, function fadeOut 
   will make it disappear). */
    window.setTimeout(fadeOut, 5000);
    
/* 
End function runSlides. */
}


/*
Call function runSlides. This will display 
the first slide as the web page is loaded. */
runSlides();

/* 
Use setInterval() to call function 
runSlides every 6 seconds.
(Function runSlides is 
a slide-show "engine"). */
window.setInterval(runSlides, 6000);




/* ======================================================================== */
/* BUTTON SELECTOR */

/* 
Collect all buttons in array buttons.*/
buttons = document.querySelectorAll("button");

/*
Have all contents in array contents. */
contents = [
    "<figure><img src=\"./img/fp1-you.png\" alt=\"You\"><figcaption>You can have a big impact on moving us all toward a greener future in the individual choices you make each day.  We can green our homes, use cleaner forms of transportation, consume less energy, and embrace the reduce, reuse, recycle policy.  To broaden our impact, we need to reach out to our political leaders requesting incentives for fuel efficient technologies, legislation banning toxic chemicals and strategies to protect endangered species.</figcaption></figure>",
    "<figure><img src=\"./img/fp2-transportation.png\" alt=\"Transportation\">         <figcaption>Transportation accounts for almost half of air pollution, more than a third of greenhouse gas emissions, and one quarter of common air contamination.  When buying a car, check the Auto Smart ratings to make sure it's fuel efficient and low polluting.  When driving, show down, check tire pressure, and replace filters regularly to reduce fuel consumption.  Walk, bike, carpool or take transit whenever possible.  To avoid air travel, considerate vacationing closer to home.</figcaption></figure>",
    "<figure><img src=\"./img/fp3-energy.png\" alt=\"Energy\">             <figcaption>Canada is the largest consumer of energy in the world on a per capita basis.  Energy efficiency means lower bills as well as less pollution.  Consider changing your windows and older appliances to more efficient models.  For example, a new refrigerator uses 40 per cent less energy than models made just 10 years ago.  Using a low-flow shower head, switching to a programmable thermostat, washing clothes in cold water, and purchasing LED bulbs can all make a difference.</figcaption></figure>"
];

/*
Access div with the class "container"
and pass the reference to variable container.*/
container = document.querySelector(".mn-container");

/*
Pass the value of the first array-element of array contents
to container (use innerHTML on container). 
This is because first button is active on initial display. */
container.innerHTML = contents[0];

/* 
 * Define function handleClick 
 * (pass event object to function)
 */
function handleClick(ev) {
    
    "use strict";
    
    /* 
    Loop through buttons array and
    use removeAttribute() to remove 
    id with the value active from an HTML element 
    that contains this id (use hasAttribute() in if-statement to check). */
    for (k = 0; k < buttons.length; k += 1) {
        
        if (buttons[k].hasAttribute("id")) {
            buttons[k].removeAttribute("id");
        }
        
    }
    /* 
    Use innerHTML on ev.target to check which button
    was clicked. Based on this, display corresponding array 
    element inside <div class="container"></div> */
    if (ev.target.value === "button1") {
        container.innerHTML = contents[0];
        
    } else if (ev.target.value === "button2") {
        container.innerHTML = contents[1];
        
    } else if (ev.target.value === "button3") {
        container.innerHTML = contents[2];
    }
    
   /*
   Add the class active to clicked button (use ev.target) */
    ev.target.setAttribute("id", "active");
/* 
End function handleClick. */
}

/* 
Loop through buttons array and 
register handleClick to listen for "click" event 
on any button from array buttons. */

for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}

