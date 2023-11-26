import mongoose from "mongoose";

import { platerschema } from '../models/playermodel';
import { request } from "express";

const player = mongoose.model('player',platerschema);

export const addnewplayer = (req,res)=>
{
    let newplayer = new player(req.body);
    newplayer.save((err,player) =>
    {
        if (err)
        {
            res.send(err);
        }
        res.json(player);

    }
    );
}

export const getplayer = (req,res)=>
{
    
    player.find({},(err,player) =>
    {
        if (err)
        {
            res.send(err);
        }
        res.json(player);

    }
    );
}

export const getplayerwithid = (req,res)=>
{
    
    player.findById(request.params.playrId,(err,player) =>
    {
        if (err)
        {
            res.send(err);
        }
        res.json(player);

    }
    );
}

export const updateplayer = (req,res)=>
{
    
    player.findOneAndUpdate(request.params.playrId,(err,player) =>
    {
        if (err)
        {
            res.send(err);
        }
        res.json(player);

    }
    );
}