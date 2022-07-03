var ws = new WebSocket("wss://6d70-89-39-107-194.ngrok.io");

ws.onopen = function() {
    var img = document.getElementById('defaultCanvas0');
    ws.send('connected')
};

ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    if(received_msg == 'shot')
    {
        var img = document.getElementById('defaultCanvas0');
        ws.send(img.toDataURL('image/jpeg', 0.3));
    }
};
