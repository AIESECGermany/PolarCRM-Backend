import { OAuth2Client } from 'google-auth-library';

async function verifyUser(token) {
    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URI
      );
    const CLIENT_ID = process.env.CLIENT_ID;
    try {
        const ticket = await oAuth2Client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['email'];
        const domain = payload['hd'];
        if(domain !== 'aiesec.de') throw new Error('User not member of AIESEC Germany');
        else return userid;
    } catch(err) {
        console.log(err);
    }
}

export const loginUser = async (req, res) => {
    try {
        const { token } = req.body;
        const userEmail = await verifyUser(token);
        console.log(`${userEmail} logged in`);
        switch(userEmail.split('.')[0]) {
            //other vps, and team accounts are defaulting, this needs to be changed
            case 'vptm':
            case 'lcp':
            case 'tm':
                return res.status(201).send({ userRole: "local" });
            case 'carlos':
            case 'mcvpim':
                return res.status(201).send({ userRole: "admin" });
            default:
                return res.status(201).send({ userRole: "national" });
        }
    } catch(err) {
        return res.status(500).send(err);
    }
}
