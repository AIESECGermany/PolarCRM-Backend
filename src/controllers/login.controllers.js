import { OAuth2Client } from 'google-auth-library';

const LCs = [
    'aachen',
    'augsburg',
    'berlin.hu',
    'berlin.tu',
    'bielefeld',
    'bochum',
    'bonn',
    'braunschweig',
    'bremen',
    'darmstadt',
    'dresden',
    'duesseldorf',
    'frankfurt-main',
    'giessen',
    'goettingen',
    'halle',
    'hamburg',
    'hannover',
    'kaiserslautern',
    'karlsruhe',
    'koeln',
    'leipzig',
    'lueneburg',
    'magdeburg',
    'mainz',
    'mannheim',
    'muenchen',
    'muenster',
    'nuernberg',
    'paderborn',
    'passau',
    'regensburg',
    'stuttgart'
];

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
        const lc = userEmail.split('.', 1)[1].split('@')[0];
        switch(userEmail.split('.')[0]) {
            case 'vptm':
            case 'test':
            case 'lcp':
            case 'tm': {
                console.log(`${userEmail} logged in`);
                return res.status(201).send({ userRole: 'local', lc });
            }
            case 'carlos':
            case 'mcvpim':
                console.log(`${userEmail} logged in`);
                return res.status(201).send({ userRole: 'admin', lc: 'nsb' });
            default: {
                if(LCs.includes(lc)) {
                    console.log(`${userEmail} has tried to login unsuccessfully`);
                    return res.status(500).send({ userRole: 'not-allowed', lc: 'none' });
                } else {
                    console.log(`${userEmail} logged in`);
                    return res.status(201).send({ userRole: 'national', lc: 'nsb' });
                }
            }
                
        }
    } catch(err) {
        return res.status(500).send(err);
    }
};
