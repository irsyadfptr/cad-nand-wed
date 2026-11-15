// Every word Nand reads lives here. Lines marked TODO are placeholders to swap for the real thing.

export const WEDDING_DATE = '2023-12-25T14:30:00+07:00';

export const names = { her: 'Nand', him: 'Cad' };

export const hero = {
    cutout: 'cutouts/laugh.webp',
    kicker: 'Happy third anniversary',
    line: 'Three years, one wedding, a thousand inside jokes and far too many cat videos sent at 2am.', // TODO: tweak
};

// "Meet the cats": the two of us, as cats.
export const cats = [
    {
        name: 'Nand',
        tone: 'red',
        photo: 'photos/arcade.jpg',
        alt: 'Nand laughing behind her hand, holding a 150-ticket arcade roll',
        breed: 'Rare laughing cat',
        likes: 'Pizza, arcade jackpots, winning every argument about dinner.',
        dislikes: 'Being hungry. Being told "five more minutes".',
    },
    {
        name: 'Cad',
        tone: 'ink',
        photo: 'photos/cad.jpg',
        alt: 'Cad sitting on the floor, smiling at the camera',
        breed: 'Domestic goofball',
        likes: 'Nand. Telling the same joke twice. Holding bouquets slightly wrong.',
        dislikes: 'Losing to Nand at the arcade. Which is always.',
    },
];

// "Purr-fect moments": the gallery. Funny and sweet, in no particular order.
export const moments = [
    { img: 'photos/walk.jpg', caption: 'Griya Joglo, 25 December 2023. Married, and still giggling.', alt: 'Walking hand in hand in white, looking back over our shoulders' },
    { img: 'photos/stairs.jpg', caption: 'The bouquet. She laughed so hard he nearly dropped it.', alt: 'Cad handing Nand a white bouquet on the stairs while she laughs' },
    { img: 'photos/graduation.jpg', caption: 'Before everything: snacks, flowers and one very obvious crush.', alt: 'Us at graduation behind a table of gifts and flowers' },
    { img: 'photos/kitchen.jpg', caption: 'Two cups, one croissant, zero intention of sharing.', alt: 'Nand smiling over a cup of coffee across the table' },
    { img: 'photos/hug.jpg', caption: 'The longest hug of the whole day.', alt: 'A long hug after the akad' },
    { img: 'photos/goat.jpg', caption: 'We paid to watch stand-up. We do it for free at home.', alt: 'Selfie at the GOAT stand-up show' },
    { img: 'photos/toss.jpg', caption: 'Bouquet toss. Everyone wanted it very badly.', alt: 'Nand throwing the bouquet while friends reach for it' },
    { img: 'photos/onepiece.jpg', caption: 'Crashed a wedding on Whole Cake Island. Ours went better.', alt: 'Posing in front of the Sanji and Pudding wedding cut-out' },
    { img: 'photos/ringhands.jpg', caption: 'Two rings and one very nervous groom.', alt: 'Our hands with wedding rings over the lace dress' },
    { img: 'photos/holdhands.jpg', caption: 'The quiet bits are my favourite bits.', alt: 'Our hands held across a window seat with white lilies' },
    { img: 'photos/doorway.jpg', caption: 'Just us, in a doorway, for one second.', alt: 'Our silhouettes, foreheads touching, in a bright doorway' },
    { img: 'photos/curtain.jpg', caption: 'Year three. Same window light, same silly grin.', alt: 'Us facing each other in front of a sheer curtain' },
];

// "Cat-astrophes": the bloopers.
export const bloopers = [
    { img: 'photos/pizza.jpg', caption: 'Weapon of choice: one pizza spatula', alt: 'Nand hiding half her face behind a pizza spatula' },
    { img: 'photos/window.jpg', caption: 'Visiting hours are over', alt: 'Black and white portrait through a wooden window frame' },
    { img: 'photos/artjog.jpg', caption: 'Two very serious art critics', alt: 'Each of us holding an art receipt over our face' },
    { img: 'photos/train.jpg', caption: "Caught replying 'ok' to a nine-paragraph text", alt: 'Nand on the train, masked, reading her phone' },
    { img: 'photos/reach.jpg', caption: 'Synchronised falling, take four', alt: 'Both of us reaching forward on the floor, laughing' },
    { img: 'photos/park.jpg', caption: 'He said one photo. It was forty.', alt: 'Selfie together under a big tree' },
    { img: 'photos/paper.jpg', caption: 'Hide and seek champion (she lost)', alt: 'Nand smiling behind a paper-panel artwork' },
    { img: 'photos/sofa.jpg', caption: 'Two very cool pairs of sneakers', alt: 'Our feet and sneakers by the sofa in window light' },
];

// The "Find Nand" mini game. x and y are where she is in the photo, as fractions of its shown size.
export const findNand = {
    img: 'photos/miniature.jpg',
    alt: 'A miniature city of stilt houses and cables, with Nand somewhere behind it',
    x: 0.88,
    y: 0.41,
    radius: 0.14,
    found: 'Found her! The cat found her faster, but still.',
};

// "Three years in numbers". The day count is added live.
export const numbers = [
    { value: '1', label: 'wedding, the best day ever' },
    { value: '150', label: 'arcade tickets, on the first try' },
    { value: '2', label: 'people who laugh at the same dumb things' },
    { value: '∞', label: 'pizza dinners still to go' },
];

// "Feed the cats": every right answer drops a fish in the bowl. Five fish open the letter.
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

// TODO: rewrite this in your own words — this is a placeholder draft.
export const letter = {
    greeting: 'Dear Nand,',
    paragraphs: [
        'Three years ago I sat across from your father, said one long sentence without breathing, and became the luckiest man in Blitar. I have been trying to deserve it ever since.',
        'Thank you for every ordinary day: the pizza dinners, the arcade nights, the shows we laughed through, the quiet mornings by the window. Thank you for the hard days too, for staying soft when things were not.',
        'They say cats have nine lives. I would spend every one of them with you.',
    ],
    closing: 'Happy third anniversary. I love you.',
    signature: 'Cad',
};

// The little film is rendered from /trailer. Drop your own at public/video/anniversary.mp4 to replace it.
export const film = {
    own: 'video/anniversary.mp4',
    rendered: 'video/trailer.mp4',
    poster: 'photos/walk.jpg',
};
