import { JsonController, Get, Param, Body, Put, NotFoundError, Post, HttpCode } from 'routing-controllers'
import { Ad } from './entity'

@JsonController()
export default class AdController {

    @Get('/ads')
    async allAds() {
        const ad: Ad[] = await Ad.find()
        return ad
    }
    
    @Get('/ads/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Ad.findOne(id)
    }

    @Put('/ads/:id')
    async updatePage(
        @Param('id') id: number,
        @Body() update: Partial<Ad>
    ) {
        const ad = await Ad.findOne(id)
        if (!ad) throw new NotFoundError('Cannot find page')

        return Ad.merge(ad, update).save()
    }
    @Post('/ads')
    @HttpCode(201)
    createAd(
        @Body() ad: Ad
    ) {
        return ad.save()
    }
}
