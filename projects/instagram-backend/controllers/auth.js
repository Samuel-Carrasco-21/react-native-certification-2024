const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await auth().signInWithEmailAndPassword(email, password);
        res.send(user);
    } catch (error) {
        console.error('Error signing in: ', error);
        res.send('Whoops! something went wrong!');
    }
}

export { login };