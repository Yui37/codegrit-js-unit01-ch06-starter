//合計スコア用の変数
let score = 0;

function showScore(){
//スコア表示の処理をここに記述
}

/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/
const button = document.querySelector('button');
function answerQuiz1(){
//問題1の処理をここに記述
    const quiz_1 = document.getElementById('quiz-1');
    const rightAnswer = quiz_1.answer.value
    switch(rightAnswer){
        case 'a':
            console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
            console.log('正解です');
            console.log('現在のトータルスコア：' + score);
            break;
        case 'b':
            console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
            console.log('不正解です');
            console.log('現在のトータルスコア：' + score);
            break;
        case 'c':
            console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
            console.log('不正解です');
            console.log('現在のトータルスコア：' + score);
            break;
    }
}
quiz_1.answer.value.addEventListener('click',answerQuiz1);

function answerQuiz2(){
//問題2の処理をここに記述
}

function answerQuiz3(){
//問題3の処理をここに記述
}
