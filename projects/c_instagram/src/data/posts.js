export const posts = [
    {
        id: 1,
        user: {
            id: 1,
            username: 'marian',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/1.jpg'
        },
        likes: 2,
        likesUsers: [
            {
                id: 2,
                username: 'mateo',
                imageUrl: 'https://randomuser.me/api/portraits/med/men/50.jpg'
            },
            {
                id: 3,
                username: 'adrian',
                imageUrl: 'https://randomuser.me/api/portraits/med/men/100.jpg'
            }
        ],
        text: 'Soooooo cute',
        comments: 5,
        imageUrl: 'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
        liked: true,
        commentsData: [
            {
                id: 1,
                user: {
                    id: 2,
                    username: 'Brenda',
                    imageUrl: 'https://randomuser.me/api/portraits/med/women/6.jpg',
                },
                text: 'So cute!'
            },
            {
                id: 2,
                user: {
                    id: 2,
                    username: 'Alexia',
                    imageUrl: 'https://randomuser.me/api/portraits/med/women/10.jpg',
                },
                text: 'ahhhh!!!'
            },
            {
                id: 3,
                user: {
                    id: 2,
                    username: 'Mishel',
                    imageUrl: 'https://randomuser.me/api/portraits/med/women/4.jpg',
                },
                text: 'I want one!'
            }
        ]

    }
]