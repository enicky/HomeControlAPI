/**
 * Created by nicholase on 31/01/16.
 */
$(function(){
  var clientJoined = function(uuid){
    $('#clients > tbody:last-child').append('<tr><td data-uuid="' + uuid + '">' + uuid + '</td>');
  }

  var clientLeft = function(uuid){
    $($('td[data-uuid="' + uuid + '"]').closest('tr')).remove();
  }

  io.socket.on('pubnubmessage', function(event){
    console.log('[general] socket on PubSubMessage > ', event);
    if(event.data.action == 'join'){
      clientJoined(event.data.uuid);
    }else if(event.data.action == 'leave'){
      clientLeft(event.data.uuid);
    }
  })
  io.socket.get('/pubnubmessage', function(resData, jwres){
    console.log('data : ', resData);
  })
})
