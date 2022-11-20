var ws = new WebSocket("wss://156.255.1.217:2323");

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
