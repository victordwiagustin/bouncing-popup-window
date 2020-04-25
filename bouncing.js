let myWindow;

function openWin() {
    myWindow = window.open("", "myWindow", "width=200, height=100");
    myWindow.document.write(`<img style="max-height: 70px; display: block; margin: 0 auto;" src='epic-face.png' />`);

    const myWindowHeight = 100;
    const myWindowWidth = 200;

    const limitTop = 0;
    const limitBottom = screen.height - myWindowHeight - 50;
    const limitLeft = 0;
    const limitRight = screen.width - myWindowWidth - 50;

    let xPos = 0;
    let yPos = 0;

    let down = true;
    let right = true;

    let movingWindow = setInterval(function () {
        xPos = right ? xPos + 2 : xPos - 2;
        yPos = down ? yPos + 10 : yPos - 5;

        if (down && yPos >= limitBottom) {
            down = false;
        } else if (!down && yPos <= limitTop) {
            down = true;
        }

        if (right && xPos >= limitRight) {
            right = false;
        } else if (!right && xPos <= limitLeft) {
            right = true;
        }

        // console.log('X: ' + xCor + ', Y: ' + yCor);
        console.log(xPos);

        myWindow.resizeTo(myWindowWidth, myWindowHeight);
        myWindow.moveTo(xPos, yPos);
        myWindow.focus();
    }, 10);

    myWindow.onbeforeunload = function () {
        clearInterval(movingWindow)
    }
}