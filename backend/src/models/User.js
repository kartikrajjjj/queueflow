import {model, Schema} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    fullname:{
        type: String,
        required: true,
        lowercase: true,
        trim: true 
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true 
    },
    mobile:{
        type: String,
        required: true,
        trim: true 
    },
    password:{
        type: String,
        required: true,
        trim: true 
    },
    role:{
        type: String,
        default: "owner",
        enum: ['owner','staff']
    }
},{timestamps: true});

userSchema.pre('save',async function (next){
    if(!this.isModified("password")){
        return next();
    }
    const hashedPassword = await bcrypt.hash(this.password,12);
    this.password = hashedPassword;
})

const UserModel = model('User',userSchema);

export default UserModel;