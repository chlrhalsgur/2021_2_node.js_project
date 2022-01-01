const Participating = require('../models/participating')
const Hosting = require('../models/hosting')

let init = async function(req, res){
    let user_data_hosting = await Hosting.findAll({
        where: {
            host_id: req.session.user_id
        }
    })
    let user_data = await Participating.findAll({
        include:[
            {
                model: Hosting,
                required: true
            }
        ],
        where: {
            user_id: req.session.user_id
        },
        order: [[{ model: Hosting },'date', 'ASC']],
    });
    let eventList = [];
    
    for (let i = 0; i < user_data_hosting.length; i++){
        let date = user_data_hosting[i].dataValues.date.split('-');
        let event ={
            "occasion": user_data_hosting[i].dataValues.title,
            "invited_count": user_data_hosting[i].dataValues.num,
            "year": date[0],
            "month": date[1],
            "day": date[2],
        };
        eventList.push(event);
    }
    res.render('calendar', {
        eventList,//
        data_list: user_data,
        data_list_hosting   : user_data_hosting
    });
    // console.log(user_data_hosting[0].dataValues)
}
let getDetails = async function(req, res){
    try{
        const dataP = await Participating.findAll({
            where: {
                h_code: req.params.code
            }
        });
        const dataH = await Hosting.findOne({
            where: {
                code: req.params.code
            }
        });
        res.render('calendar_details',{
            dataP,
            dataH
        })
      }
      catch{ }
}

module.exports = {
    init,
    getDetails
}