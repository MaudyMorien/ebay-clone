import { JsonController, Get, Param, Body, Put, NotFoundError, Post, HttpCode } from 'routing-controllers'
import { Ad } from './entity'

@JsonController()
export default class AdController {

    @Get('/ads')
    async allAds() {
        const ads: Ad[] = await Ad.find()
        return { ads }
    }
    
    // @Get('/ads/:id')
    // async getAd(
    //     @Param('id') id: number
    // ) {
    //     const singleAd = await Ad.findOne(id)
    //     if (!singleAd) throw new NotFoundError('Cannot find ad')
    //     return singleAd
    // }

    @Get('/ads/:id')
    getAd(
      @Param('id') id: number
    ) {
      return Ad.findOne(id)
    }

    @Put('/ads/:id')
    async updateAds(
        @Param('id') id: number,
        @Body() update: Partial<Ad>
    ) {
        const updateAd = await Ad.findOne(id)
        if (!updateAd) throw new NotFoundError('Cannot update ad')
        return Ad.merge(updateAd, update).save()
    }
    @Post('/ads')
    @HttpCode(201)
    createAd(
        @Body() ad: Ad
    ) {
        return ad.save()
    }
}
