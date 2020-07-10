$(function(){
  
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Messagebox" data-message-id=${message.id}>
          <div class="Messageinfo">
            <div class="Messageinfo__username">
              ${message.user_name}
            </div>
            <div class="Messageinfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Messagebox" data-message-id=${message.id}>
        <div class="Messageinfo">
          <div class="Messageinfo__username">
            ${message.user_name}
          </div>
          <div class="Messageinfo__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Messagespace').append(html);      
      $('form')[0].reset();
      $('.Messagespace').animate({ scrollTop: $('.Messagespace')[0].scrollHeight});
    })
    .always(function(data){
      $('.Form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
  
});

