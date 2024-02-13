import { connect, connection } from 'mongoose';

connect(process.env.MONOGDB_URI || 'mongodb://localhost:3000/Letchkov',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});


export default connection