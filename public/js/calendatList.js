function tableCreate3() {

    var tc = new Array();
    var html = '';
    for (let i in data) {
        tc.push(data[i]);
        console.log(data[i]);
    }

    for (key in tc) {
        html += '<tr>';
        html += '<td>' + tc[key].host + '</td>';
        html += '<td>' + tc[key].place + '</td>';
        html += '<td>' + tc[key].room + '</td>';
        html += '<td>' + tc[key].fromTime + '</td>';
        html += '<td><input type="submit" value="삭제" id="delete"></td>';
        html += '</tr>';
        console.log(data[key]);

        $("#dynamicTbody3").empty();
        $("#dynamicTbody3").append(html);
    }
}

function tableCreate4() {

    var tc = new Array();
    var html = '';
    for (let i in data) {
        tc.push(data[i]);
        console.log(data[i]);
    }

    for (key in tc) {
        html += '<tr>';
        html += '<td>' + tc[key].host + '</td>';
        html += '<td>' + tc[key].place + '</td>';
        html += '<td>' + tc[key].room + '</td>';
        html += '<td>' + tc[key].fromTime + '</td>';
        html += '<td><input type="submit" value="삭제" id="delete"></td>';
        html += '</tr>';
        console.log(data[key]);

        $("#dynamicTbody3").empty();
        $("#dynamicTbody3").remove(html);
    }
}

