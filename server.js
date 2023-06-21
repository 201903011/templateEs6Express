import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running on ${PORT}`));

app.use(express.json());

app.get('/', (req ,res )=>{
res.send("hiii");
}); 

process.on('unhandlededRejection', (error, data) => {
    server.close(() => process.exit(1));
});

