import dotenv from "dotenv"
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const fetching_url = "https://api.pexels.com/v1/curated?per_page=80";
const API_KEY = process.env.My_Pexels_API_Key;

app.get("/api/images", async (req, res) => {
    try {
        const image = await fetch(fetching_url, {
            headers: {
                Authorization: API_KEY,
            }
        });

        if(!image.ok){
            throw new error("Failed fetching image");
        }

        const data = await image.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({
            message: "failed fetching images"
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.PORT}`);
});