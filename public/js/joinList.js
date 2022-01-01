function tableCreate2() {

    var tc = new Array();
    var html = '';
    for (let i in data) {
        tc.push(data[i]);
        console.log(data[i]);
    }
    tc.push({ host: 'kim', place: '갈멜관', room: '@@교수님방', fromTime: 50 });
    tc.push({ host: 'park', place: '일립관', room: '4층 강의실', fromTime: 40 });
    tc.push({ host: 'yun', place: '복음관', room: 'ㅁㄹ', fromTime: 42 });
    tc.push({ host: 'choi', place: '갈멜관', room: '실습실', fromTime: 41 });


    for (key in tc) {
        html += '<tr>';
        html += '<td>' + tc[key].host + '</td>';
        html += '<td>' + tc[key].place + '</td>';
        html += '<td>' + tc[key].room + '</td>';
        html += '<td>' + tc[key].fromTime + '</td>';
        html += '<td><input type="submit" value="참가" class="participation"  id="participation' + key + '"></td>';
        html += '</tr>';
    }

    $("#dynamicTbody2").empty();
    $("#dynamicTbody2").append(html);

}


