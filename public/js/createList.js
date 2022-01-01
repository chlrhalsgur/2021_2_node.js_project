function tableCreate() {
    var tc = new Array();
    var html = '';
    for (let i in data) {
        tc.push(data[i]);
        console.log(data[i]);
    }

    for (key in tc) {
        html += `<tr>`;
        html += '<td>' + tc[key].hall + '</td>';
        html += '<td>' + tc[key].room + '</td>';
        html += '<td>' + tc[key].capacity + '</td>';
        html += '<td><input type="button" value="클릭" id="chooseRoom2"></td>';
        html += '</tr>';
        console.log(tc[key].room)
        console.log("chooseRoom" + key);

    }

    $("#dynamicTbody").empty();
    $("#dynamicTbody").append(html);

}


$('#chooseRoom').click(function () {

    let str1 = ""
    let str2 = ""
    let checkBtn = $(this);

    // checkBtn.parent() : checkBtn의 부모 = <td>
    // checkBtn.parent().parent() : <td>의 부모 = <tr>
    let tr = checkBtn.parent().parent();
    let td = tr.children();

    console.log("클릭한 Row의 모든 데이터 : " + tr.text());

    let hall = td.eq(0).text();
    let room = td.eq(1).text();

    str1 += "<font-weight='bold'>" + hall + "</font>";
    str2 += "<font-weight='bold'>" + room + "</font>";


    $("#selectedHall").html(str1);
    $("#selectedRoom").html(str2);
});







$('#chooseRoom1').click(function () {

    let str1 = ""
    let str2 = ""
    let checkBtn = $(this);

    // checkBtn.parent() : checkBtn의 부모 = <td>
    // checkBtn.parent().parent() : <td>의 부모 = <tr>
    let tr = checkBtn.parent().parent();
    let td = tr.children();

    console.log("클릭한 Row의 모든 데이터 : " + tr.text());

    let hall = td.eq(0).text();
    let room = td.eq(1).text();

    str1 += "<font-weight='bold'>" + hall + "</font>";
    str2 += "<font-weight='bold'>" + room + "</font>";


    $("#selectedHall").html(str1);
    $("#selectedRoom").html(str2);
});

$("#chooseRoom2").click(function () {

    let str1 = ""
    let str2 = ""
    let checkBtn = $(this);

    // checkBtn.parent() : checkBtn의 부모 = <td>
    // checkBtn.parent().parent() : <td>의 부모 = <tr>
    let tr = checkBtn.parent().parent();
    let td = tr.children();

    console.log("클릭한 Row의 모든 데이터 : " + tr.text());

    let hall = td.eq(0).text();
    let room = td.eq(1).text();

    str1 += "<font-weight='bold'>" + hall + "</font>";
    str2 += "<font-weight='bold'>" + room + "</font>";


    $("#selectedHall").html(str1);
    $("#selectedRoom").html(str2);
});

