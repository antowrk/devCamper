const Bootcamp = require('../models/Bootcamp');


// @desc      Get All Bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}


// @desc      Get A Single Bootcamps
// @route     GET /api/v1/bootcamps/id
// @access    Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        
        if (!bootcamp) {
            return res.status(400).json({ success: false });   
        }

        res.status(400).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}


// @desc      Post a New Bootcamps
// @route     POST /api/v1/bootcamps
// @access    Private
exports.postBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}


// @desc      Update a  Bootcamps
// @route     PUT /api/v1/bootcamps/id
// @access    Private
exports.putBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!bootcamp) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}


// @desc      Delete All Bootcamps
// @route     DELETE /api/v1/bootcamps
// @access    Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}