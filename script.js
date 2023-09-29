const container = document.querySelector('.container');
const wrapperDiv = document.querySelector('.wrapper');

function createWomanDiv() {
    let div = document.createElement('div');
    div.classList.add('woman');
    div.setAttribute('id', 'woman');
    container.appendChild(div);
}

function createHeadline1Div() {
    let div = document.createElement('div');
    div.classList.add('headline1');
    div.setAttribute('id', 'headline1');
    container.appendChild(div);
}

function createHeadline2Div() {
    let div = document.createElement('div');
    div.classList.add('headline2');
    div.setAttribute('id', 'headline2');
    container.appendChild(div);
}

function createSubHeadlineDiv() {
    let div = document.createElement('div');
    div.classList.add('subHeadline');
    div.setAttribute('id', 'subHeadline');
    container.appendChild(div);
}

function createLearnMoreDiv() {
    let div = document.createElement('div');
    div.classList.add('learn-more');
    div.setAttribute('id', 'learnMore');
    container.appendChild(div);
}

function createLogoDiv() {
    let div = document.createElement('div');
    div.classList.add('logo');
    div.setAttribute('id', 'logo');
    container.appendChild(div);
}

function createReplayDiv() {
    let div = document.createElement('div');
    div.classList.add('replay');
    div.setAttribute('id', 'replay');
    container.appendChild(div);
}

function createCreditDiv() {
    let div = document.createElement('div');
    div.classList.add('credit');
    div.setAttribute('id', 'credit');

    let h1 = document.createElement('h1');
    h1.innerHTML = "Created using HTML, CSS & JavaScript"
    h1.style.textAlign = "center";
    div.appendChild(h1);

    let h4 = document.createElement('h4');
    h4.innerHTML = "Coded by Daniel";
    h4.style.textAlign = "center";
    div.appendChild(h4);

    container.appendChild(div);
}

//function to set the animation style by tageting id element
function animateElement(elementId, animationName, duration, timingFunction, delay, iterationCount) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.animation = `${animationName} ${duration} ${timingFunction} ${delay} ${iterationCount}`;
    }
}

//display and remove all divs by set timeout intervals with animation
function display() {
    setTimeout(() => {
        createWomanDiv();
        animateElement('woman', 'fade-in', '.5s', 'ease-in-out', '0s', '1');
    }, 2000);

    setTimeout(() => {
        createHeadline1Div();
        animateElement('headline1', 'slide-in-to-left', '.5s', 'ease-in-out', '0s', '1');
    }, 3000);

    setTimeout(() => {
        animateElement('woman', 'fade-out', '1s', 'ease-in-out', '0s', '1');
    }, 4000);

    setTimeout(() => {
        // remove the div.woman from the container
        const womanDiv = document.getElementById('woman');
        if (womanDiv && womanDiv.parentNode) {
            womanDiv.parentNode.removeChild(womanDiv);
        }
        
        createHeadline2Div();
        animateElement('headline2', 'slide-in-from-right-to-left', '.5s', 'ease-in-out', '0s', '1');

        setTimeout(() => {
            animateElement('headline1', 'zoom-out', '.5s', 'ease-in-out', '0s', '1');
        }, 1000);

        setTimeout(() => {
            // remove the div.headline1 from the container 
            const headline1Div = document.getElementById('headline1');
            if (headline1Div && headline1Div.parentNode) {
                headline1Div.parentNode.removeChild(headline1Div);
            }

            createSubHeadlineDiv();
            animateElement('subHeadline', 'fade-in', '.5s', 'ease-in-out', '0s', '1');

            setTimeout(() => {
                createLearnMoreDiv();
                animateElement('learnMore', 'fade-in', '.5s', 'ease-in-out', '0s', '1');
            }, 2000);

            setTimeout(() => {
                createLogoDiv();
                animateElement('logo', 'slide-in-from-left-to-right', '.5s', 'ease-in-out', '0s', '1');
            }, 2500);

            setTimeout(() => {
                createReplayDiv();
                animateElement('replay', 'fade-in', '.5s', 'ease-in-out', '0s', '1');
            }, 3500);

        }, 1500);
    }, 5000);

    setTimeout(() => {
        document.getElementById('headline2').style.zIndex = "-1";
        document.getElementById('subHeadline').style.zIndex = "-1";
        document.getElementById('learnMore').style.zIndex = "-1";
        document.getElementById('logo').style.zIndex = "-1";
        document.getElementById('replay').style.zIndex = "-1";
        createCreditDiv();
        animateElement('credit', 'zoom-in', '.5s', 'ease-in-out', '0s', '1');
    }, 14000);
}

display();

