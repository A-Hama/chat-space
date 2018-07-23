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
      <p class="chat-message__image">
        <img src="${ message.image }">
      </p>
    </li>`
    return html;
    }

    function imageHTML(message){
      var html = `
      <li class="chat-message">
        <div class="chat-message__header clearfix">
          <p class="chat-message__name">${ message.user_name }</p>
          <p class="chat-message__time">${ message.date }</p>
        </div>
        <p class="chat-message__image">
          <img src="${ message.image }">
        </p>
      </li>`
      return html;
    }

    function textHTML(message){
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
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData)
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
      console.log(data)
      if (data.text && data.image){
        var html = buildHTML(data);
      }else if(data.text && data.image === ''){
        var html = textHTML(data);
      }else if (data.text == '' && data.image){
        var html = imageHTML(data);
      }
        $('.chat-messages').append(html);
        $('.form__message').val('');
        $(".form__submit").prop('disabled', false);
        $('.chat-body').animate({scrollTop: $('.chat-body')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('入力してください');
      $(".form__submit").prop('disabled', false);
      $('.form__message').val('');
    })
  });
});

