const Hosting = require('../models/hosting')
const Room = require('../models/room');
const User = require('../models/user');
const Adm = require('../models/adm');

let adm_Login = async function (_, res){
    res.render('adm_Login',{
    });
}
let signin_adm = async function (req, res){
        try{
        const adm = await Adm.findAll({
            where:{
                id: req.body.id,
            }
        });
        if ((adm[0].dataValues.pwd == req.body.pwd) && (adm[0].dataValues.id == req.body.id)) {
            console.log(`administer 로그인`);
    
            req.session.is_adm = true;
            req.session.save(err => {
                if (err) throw err;
                res.redirect(302, '/adm/adm_choose');
            });
        }
        else {
            console.log(`로그인 실패 \n시도1 => id : ${req.body.id}, pwd : ${req.body.pwd}`);
            res.render('adm_Login', { faill: true });
        }
    }
    catch{
        console.log(`로그인 실패 \n시도2 => id : ${req.body.id}, pwd : ${req.body.pwd}`);
        res.render('adm_Login', { faill: true });
    }
}
let logOut = function (req, res){
    req.session.destroy(error => {
        if (error) console.log(error)
    });
    res.redirect(302, '/adm/adm_index');
}

let adm_index = async function (req, res){
    try{
        let user_data = await User.findAll();
    
        res.render('adm_index',{
            user_data: user_data,
            is_adm: req.session.is_adm
        });
    } 
    catch{ }
}
let adm_search = async function (_, res){
    res.render('adm_search',{
    });
}
let adm_meetingList = async function (_, res){
    try{
        let data_list = await Hosting.findAll();
        res.render('adm_meetingList',{
            data_list: data_list,
        });
    }
    catch { }
}
let adm_searchMeeting = async function (_, res){
    res.render('adm_searchMeeting',{
    });
}
let adm_choose = async function (_, res){
    res.render('adm_choose',{
    });
}
let adm_edit = async function (_, res){
    res.render('adm_edit',{
    });
}


let delete_user = async function(req, res){
    try{
        await User.destroy({
            where:{ id: req.body.id }
        }).then(()=>{
            res.render('adm_choose',{ delete_succ: true });
        });
    }
    catch { }
}
let delete_conf = async function(req, res){
    try{
        await Hosting.destroy({
        where:{ code: req.body.code }
        }).then(()=>{
            res.render('adm_choose',{ delete_succ: true });
        });
    }
    catch { }
}
let adm_search_user = async function(req, res){
    try{
        let user_data = await User.findAll({
            where:{
                id: req.body.search_id
            }
        });
        res.render('adm_search',{
            user_data: user_data
        });
    }
    catch { }
}
let adm_search_con = async function(req, res){
    try{
        let hosting_data = await Hosting.findAll({
            where:{
                code: req.body.search_data
            }
        });
        res.render('adm_searchMeeting',{
            hosting_data: hosting_data
        });
    }
    catch { }
}


module.exports = {
    adm_Login,
    adm_index,
    adm_search,
    adm_meetingList,
    adm_searchMeeting,
    adm_choose,
    adm_edit,
    delete_user,
    delete_conf,
    signin_adm,
    adm_search_user,
    adm_search_con,
    logOut
}