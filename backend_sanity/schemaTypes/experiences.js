import {defineField, defineType} from 'sanity'
import {WorkExperience} from './workExperience'

export const Experiences = defineType({
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string'
        }),
        defineField({
            name: 'month',
            title: 'Month',
            type: 'string'
        }),
        defineField({
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [WorkExperience]
        })
    ]
})