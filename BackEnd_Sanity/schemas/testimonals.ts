export default {
    name:'testimonals',
    title: 'Testimonals',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'institution',
            title: 'Institution',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hosspot: true
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ]
}