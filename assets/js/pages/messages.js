/**
 * Created by nicholase on 31/01/16.
 */
$(function(){
  console.log('messages');
  $('[name="sendmessage"]').on('click', function(e){
    e.preventDefault();
    console.log('send message');
    var uuid = $( "#uuid option:selected" ).val();
    var message = $('[name="message"]').val();
    var targetUrl = '/messages/create?uuid=' +uuid + '&message=' + message + '&from=test';
    $.get(targetUrl, function(data, response){
      console.log('data : ' , data);
    })
  })
})
