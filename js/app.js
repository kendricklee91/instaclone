$(document).ready(function(){
	//jQuery 객체 설정
	var $heart = $('.heart');
	var $addComment = $('.photo_addcomment_area');

	//heart red-empty
	//눌렀을 때 --> 색깔이 바뀌어야
	//눌렀을 때 --> like 수를 늘려야 한다
	$heart.click(function(){
		var likes = $(this).parent().parent().children('.likes_count').children('.likes_num');
		var likesNumber = parseInt(likes.html());
		var newValue;

		if($(this).hasClass('fa-heart-o'))
		{
			newValue = likesNumber + 1;
		}
		else
		{
			newValue = likesNumber - 1;
		}

		likes.html(newValue);

		$(this).toggleClass('fa-heart-o fa-heart');
	});

	//comment adding
	$addComment.keydown(function(event){
		if(event.keyCode == 13)
		{
			var newComment = event.target.value;
			var commentList = $(this).parent().parent().children('.comment_container');
			$(this).val('').blur();
			commentList.append("<li class = 'comment_content'> \ <span class = 'comment_author'>Luke Lee</span>" + "&nbsp" + newComment + "</li>");
		}
	});	
});