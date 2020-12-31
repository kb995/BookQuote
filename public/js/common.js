// 削除処理
function deleteBook(e) {
    'use strict';
    if (confirm('本当に削除しますか?')) {
        document.getElementById('delete_book_' + e.dataset.id).submit();
    }
}
function deleteMemo(e) {
    'use strict';
    if (confirm('本当に削除しますか?')) {
        document.getElementById('delete_memo_' + e.dataset.id).submit();
    }
}


// 画像アップロードリアルタイム表示
function previewImage(obj)
{
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('preview').src = fileReader.result;
	});
	fileReader.readAsDataURL(obj.files[0]);
}

// 文字数カウント
function strLimit($limit) {
    'use strict';

    var memo = document.getElementById('memo');
    var label = document.getElementById('label');

    var LIMIT = $limit;
    var WARNING = 30;

    var remaining = LIMIT - memo.value.length;
    label.innerHTML = remaining;
    if (remaining < WARNING) {
        label.className = 'count_warning';
    } else {
        label.className = '';
    }
    if(remaining < 0) {
        label.className = 'count_danger';
    }
}
