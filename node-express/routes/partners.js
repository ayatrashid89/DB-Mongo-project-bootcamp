const express = require('express');
const partnersRouter = express.Router();

partnersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partnerss to you');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partnerss');
})
.delete((req, res) => {
    res.end('Deleting all partnerss');
});

partnersRouter.route('/:partnersId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the partners: ${req.params.partnersId} to you`);
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.params.partnersId}  ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /partnerss ${req.params.partnersId}`);
})
.delete((req, res) => {
    res.end(`Deleting partnerss ${req.params.partnersId}`);
});

module.exports = partnersRouter;