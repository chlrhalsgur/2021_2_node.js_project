const Participating = require('../models/participating');
const Hosting = require('../models/hosting');
const sequelize = require('sequelize');

let search_p = async function(req, res){
    let data_h = [];
    try {
        data_h = await Hosting.findAll({   
            attributes: [
                'code',
                'date',
                'time',
                'num',
                'title',
                'detail',
                'host_id',
                'room_num',
                'hall',
                [sequelize.fn('COUNT', sequelize.col('h_code')), 'count_code']
            ],
            include: [
                {
                    model: Participating,
                    required: false
                }
            ],
            group: 'h_code',
            where: {
                time: req.query.meetingTime,
                date: req.query.currentDate 
            },
        });
    }
    catch { }
    res.cookie('participating_date', req.query.meetingTime);
    res.cookie('participating_time', req.query.currentDate);
    res.render('join',{
        data_list: data_h
    })
}
let select_p = async function(req, res){
    let user_id_l = 0
    for(i=0; i<req.session.user_id.length; i++){
        user_id_l += Number(req.session.user_id.charCodeAt(i));
    }
    let cod = (Number(req.body.code) * user_id_l) % 1000 ;
    try {
        await Participating.create({
            user_id: req.session.user_id,
            h_code: req.body.code,
            p_code: cod
        }).then(()=>{
            res.render('index',{
                success_participating: true,
                is_user: req.session.is_logined, 
                user_name: req.session.user_name
            });
        }).catch(()=>{
            res.render('join',{
                is_user: req.session.is_logined, 
                user_name: req.session.user_name,
                duplication: true
            });
        })
    } 
    catch { }
}


module.exports = {
    search_p,
    select_p
}