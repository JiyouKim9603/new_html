let express = require('express');   //웹서버를 돌려주는 코드
let app = express();                //웹서버를 돌려주는 코드
let router = require('./router/main')(app);     //main.js가 실행
let port = process.env.PORT || 3000;            // 포트번호는 3000번 할당

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));  //css와 js로 구성

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
