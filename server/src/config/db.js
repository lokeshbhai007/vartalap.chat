//three

import mongoose from "mongoose"

export const dbConnect = async () =>{
    try{

        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
        

    }catch(e){
        console.log("Error from mongo db connection : " + e.message);
        process.exit(1)
    }
}