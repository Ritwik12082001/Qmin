export const subComponents={
    name:'subComponents',
    title:'Sub Components',
    type:'object',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name: 'identifier',
            title: 'Identifier',
            type: 'string'
        },
        {
            name: 'path',
            title: 'Path',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'
        },
        {
            name:'image',
            title:'Image',
            type:'image'
        },
        {
            name:'nested',
            title:'Nested',
            type:'array',
            of:[{type:'subComponents'}]
        }
    ]
}