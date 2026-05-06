//three

import mongoose from "mongoose"

export const dbConnect = async () =>{
    try{

        const URI = process.env.MONGO_URI
        if(!URI) throw new Error("MONGO_URI is not set")

        await mongoose.connect(URI);
        console.log("DB connected");
        

    }catch(e){
        console.log("Error from mongo db connection : " + e.message);
        process.exit(1)
    }
}