import type { IMemo } from "./types/common";

export const PREVIEW_MEMO_LENGTH = 100;
export const AUTO_SAVE_DELAY = 1000;
export const SPEECH_RECOGNITION_LANG = "en-US";

export const LS_KEY = {
  MEMOS: "LS_MEMOS_KEY",
};

export const MOCK_LIST = [
  {
    id: "1",
    createdAt: "2025-07-30T16:23:00.000Z",
    updatedAt: "2025-07-30T17:10:45.000Z",
    body: "Lorem ipsum mauris Vivamus quam Quisque est eu morbi urna elit eget vitae blandit fames tempor id ante interdum volutpat vel Donec auctor imperdiet dictum cursus dolor urna posuere Vestibulum nibh Suspendisse vel dolor molestie ac Duis Quisque scelerisque molestie malesuada Maecenas ante adipiscing posuere molestie faucibus vitae sollicitudin mi vel ullamcorper lacinia laoreet efficitur consectetur Curabitur id eleifend dictum odio tortor sollicitudin Fusce aliquam Nullam auctor ex adipiscing pharetra Curabitur aliquet aliquam aliquet auctor lobortis ullamcorper pellentesque Nam posuere efficitur aliquam Curabitur Pellentesque blandit feugiat elementum ac Sed Donec maximus Sagittis tincidunt Pellentesque Vestibulum sed gravida fermentum elementum at est Aliquam volutpat tempus accumsan ligula lacinia dignissim fames facilisis quis rhoncus Maecenas Donec Quisque convallis volutpat quis vitae Aliquam imperdiet urna efficitur feugiat euismod sagittis dolor porta libero lectus dui odio ut Donec dignissim ligula libero vehicula gravida pharetra Nam felis vehicula cursus Pellentesque magna a ex elementum Proin eget ultricies neque odio finibus rhoncus Donec Nam Aenean suscipit at Mauris eros Nam gravida Aenean erat suscipit euismod id Etiam odio Vestibulum Aliquam molestie velit Quisque porttitor arcu Sed suscipit Etiam Phasellus porta molestie pulvinar pharetra sagittis purus dictum Nulla Vestibulum lacus commodo facilisis eu malesuada dolor molestie vehicula lacinia odio Aliquam interdum sollicitudin pharetra purus molestie facilisis eros feugiat malesuada nibh morbi vel ex lobortis nec porta tincidunt Quisque Nunc rhoncus Sed Vestibulum erat Morbi porta Proin aliquam facilisis dignissim ultricies Vestibulum eget Pellentesque molestie sem rhoncus Curabitur In Suspendisse vitae bibendum sed Pellentesque Aenean potenti elit Nunc Pellentesque quis rhoncus et orci molestie Donec vitae enim sem volutpat Fusce elit malesuada Pellentesque neque facilisis nec quam Pellentesque volutpat ante velit blandit Phasellus Mauris tristique Proin ante euismod id neque Donec erat dolor laoreet molestie tellus elit vitae Vivamus leo Vestibulum laoreet malesuada venenatis sempit sit eget quis pharetra Nam elementum netus pellentesque ex vehicula posuere molestie arcu Curabitur leo mauris eget Pellentesque congue Vivamus viverra Integer nisl suscipit Suspendisse aliquam eget vel vehicula euismod Sed Integer sollicitudin lobortis Curabitur Pellentesque blandit tristique elementum Sed elit viverra facilisis massa Pellentesque pulvinar Fusce ac accumsan pulvinar nibh consectetur erat Sed turpis amet dictum laoreet vitae eu dapibus arcu neque nisl ultricies Praesent fermentum amet lobortis nec Vestibulum tincidunt ante Phasellus sollicitudin ex ultrices vehicula a In Nulla Donec fringilla ut tristique convallis cursus a volutpat ex aliquet Duis pulvinar eleifend sollicitudin at posuere sem dolor malesuada amet In porta Sed Vestibulum leo pulvinar sed iaculis egestas interdum tincidunt eget molestie venenatis dolor odio Phasellus Curabitur facilisis elementum Pellentesque auctor Vestibulum quis consectetur netus dolor Pellentesque Integer facilisis Etiam In sodales Sed Phasellus luctus finibus blandit malesuada molestie metus Quisque rhoncus euismod Aenean Curabitur molestie arcu pellentesque sagittis vulputate dolor sollicitudin eros In suscipit viverra accumsan tristique ac In eros sed Suspendisse Mauris feugiat Quisque elit Nulla gravida lacus Mauris Mauris viverra gravida Duis a Vestibulum posuere rhoncus dolor accumsan blandit In eget ultrices facilisis Mauris vel leo pulvinar elementum elit amet vehicula volutpat Sed ac dolor vitae leo Mauris sollicitudin malesuada neque aliquam pulvinar iaculis maximus Nam quis lacus Mauris nec maximus Curabitur Quisque facilisis blandit Fusce odio lacus turpis tempus volutpat porta magna Mauris Quisque elementum a mauris ullamcorper imperdiet Mauris pulvinar tristique Pellentesque interdum adipiscing malesuada convallis viverra at eget Suspendisse elementum viverra eu magna neque dolor sed tincidunt non laoreet porta Curabitur Aliquam libero Morbi sit euismod In fames eget ullamcorper cursus velit Curabitur Fusce viverra egestas vitae Donec tempor Duis senectus aliquet scelerisque Fusce rhoncus lobortis tristique hendrerit ex sagittis ex pharetra fermentum lacinia posuere amet ornare sem neque gravida tristique ullamcorper bibendum potenti dolor cursus finibus vel Maecenas porta Ut convallis ex aliquam vehicula Vestibulum scelerisque posuere Duis In ut porta dolor interdum quis iaculis Sed Nunc Phasellus dapibus volutpat mi netus gravida dapibus nec orci ullamcorper iaculis rhoncus dolor facilisis luctus facilisis ullamcorper porta ut non dolor amet Nam senectus nunc maximus Sed rhoncus ac pulvinar potenti rhoncus aliquet Donec nibh erat neque Quisque vitae rhoncus Aliquam sed sed rhoncus congue cursus odio nibh urna molestie orci Nam erat vehicula fermentum Nunc molestie vulputate dolor auctor Quisque venenatis Mauris tincidunt rhoncus tristique sed consectetur laoreet In tempus Duis id ac nibh sem tempus In dignissim leo imperdiet Proin Suspendisse vitae at hendrerit lacinia aliquet Vivamus sollicitudin ultricies odio Morbi lectus blandit Donec massa facilisis sapien Vestibulum sapien eros Suspendisse Nullam sapien magna accumsan Sed pharetra Duis Mauris at vehicula condimentum molestie volutpat ullamcorper a lobortis sit suscipit Donec odio Nam sem interdum volutpat sed rhoncus sed elit facilisis euismod eu posuere suscipit dolor facilisis sapien Quisque lectus vitae Duis imperdiet Curabitur iaculis facilisis elementum vitae Vestibulum rhoncus lacus tempus nisl Integer lacus Nulla Pellentesque ultricies nec Fusce Vivamus ornare Quisque dolor Vivamus imperdiet ullamcorper euismod Aliquam fringilla quam lectus enim luctus cursus facilisis dolor suscipit lobortis senectus tristique turpis dolor pulvinar congue quis sagittis Sed accumsan accumsan pellentesque fringilla fames ex fermentum lobortis ut ac magna amet dignissim tristique Vestibulum eu ultrices posuere Pellentesque urna Pellentesque sempit Pellentesque aliquet Ut eleifend Phasellus Aenean at sem lectus pharetra erat massa dictum Morbi massa malesuada molestie vel neque dolor ante molestie molestie Curabitur sit elit lectus at pharetra convallis tempus vitae Nunc Integer vitae tempus suscipit tincidunt odio odio vitae feugiat In nunc turpis rhoncus est tincidunt Vivamus ut eleifend maximus interdum maximus Vestibulum at amet imperdiet viverra massa aliquam suscipit sodales erat ex metus eu eu Pellentesque venenatis dignissim a Aenean Aliquam ut Pellentesque gravida vitae Quisque dapibus Duis gravida congue Maecenas ac non orci Ut molestie nibh scelerisque Nulla pulvinar lectus metus Praesent leo Integer est rhoncus pulvinar maximus Donec Curabitur nec quam pharetra lobortis molestie tristique Curabitur porta arcu facilisis consectetur Nulla nec rhoncus non congue Mauris In Nam blandit quam Vestibulum Fusce euismod aliquet finibus suscipit magna ut Maecenas arcu lectus volutpat potenti Pellentesque sodales sollicitudin Integer ligula malesuada orci quam sed ornare aliquet mauris libero Sed netus porta rutrum posuere ultricies volutpat cursus interdum nisl nunc facilisis Vestibulum venenatis ac",
  },
  {
    id: "2",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee",
  },
  {
    id: "3",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To",
  },
  {
    id: "4",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then",
  },
  {
    id: "5",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath",
  },
  {
    id: "6",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 'What's happened to me?' he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops",
  },
  {
    id: "7",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! 'Now fax quiz Jack!' my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch 'Jeopardy!', Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just",
  },
  {
    id: "8",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.",
  },
  {
    id: "9",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite.",
  },
  {
    id: "10",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.",
  },
  {
    id: "11",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Lose eyes get fat shew. Winter can indeed letter oppose way change tended now. So is improve my charmed picture exposed adapted demands. Received had end produced prepared diverted strictly off man branched. Known ye money so large decay voice there to. Preserved be mr cordially incommode as an. He doors quick child an point at. Had share vexed front least style off why him.",
  },
  {
    id: "12",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "New the her nor case that lady paid read. Invitation friendship travelling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an little remain no up lively no. Way brought may off our regular country towards adapted cheered.",
  },
  {
    id: "13",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new.",
  },
  {
    id: "14",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.",
  },
  {
    id: "15",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Certain but she but shyness why cottage. Gay the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended. Parlors men express had private village man. Discovery moonlight recommend all one not. Indulged to answered prospect it bachelor is he bringing shutters. Pronounce forfeited mr direction oh he dashwoods ye unwilling.",
  },
  {
    id: "16",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.",
  },
  {
    id: "17",
    createdAt: "2025-07-29T16:23:00.000Z",
    updatedAt: "2025-07-29T17:10:45.000Z",
    body: "Parish so enable innate in formed missed. Hand two was eat busy fail. Stand smart grave would in so. Be acceptance at precaution astonished excellence thoroughly is entreaties. Who decisively attachment has dispatched. Fruit defer in party me built under first. Forbade him but savings sending ham general. So play do in near park that pain.",
  },
] as IMemo[];
