import {addnewplayer,
    getplayer,
    getplayerwithid

} from '../controllers/playercontrollers';

const routes = (app) =>
{
    app.route('/players')
    //get end point
    .get(getplayer)
    //this is the post end point 
    .post(addnewplayer);

    app.route('/player/:plyerID')
        .get(getplayerwithid)
}

export default routes;