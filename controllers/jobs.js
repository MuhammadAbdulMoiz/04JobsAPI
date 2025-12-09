const getAllJobs = async (req, res) => {
    res.send('all jobs');
}

const getJob = async (req, res) => {
    res.send('got a job');
}

const createJob = async (req, res) => {
    res.send('job created');
}

const updateJob = async (req, res) => {
    res.send('job updated');
}

const deleteJob = async (req, res) => {
    res.send('job removed');
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}