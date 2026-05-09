
document.addEventListener('DOMContentLoaded', function () {
    const lightImage = document.getElementById('lightImage');
    const darkImage = document.getElementById('darkImage');
    const themeRadioButtons = document.getElementsByName('theme');

    const arrowsBlock = document.getElementById('Arrow');

    const menuBlock = document.getElementById('menuBlockImage');
    const menuDoor = document.getElementById('menuDoorImage');
    const menuLine = document.getElementById('menuLineImage');
    const menuMsg = document.getElementById('menuMsgImage');

    const OneCont = document.getElementById('OneIcon');
    const TwoCont = document.getElementById('TwoIcon');
    const ThreeCont = document.getElementById('ThreeIcon');


    const footInsta = document.getElementById('footInstaIcon');
    const footFb = document.getElementById('footFbIcon');
    const footLinked = document.getElementById('footLinkedIcon');
    const footReddit = document.getElementById('footRedditIcon');

    function updateImages() {
      if (themeRadioButtons[0].checked) {
        lightImage.src = 'images/icons/light light.png';
        darkImage.src = 'images/icons/dark light.png';

        arrowsBlock.src = 'images/icons/arrow light.png';

        menuBlock.src = 'images/icons/block light.png';
        menuDoor.src = 'images/icons/door light.png';
        menuLine.src = 'images/icons/line light.png';
        menuMsg.src = 'images/icons/msg light.png';

        OneCont.src = 'images/icons/one light.png';
        TwoCont.src = 'images/icons/two light.png';
        ThreeCont.src = 'images/icons/three light.png';

        footInsta.src = 'images/icons/Insta light.png';
        footFb.src = 'images/icons/Fb light.png';
        footLinked.src = 'images/icons/Linked light.png';
        footReddit.src = 'images/icons/Reddit light.png';

      } else if (themeRadioButtons[1].checked) {
        lightImage.src = 'images/icons/light dark.png';
        darkImage.src = 'images/icons/dark dark.png';

        arrowsBlock.src = 'images/icons/arrow dark.png';

        menuBlock.src = 'images/icons/block dark.png';
        menuDoor.src = 'images/icons/door dark.png';
        menuLine.src = 'images/icons/line dark.png';
        menuMsg.src = 'images/icons/msg dark.png';

        OneCont.src = 'images/icons/one dark.png';
        TwoCont.src = 'images/icons/two dark.png';
        ThreeCont.src = 'images/icons/three dark.png';

        footInsta.src = 'images/icons/Insta dark.png';
        footFb.src = 'images/icons/Fb dark.png';
        footLinked.src = 'images/icons/Linked dark.png';
        footReddit.src = 'images/icons/Reddit dark.png';
      }
    }

    // Initial update
    updateImages();

    themeRadioButtons.forEach(function (radio) {
      radio.addEventListener('change', updateImages);
    });
  });