// Everything Nanda reads lives in this file.
// Lines marked TODO are placeholders — swap in the real dates and memories.

export const WEDDING_DATE = '2023-12-25T14:30:00+07:00';

export const names = { her: 'Ananda', him: 'Irsyad', herShort: 'Nanda' };

export const hero = {
    photo: '/photos/laugh.jpg',
    line: 'Three years ago you said yes in front of everyone we love. I still laugh like this every day.',
};

// The story, oldest first. Each entry becomes one ticket on the roll.
export const chapters = [
    {
        date: 'Before everything', // TODO: real year, e.g. "2019"
        title: 'The girl in the black hijab',
        text: 'Graduation day, a table full of snacks and flowers, and me trying very hard to look normal next to you. I think I already knew.', // TODO
        photos: [{ src: '/photos/graduation.jpg', alt: 'Us at graduation behind a table of gifts and flowers' }],
    },
    {
        date: '25 December 2023',
        title: 'Griya Joglo, Blitar',
        text: 'The akad, the long hug, the walk down the aisle, the bouquet in the air. The best day I have ever had, and it was only the first one.',
        photos: [
            { src: '/photos/akad.jpg', alt: 'The akad nikah under the carved wooden backdrop' },
            { src: '/photos/hug.jpg', alt: 'A long hug after the akad' },
            { src: '/photos/entrance.jpg', alt: 'Walking in together, smiling' },
            { src: '/photos/celebration.jpg', alt: 'Throwing the bouquet while everyone cheers' },
        ],
    },
    {
        date: '20 July 2024',
        title: 'GOAT at Balai Sarbini',
        text: 'Front-row energy from the back rows. You laughed so hard you cried, and I mostly watched you laugh.',
        photos: [{ src: '/photos/goat.jpg', alt: 'Selfie at the GOAT stand-up show' }],
    },
    {
        date: 'ARTJOG', // TODO: add the year
        title: 'Receipts as art',
        text: 'Jogja National Museum, a machine that prints art on receipt paper, and two very serious portraits we will never take seriously.',
        photos: [{ src: '/photos/artjog.jpg', alt: 'Each of us holding an RTB art receipt over our face' }],
    },
    {
        date: 'One Piece exhibition', // TODO: add the date
        title: 'Crashing a wedding on Whole Cake Island',
        text: 'Of all the weddings in the Grand Line, we picked the one that went worst. Ours went much better.',
        photos: [{ src: '/photos/onepiece.jpg', alt: 'Posing in front of the Sanji and Pudding wedding cut-out' }],
    },
    {
        date: 'Arcade night', // TODO: add the date
        title: '150 tickets, one jackpot',
        text: 'You won the roll and covered your face like it was embarrassing. It was the best thing I saw all week.',
        photos: [{ src: '/photos/arcade.jpg', alt: 'You holding a roll of 150 arcade tickets, laughing' }],
    },
    {
        date: 'All the ordinary days', // TODO
        title: 'Pizza, windows, trees',
        text: 'Spatulas as props, faces through window frames, selfies under big trees. The small days are my favourite days.',
        photos: [
            { src: '/photos/pizza.jpg', alt: 'You hiding behind a pizza spatula' },
            { src: '/photos/window.jpg', alt: 'Black and white portrait through a wooden window frame' },
            { src: '/photos/park.jpg', alt: 'Selfie together under a big tree' },
        ],
    },
    {
        date: 'Now',
        title: 'Still looking at you like this',
        text: 'Three years in. Same window light, same silly grin.',
        photos: [{ src: '/photos/curtain.jpg', alt: 'Us facing each other in front of a sheer curtain' }],
    },
];

// The ticket counter. Every right answer dispenses 30 tickets; 150 opens the letter.
export const quiz = [
    {
        q: 'Where did we have our akad?',
        options: ['Balai Sarbini, Jakarta', 'Griya Joglo, Blitar', 'Jogja National Museum', 'Bubulak, Bogor'],
        answer: 1,
    },
    {
        q: 'What date did we get married?',
        options: ['30 December 2023', '25 December 2023', '20 July 2024', '14 February 2023'],
        answer: 1,
    },
    {
        q: 'Whose show did we watch on 20 July 2024?',
        options: ['GOAT', 'A Coldplay concert', 'A wayang show', 'A K-pop fan meet'],
        answer: 0,
    },
    {
        q: 'Whose wedding did we photobomb at the One Piece exhibition?',
        options: ['Luffy and Hancock', 'Sanji and Pudding', 'Zoro and Tashigi', 'Big Mom and Kaido'],
        answer: 1,
    },
    {
        q: 'How many tickets were on your famous arcade roll?',
        options: ['50', '100', '150', '1,000'],
        answer: 2,
    },
];

export const TICKETS_PER_ANSWER = 30;

// TODO: rewrite this in your own words — this is a placeholder draft.
export const letter = {
    greeting: 'Dear Nanda,',
    paragraphs: [
        'Three years ago I sat across from your father, said one long sentence without breathing, and became the luckiest man in Blitar. I have been trying to deserve it ever since.',
        'Thank you for every ordinary day: the pizza dinners, the arcade nights, the shows we laughed through, the quiet mornings by the window. Thank you for the hard days too, for staying soft when things were not.',
        'I do not know everything the next years will bring. I know I want to spend every one of them next to you, collecting tickets.',
    ],
    closing: 'Happy third anniversary. I love you.',
    signature: 'Irsyad',
};

// Drop your film at public/video/anniversary.mp4 and it will appear automatically.
export const film = {
    src: '/video/anniversary.mp4',
    poster: '/photos/curtain.jpg',
};
