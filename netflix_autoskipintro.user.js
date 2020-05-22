// ==UserScript==
// @name         Netflix "Skip Intro" Button AutoClicker
// @version      0.1
// @description  Netflix "Skip Intro" Button AutoClicker.
// @author       Ouahib El Hanchi
// @copyright    2020, Ouahib El Hanchi (https://www.ouahibelhanchi.me/)
// @license      MIT
// @match        https://www.netflix.com/watch/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// ============================================================================

function getSeekTime()
{
    const scrubber = document.querySelector('.scrubber-head');
    const seekTime = scrubber.getAttribute('aria-valuetext');
    return seekTime;
}

// ----------------------------------------------------------------------------

function checkSkipIntroButton()
{
    const skipIntroButton = document.querySelector('.skip-credits > a');
    if(skipIntroButton) {
        skipIntroButton.click();

        console.log(`'Skip Intro' button has been auto clicked at ${getSeekTime()}.`);
    }

    setTimeout(checkSkipIntroButton, 1000);
}

// Entry-point ================================================================

checkSkipIntroButton();

// END ========================================================================
