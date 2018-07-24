$(function(){
  function buildHTML(message){
    var image = message.image ? `<img src=${ message.image }>` : " ";
    var html = `
    <li class="chat-message">
      <div class="chat-message__header clearfix">
        <p class="chat-message__name">${ message.user_name }</p>
        <p class="chat-message__time">${ message.date }</p>
      </div>
      <p class="chat-message__body">${ message.text }</p>
      <p class="chat-message__image">
          ${ image }
      </p>
    </li>`
    return html;
  }

  function scrollTop(){
    $('.chat-body').animate({scrollTop: $('.chat-body')[0].scrollHeight}, 'fast');
  }

  $("#new_message").submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
        var html = buildHTML(data);
        $('.chat-messages').append(html);
        $('#new_message')[0].reset();
        $(".form__submit").prop('disabled', false);
        scrollTop();
    })
    .fail(function(){
      alert('error');
      $(".form__submit").prop('disabled', false);
      $('.new_message').val('');
    })
  });
});
