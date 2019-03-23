import { JsonController, Get, Param, Body, Put, NotFoundError, Post, HttpCode } from 'routing-controllers'
import { Add } from './entity'

@JsonController()
export default class AddController {

    @Get('/adds')
    async allAdds() {
        const adds: Add[] = await Add.find()
        return adds
    }
    
    @Get('/adds/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Add.findOne(id)
    }

    @Put('/adds/:id')
    async updatePage(
        @Param('id') id: number,
        @Body() update: Partial<Add>
    ) {
        const add = await Add.findOne(id)
        if (!add) throw new NotFoundError('Cannot find page')

        return Add.merge(add, update).save()
    }
    @Post('/adds')
    @HttpCode(201)
    createAdd(
        @Body() add: Add
    ) {
        return add.save()
    }
}
