
//creating service 
LearnAngJs.factory('eventData', function () {
    return {
        //property
        event: {

                name: 'Angular Tutorial',
                date: '1/1/2015',
                time: '10:30 am',
                location: {
                    address: 'CDN',
                    city: 'Thames',
                    County: 'Oxfordshire'
                },
                imageUrl: '/Img/cdnLogo.jpg',
                sessions: [
                     {
                         name: 'Beginners',
                         duration: 1,
                         Level: 1,
                         Price: 25,
                         totalVote: 0
                     },
                     {
                         name: 'Intermidiate',
                         duration: 2,
                         Level: 'Beginners to Intermediate',
                         Price: 50,
                         totalVote: 0
                     },
                     {
                         name: 'Advance',
                         duration: 3,
                         Level: 3,
                         Price: 100,
                         totalVote: 0
                     }
                ]
            }

    };
});