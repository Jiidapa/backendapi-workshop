//create shopController
const Setting = require('../models/setting');

exports.index = async (req, res, next) => {
    const setting = await Setting.find();
    return res.status(200).json({
        data: setting
    });
}