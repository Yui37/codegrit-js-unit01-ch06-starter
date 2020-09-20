//合計スコア用の変数
let score = 0;

/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/
function answerQuiz1(){
//問題1の処理をここに記述
    const quiz_1 = document.getElementById('quiz-1');
    const answer_1 = quiz_1.answer.value;
    if ( answer_1 = 'a' ){
        console.log(`1問目の ${quiz_1.answer.value} を選択しました`);
        console.log('不正解です');
        console.log(`現在のトータルスコア： ${score} `);
    } else if (answer_1 = 'b') {
        console.log(`1問目の ${quiz_1.answer.value} を選択しました`);
        console.log('正解です');
        // console.log(`現在のトータルスコア： ${score = score + 1} `);
        console.log(`現在のトータルスコア： ${++score} `);
    } else if (answer_1 = 'c') {
        console.log(`1問目の ${quiz_1.answer.value} を選択しました`);
        console.log('不正解です'); 
        console.log(`現在のトータルスコア： ${score} `);
    } else {
        console.log('1問目の回答が選択されていません');
        console.log('未回答です');
    }
}
    // switch(answer_1){
    //     case 'a':
    //         console.log(`1問目の ${quiz_1.answer.value} を選択しました`);
    //         console.log('不正解です');
    //         console.log(`現在のトータルスコア： ${score} `);
    //         break;
    //     case 'b':
    //         console.log(`1問目の ${quiz_1.answer.value} を選択しました`);
    //         console.log('正解です');
    //         // console.log(`現在のトータルスコア： ${score = score + 1} `);
    //         console.log(`現在のトータルスコア： ${++score} `);
    //         break;
    //     case 'c':
    //         console.log(`1問目の ${quiz_1.answer.value} を選択しました`);
    //         console.log('不正解です'); 
    //         console.log(`現在のトータルスコア： ${score} `);
    //         break;
    //     default:
    //         console.log('1問目の回答が選択されていません');
    //         console.log('未回答です');
    //         break;
    // }

function answerQuiz2(){
//問題2の処理をここに記述
    const quiz_2 = document.getElementById('quiz-2');
    const answer_2 = quiz_2.answer.value;
    switch(answer_2){
        case 'a':
            console.log(`2問目の ${quiz_2.answer.value} を選択しました`);
            console.log('正解です');
            console.log(`現在のトータルスコア： ${++score} `);
            break;
        case 'b':
            console.log(`2問目の ${quiz_2.answer.value} を選択しました`);
            console.log('不正解です');
            console.log(`現在のトータルスコア： ${score} `);
            break;
        case 'c':
            console.log(`2問目の ${quiz_2.answer.value} を選択しました`);
            console.log('不正解です');
            console.log(`現在のトータルスコア： ${score} `);
            break;
        default:
            console.log('2問目の回答が選択されていません');
            console.log('未回答です');
            break;
    }
}

function answerQuiz3(){
//問題3の処理をここに記述
    const quiz_3 = document.getElementById('quiz-3');
    const answer_3 = quiz_3.answer.value;
    switch(answer_3){
        case 'a':
            console.log(`3問目の ${quiz_3.answer.value} を選択しました`);
            console.log('不正解です');
            console.log(`現在のトータルスコア： ${score} `);
            break;
        case 'b':
            console.log(`3問目の ${quiz_3.answer.value} を選択しました`);
            console.log('不正解です');
            console.log(`現在のトータルスコア： ${score} `);
            break;
        case 'c':
            console.log(`3問目の ${quiz_3.answer.value} を選択しました`);
            console.log('正解です');
            console.log(`現在のトータルスコア： ${++score} `);
            break;
        default:
            console.log('3問目の回答が選択されていません');
            console.log('未回答です');
            break;
    }
}

function showScore(){
    //スコア表示の処理をここに記述

    if(score >= 3){
        document.getElementById('score-message').innerHTML = `<p>${score}点；すばらしい！</p>`;
    }else if(score >= 2){
        document.getElementById('score-message').innerHTML = `<p>${score}点；おしい！</p>`;
    }else if(score >= 1){
        document.getElementById('score-message').innerHTML = `<p>${score}点；まあまあ</p>`;
    }else if(score <= 0){
        document.getElementById('score-message').innerHTML = `<p>${score}点；残念</p>`;
    }       
}