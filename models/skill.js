const skills = [
    {id: 01, skill: 'Javascript', status: 'current'},
    {id: 02, skill: 'HTML', status: 'current'},
    {id: 03, skill: 'CSS', status: 'current'},
    {id: 04, skill: 'Node.js', status: 'in progress'},
    {id: 05, skill: 'Express', status: 'in progress'},
    {id: 06, skill: 'MongoDB', status: 'in progress'},
    {id: 07, skill: 'Solidity', status: 'not started'},
    {id: 08, skill: 'Web3', status: 'not started'},
    {id: 09, skill: 'IPFS', status: 'not started'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 100000;
    skill.status = 'not started';
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}