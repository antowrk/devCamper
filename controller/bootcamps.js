// @desc      Get All Bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all Bootcamps' });
}


// @desc      Get A Single Bootcamps
// @route     GET /api/v1/bootcamps/id
// @access    Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show Single Bootcamps' });
}


// @desc      Post a New Bootcamps
// @route     POST /api/v1/bootcamps
// @access    Private
exports.postBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Post a New Bootcamp' });
}


// @desc      Update a  Bootcamps
// @route     PUT /api/v1/bootcamps/id
// @access    Private
exports.putBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Update a Bootcamps' });
}


// @desc      Delete All Bootcamps
// @route     DELETE /api/v1/bootcamps
// @access    Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Delete a Bootcamp' });
}