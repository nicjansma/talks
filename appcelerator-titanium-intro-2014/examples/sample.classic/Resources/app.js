var win = Ti.UI.createWindow({
    title: 'Hello, World!',
    layout: 'vertical',
    backgroundColor: 'white'
});

var helloLabel = Ti.UI.createLabel({
    text: 'Hello World',
    color: 'black',
    font: {
        fontSize: '20sp'
    },
    height: '40dp',
    width: '250dp'
});
win.add(helloLabel);

var helloButton = Ti.UI.createButton({
    title: 'Click me!',
    font: {
        fontSize: '20sp'
    },
    top: '20dp',
    height: '40dp',
    width: '250dp'
});

helloButton.addEventListener('click', function() {
    alert('you clicked me!');
});
win.add(helloButton);

win.open();
