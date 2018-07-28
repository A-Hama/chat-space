$(function(){
  var search_list = $('#user-search-result');

  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`

    search_list.append(html);
  }

  function addUserToGroup(userId, userName){
    var newHtml = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                      <input id = "user-name-field" name='group[user_ids][]' type='hidden' value='${ userId }'>
                        <p class='chat-group-user__name'>${ userName }</p>
                        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                      </div>`
      $('#chat-group-users').append(newHtml)
  }

  function appendNoUser(user){
    var html = `<div class="chat-group-user clearfix">
                   <p class="chat-group-user__name">${ user }
                </div>`

    search_list.append(html);
  }


  $('#user-search-field').on("keyup", function(){
    var input = $('#user-search-field').val();

    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      $(search_list).empty();
        if (users.length !== 0){
          users.forEach(function(user){
            appendUser(user)
          })
        }
        else{
          appendNoUser('該当するユーザーはいません。');
        }
    })

    .fail(function(){
      alert('ユーザー検索に失敗しました')
    })
  });


  $('.chat-group-form__action-btn').on("click", function(){
    e.preventDefault();
    var formData = new FormData(this);
    var url = window.location.origin + '/groups';

    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });

  $(document).on("click", ".user-search-add", function(){
    var userId = $(this).data('user-id');
    var userName = $(this).data('user-name')
    addUserToGroup(userId, userName);
  });

  $(document).on("click", ".user-search-remove", function(){
    $($(this).parent()).remove();
  });
});
