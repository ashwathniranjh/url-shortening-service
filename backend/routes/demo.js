const express = require('express');
const router = express.Router();
const validUrl = require('valid-url')
const shortid = require('shortid')
const Url = require('../models/urls')
const RequestIp = require('@supercharge/request-ip')


router.get('/', (req,res) => {
    console.log('demo route reached.');
    res.send('hello!!');
})

router.post('/shorter', async (req, res) => {
    //console.log(req);
    const {longUrl} = req.body;
    const userIP = RequestIp.getClientIp(req)

    if(!validUrl.isUri('http:localhost:5000')){
        return res.status(401).json('Invalid base URL')
    }
    const urlCode = shortid.generate();
     
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({
                longUrl
            })
            let shortUrl = 'http:localhost:5000' + '/' + urlCode;
            if(url){
                while(shortUrl == url){
                    shortUrl = 'http:localhost:5000' + '/' + urlCode;
                }
            }
            url = new Url({
                userIP,
                longUrl,
                shortUrl,
                urlCode,
                date: new Date()
            })
            await url.save()
            res.json(url)
        }
        catch(err){
            console.log(err)
            res.status(500).json('Server Error')
        }
    }
    else {
        res.status(401).json('Invalid longUrl')
    }
})

router.get('/:code', async (req, res) => {
    try {
        // find a document match to the code in req.params.code
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if (url) {
            // when valid we perform a redirect
            return res.redirect(url.longUrl)
        } else {
            // else return a not found 404 status
            return res.status(404).json('No URL Found')
        }

    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})

module.exports = router;