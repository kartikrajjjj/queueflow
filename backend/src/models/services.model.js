import {model, Schema } from "mongoose";

const services = new Schema ({
    serviceName:{
        type: String,
        required: true,
        trim : true,
    },
    duration:{
        type: Number,
        required: true,
    }
},{timestamps : true});

const Service = model('Service', services);
export default Service;