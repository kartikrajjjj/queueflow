import {model, Schema} from "mongoose";
import bcrypt from "bcrypt";

const ownerSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
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
    },
    services:[
        {
            serviceName:{
                type: String,
                required: true,
                trim: true,
            },
            duration: {
                type: Number,
                required: true,
            }
        }
    ]
},{timestamps: true});

ownerSchema.pre('save',async function (){
    if (!this.isModified("ownerpassword")) return;
    const hashedOwnerPassword = await bcrypt.hash(this.ownerpassword.toString(),12);
    this.ownerpassword = hashedOwnerPassword;
})

const OwnerModel = model('Owner',ownerSchema);

export default OwnerModel;