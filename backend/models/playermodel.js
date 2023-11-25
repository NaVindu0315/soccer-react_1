import mongoose from "mongoose";

const schema = mongoose.schema;

export const platerschema = new schema(

    {
        firstname :
        {
            type :String,
            required : true,
        },
        lastname :
        {
            type :String,
            required : true,
        },
        email :
        {
            type :String,
            required : true,
        },
        phone :
        {
            type :Number
        },
        iscoach :
        {
            type :Boolean,
            default : false
        },
        team :
        {
            type :string
        },
        speed:
        {
            type :Number,
            enum : [1,2,3]
        },
        stength:
        {
            type :Number,
            enum : [1,2,3]
        },
        endurance:
        {
            type :Number,
            enum : [1,2,3]
        },
        ability:
        {
            type :Number,
            enum : [1,2,3]
        },
        techniques:
        {
            type :Number,
            enum : [1,2,3]
        },
        tactical:
        {
            type :Number,
            enum : [1,2,3]
        },
        created_date:
        {
            type:Date,
            default :Date.now
        }
    

    }
)