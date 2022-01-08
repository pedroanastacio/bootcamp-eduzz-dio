import { Request, Response } from "express";
import shortId from 'shortid';
import { UrlModel } from "../models/Url";

export class UrlController {

    public async shorten(req: Request, res: Response): Promise<void> {
        const { originUrl } = req.body;
        const url = await UrlModel.findOne({ originUrl });

        if(url) {
            res.json(url);
            return;
        }
        
        const hash = shortId.generate();
        const shortUrl = `${process.env.API_URL}/${hash}`;

        const newUrl = await UrlModel.create({ hash, shortUrl, originUrl });

        res.json(newUrl);
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const { hash } = req.params;

        const url = await UrlModel.findOne({ hash: hash });

        if(url) {
            res.redirect(url.originUrl);
            return;
        }

        res.status(400).json({ error: 'URL not found'});
    }
}
