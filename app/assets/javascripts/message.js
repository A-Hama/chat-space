$(function(){
  var message_list = $('.chat-message')

  function buildHTML(message){
    var html = `
    <li class="chat-message">
      <div class="chat-message__header clearfix">
        <p class="chat-message__name">${ message.user_name }</p>
        <p class="chat-message__time">${ message.date }</p>
      </div>
      <p class="chat-message__body">${ message.text }</p>
    </li>`
    return html;
    }

  $("#new_message").submit(function(e){
    console.log("test");
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href;
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-messages').append(html);
      console.log(html)
      $('.form__message').val('');
      $(".form__submit").prop('disabled', false);
      $('.chat-body').animate({scrollTop: $('.chat-body')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
  });
});

