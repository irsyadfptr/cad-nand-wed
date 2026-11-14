// Every word Nand reads lives here. Lines marked TODO are placeholders to swap for the real thing.

export const WEDDING_DATE = '2023-12-25T14:30:00+07:00';

export const names = { her: 'Nand', him: 'Cad' };

export const hero = {
    cutout: 'cutouts/laugh.webp',
    tagline: 'A romantic comedy, three years running.',
    line: 'Starring the girl who laughs with her whole face and the guy who still cannot believe his luck.',
};

export const cast = [
    {
        name: 'Nand',
        img: 'cutouts/nand.webp',
        role: 'The lead',
        bio: 'Laughs first, laughs loudest. Wins arcade jackpots on the first try. Has never once lost an argument about where to eat.',
    },
    {
        name: 'Cad',
        img: 'cutouts/cad.webp',
        role: 'The comic relief',
        bio: 'Tells the same joke twice and is proud of it both times. Holds bouquets slightly wrong. Would do every scene again.',
    },
];

// The rom-com, scene by scene. Not a timeline: every rom-com beat, played by us.
export const scenes = [
    {
        title: 'The meet-cute',
        line: 'Graduation, a table of snacks and one very obvious crush. Subtle, he was not.', // TODO: tweak
        img: 'photos/graduation.jpg',
        alt: 'Us at graduation behind a table of gifts and flowers',
    },
    {
        title: 'The grand gesture',
        line: 'White flowers, white stairs, one knee. She laughed so hard he nearly dropped the bouquet.',
        cutout: 'cutouts/stairs.webp',
        alt: 'Cad handing Nand a white bouquet on the stairs while she laughs',
    },
    {
        title: 'The coffee scene',
        line: 'Two cups, one croissant, zero intention of sharing it.',
        img: 'photos/kitchen.jpg',
        alt: 'Nand smiling over a cup of coffee across the table',
    },
    {
        title: 'The big day',
        line: '25 December 2023, Griya Joglo. Everybody cried. Mostly Cad.',
        cutout: 'cutouts/walk.webp',
        alt: 'Walking hand in hand in white, looking back over our shoulders',
    },
    {
        title: 'The dance number',
        line: 'Every rom-com needs one. Ours had a bouquet toss and a crowd that wanted it badly.',
        img: 'photos/toss.jpg',
        alt: 'Nand throwing the bouquet while friends reach for it',
    },
    {
        title: 'The comic relief',
        line: 'We paid to watch stand-up at Balai Sarbini. We had been doing it for free at home for years.',
        img: 'photos/goat.jpg',
        alt: 'Selfie at the GOAT stand-up show',
    },
    {
        title: 'The side quest',
        line: 'Crashed a wedding on Whole Cake Island. Ours went much better.',
        img: 'photos/onepiece.jpg',
        alt: 'Posing in front of the Sanji and Pudding wedding cut-out',
    },
    {
        title: 'The plot twist',
        line: 'She won 150 tickets on her first go. He is still not over it.',
        img: 'photos/arcade.jpg',
        alt: 'Nand holding a 150-ticket roll and laughing behind her hand',
    },
    {
        title: 'The quiet bit',
        line: 'The part with no jokes. Just a window, some lilies and a hand to hold.',
        img: 'photos/holdhands.jpg',
        alt: 'Our hands held across a window seat with white lilies',
    },
    {
        title: 'To be continued',
        line: 'Same window light, same silly grin. Year three is now showing.',
        cutout: 'cutouts/curtain.webp',
        alt: 'Us facing each other in front of a sheer curtain',
    },
];

export const bloopers = [
    { img: 'photos/pizza.jpg', caption: 'Weapon of choice: one pizza spatula', alt: 'Nand hiding half her face behind a pizza spatula' },
    { img: 'photos/window.jpg', caption: 'Visiting hours are over', alt: 'Black and white portrait through a wooden window frame' },
    { img: 'photos/artjog.jpg', caption: 'Two very serious art critics', alt: 'Each of us holding an art receipt over our face' },
    { img: 'photos/train.jpg', caption: "Caught replying 'ok' to a nine-paragraph text", alt: 'Nand on the train, masked, reading her phone' },
    { img: 'photos/reach.jpg', caption: 'Synchronised falling, take four', alt: 'Both of us reaching forward on the floor, laughing' },
    { img: 'photos/park.jpg', caption: 'He said one photo. It was forty.', alt: 'Selfie together under a big tree' },
    { img: 'photos/paper.jpg', caption: 'Hide and seek champion (she lost)', alt: 'Nand smiling behind a paper-panel artwork' },
    { img: 'photos/sofa.jpg', caption: 'Interview with two very cool pairs of sneakers', alt: 'Our feet and sneakers by the sofa in window light' },
];

// The "Find Nand" mini game. x and y are where she is in the photo, as fractions of its size.
export const findNand = {
    img: 'photos/miniature.jpg',
    alt: 'A miniature city of stilt houses and cables, with Nand somewhere behind it',
    x: 0.88,
    y: 0.41,
    radius: 0.14,
    found: 'Found her. She spent forty minutes looking at tiny houses.',
};

export const reviews = [
    { quote: 'Funnier than the stand-up show we paid for.', by: 'Cad, slightly biased' },
    { quote: 'Two thumbs and four paws up.', by: 'The cats' },
    { quote: 'Better than the wedding on Whole Cake Island.', by: 'A pirate, probably' },
    { quote: 'Would marry again. Every single time.', by: 'Cad, definitely biased' },
];

// The ticket counter. Every right answer pays 30 tickets; 150 opens the letter.
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
export const counterSticker = { src: 'cutouts/arcade.webp', alt: 'Nand laughing with her 150-ticket roll' };

// TODO: rewrite this in your own words — this is a placeholder draft.
export const letter = {
    greeting: 'Dear Nand,',
    paragraphs: [
        'Three years ago I sat across from your father, said one long sentence without breathing, and became the luckiest man in Blitar. I have been trying to deserve it ever since.',
        'Thank you for every ordinary day: the pizza dinners, the arcade nights, the shows we laughed through, the quiet mornings by the window. Thank you for the hard days too, for staying soft when things were not.',
        'If our life is a rom-com, I hope it never gets a sequel. I want the first one to just keep going.',
    ],
    closing: 'Happy third anniversary. I love you.',
    signature: 'Cad',
};

// The trailer is rendered from /trailer. Drop your own film at public/video/anniversary.mp4 to replace it.
export const film = {
    own: 'video/anniversary.mp4',
    trailer: 'video/trailer.mp4',
    poster: 'photos/walk.jpg',
};

export const credits = [
    ['Directed by', 'Fate, with notes from both mothers'],
    ['Written by', 'Cad'],
    ['Starring', 'Nand'],
    ['Comic relief', 'Cad, unintentionally'],
    ['Wedding photography', 'Paperlines'],
    ['Venue', 'Griya Joglo, Blitar'],
    ['Catering', 'Every pizza place in town'],
    ['Stunts', 'One arcade claw machine'],
    ['Animal wrangling', 'The cats, who wrangled themselves'],
];
