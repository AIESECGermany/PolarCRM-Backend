export const upload = async (req, res) => {
    try {
        return res.status(201).send();
    } catch(err) {
        console.log(err);
        return res.status(500).send(err);
    }
};
