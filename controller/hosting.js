const Room = require('../models/room');
const Hosting = require('../models/hosting');
const Participating = require('../models/participating');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let search_h = async function(req, res){
    let occupied = [];
    try {
        occupied = await Hosting.findAll({
            where: {
                date: req.query.currentDate,
                time: req.query.meetingTime,
            }
        });
        if(occupied[0] == undefined){
            room_list = await Room.findAll({
                attributes:[
                    'hall',
                    'room_num',
                    'capacity'
                ]
            });
        }else{
            room_list = await Room.findAll({
                attributes:[
                    'hall',
                    'room_num',
                    'capacity'
                ],
                where:{
                    [Op.not]:[
                        {hall: occupied[0].dataValues.hall},
                        {room_num: occupied[0].dataValues.room_num}
                    ]
                }
            });
        }
    }
    catch { }

    res.cookie('hosting_date', req.query.currentDate);
    res.cookie('hosting_time', req.query.meetingTime);
    res.cookie('hosting_room_list', room_list);

    res.render('create',{
        room_list,
        date: req.query.currentDate,
        time: req.query.meetingTime
    })
}
let select_room = function(req, res){
    res.cookie('hosting_room_num', req.query.room);
    res.render('create',{
        room_list: req.cookies.hosting_room_list,
        room: req.query.room,
        time: req.cookies.hosting_time,
        date: req.cookies.hosting_date
    })   
}
let apply = async function(req, res){
    let today = new Date(); 
    let code_h = today.getMilliseconds();
    Hosting.create({
        code: code_h,
        date: req.cookies.hosting_date,
        time: req.cookies.hosting_time,
        num: req.body.num,
        title: req.body.title,
        detail: req.body.details,
        host_id: req.session.user_id,
        room_num: req.cookies.hosting_room_num.slice(-3),
        hall: req.cookies.hosting_room_num.substring(0, 3)
    });
    
    Participating.create({
        user_id: req.session.user_id,
        h_code: code_h,
        p_code: today.getMilliseconds()
    });

    res.render('index',{
        hosting_success: true,
        is_user: req.session.is_logined, 
        user_name: req.session.user_name
    })
}

module.exports = {
    search_h,
    select_room,
    apply
}