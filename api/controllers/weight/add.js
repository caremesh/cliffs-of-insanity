module.exports = function addWeight(req, res) {
	const add = Weight.create({
		user: req.params.userId,
		pounds: req.body.pounds,
	}).meta({fetch: true});

	return res.status(200).send(add);
};
