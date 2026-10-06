import {model, Schema} from "mongoose";
import bcrypt from "bcrypt";

const ownerSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        trim: true,
        unique: true,
    },
    businessname:{
        type: String,
        required: true,
        trim: true,
    },
    ownerpassword:{
        type: String,
        required: true,
        trim: true 
    }
},{timestamps: true});

ownerSchema.pre('save',async function (){
    const hashedOwnerPassword = await bcrypt.hash(this.ownerpassword.toString(),12);
    this.ownerpassword = hashedOwnerPassword;
})

const OwnerModel = model('Owner',ownerSchema);

export default OwnerModel;