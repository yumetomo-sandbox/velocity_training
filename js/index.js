(function(){

  $(function(){

    // ボタンがクリックされたらアニメーション
    $('.btn').on('click', function(){
      var target_box = $(this).attr('id');

      // 実行する関数の判別
      switch(target_box){
        case 'box1-btn':
          box1();
          break;
      }
    });

    /**
     * ボックスごとのアニメーション
     */
    function box1(){
      $("#box1").velocity({
          top: 300,
          left:300
        },{
          duration: 1000
        }).velocity({
          width: 300,
          backgroundColor: '#068f9d'
        },{
          duration: 300
        }).velocity({
          rotateZ: '+=3600deg'
        },{
          duration: 100,
          loop: 5
        }).velocity({
          top: 0,
          left: 0,
          width: 100,
          backgroundColor: '#3bdb5a'
        },{
          duration: 1000,
          queue: 'goDefault'
        });

        setTimeout(function(){
          $("#box1").dequeue('goDefault');
        }, 1300);
    }

  });

})();
