import { prop, getModelForClass } from '@typegoose/typegoose';

export class Url {
    @prop()
    public hash!: string

    @prop()
    public originUrl!: string

    @prop()
    public shortUrl!: string
}

export const UrlModel = getModelForClass(Url);