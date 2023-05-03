const books = [
    {
        id:1,
        img:'https://m.media-amazon.com/images/I/71hpCPOFuAL.jpg',
        title:"Beyond Forever",
        author:"Carrie Collins",
        subject:'Fiction / Romance / Military',
        breif:'Chelsea is giving up. After two years of waiting for Ace to make a move, she’s done. It feels like forever and she’s got to make her own way. It doesn’t matter that her friends say he’s interested in her. She doesn’t see it and she’s got more to worry about, like protecting her son, Hawk, working multiple jobs, and planning to open her own store.'
    },
    {
        id:2,
        img:'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/ezgif-sixteen_nine_323.jpg',
        title:"Doglapan",
        author:"Ashneer Grover",
        subject:'Biography & Autobiography / Business, Business & Economics / Entrepreneurship',
        breif:"A young boy with a 'refugee' tag growing up in Delhi's Malviya Nagar outpaces his circumstances by becoming a rank-holder at the pinnacle of academic excellence in India-IIT Delhi"
    },
    {
        id:3,
        img:'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        title:"How Innovation Works",
        author:"Matt Ridley",
        subject: 'Business & Economics / Development / Economic Development',
        breif: "Innovation is the main event of the modern age, the reason we experience both dramatic improvements in our living standards and unsettling changes in our society. It is innovation that will shape the twenty-first century. Yet innovation remains a mysterious process, poorly understood by policy makers and businessmen alike."
    },
    {
        id:4,
        img:'https://images-platform.99static.com//7BYX7lHD4wi60fLMqK3GVv78wxA=/41x0:1069x1028/fit-in/500x500/99designs-contests-attachments/77/77780/attachment_77780046',
        title:"Freedom",
        author:"Jodie Crook",
        subject: 'Life Lesson / Motivational / Physical Development',
        breif: "6 Powerful mindset habits that will catapult you into the life you've always wanted."
    },
    {
        id:5,
        img:'https://i.insider.com/61140fe26fe08d0019978822?width=1000&format=jpeg&auto=webp',
        title:"The Mamba Mentality",
        author:"Phil Jackson",
        subject: 'Biography / Autobiography',
        breif: "The Mamba Mentality: How I Play is Kobe Bryant’s personal perspective of his life and career on the basketball court and his exceptional, insightful style of playing the game—a fitting legacy from the late Los Angeles Laker superstar."
    },
    {
        id:6,
        img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1591031459-41mwF4LSRdL.jpg?crop=1xw:1xh;center,top&resize=980:*',
        title:"The Jordan Rules",
        author:"Sam Smith",
        subject: 'Nonfiction',
        breif: "The Jordan Rules tells the story of how a pro basketball team overcomes the handicap of having the greatest individual virtuoso in history as its centerpiece player. Even a Michael Jordan must learn how to pay attention to team dynamics."
    },
    {
        id:7,
        img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550011461-51Eu4n1qOTL.jpg?crop=1xw:1xh;center,top&resize=980:*',
        title:"Ali - A Life",
        author:"Jonathan Eig",
        subject: 'Biography & Autobiography',
        breif: "Ali: A Life is a biography written by American biographer Jonathan Eig. It was first published in 2018 by Simon & Schuster. The biography is about Muhammad Ali."
    },
    {
        id:8,
        img:'https://qph.cf2.quoracdn.net/main-qimg-79bfbd92f9b885d1c0f18c68ed3382bb.webp',
        title:"The Race of My Life",
        author:"Farhan Akhtar",
        subject: 'Autobiography',
        breif:"Milkha Singh, a sikh boy born around 1930s,runs against trains for fun. A lot of his family members who belong to Milkha Singh family, including his parents, are killed in the Partition of India. After many attempts, he is finally able to join the Indian army."
    },
    {
        id:9,
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
        title:"To Kill a Mockingbird",
        author:"Harper Lee",
        subject: 'Novel',
        breif:"To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature; a year after its release, it won the Pulitzer Prize."
    },
    {
        id:10,
        img:'https://m.media-amazon.com/images/I/81kElPFJD9L.jpg',
        title:"1984",
        author:"George Orwell",
        subject:'Novel',
        breif:"Nineteen Eighty-Four (also published as 1984) is a dystopian social science fiction novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime."
    },
    {
        id:11,
        img:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg',
        title:"Wings of Fire",
        author:"Arun Tiwari",
        subject:'Autobiography',
        breif:"In the autobiography, Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually led him to lead Indian space research, nuclear and missile programs. Kalam started his career, after graduating from Aerospace engineering at Madras Institute of Technology, at Hindustan Aeronautics Limited and was assigned to build a hovercraft prototype. "
    },
    {
        id:12,
        img:'https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg',
        title:"Think Like a Monk",
        author:"Jay Shetty",
        subject:'Body / Mind & Spirit / Mindfulness & Meditation',
        breif:"Jay Shetty, social media superstar and host of the #1 podcast On Purpose, distills the timeless wisdom he learned as a monk into practical steps anyone can take every day to live a less anxious, more meaningful life."
    },
    {
        id:13,
        img:'https://m.media-amazon.com/images/I/91JO2pVO7RL.jpg',
        title:"DEATH - An Inside Story",
        author:"Sadhguru",
        subject:'Death / Death -- Religious aspects -- / Hinduism',
        breif:"Death is a taboo in most societies in the world. But what if we have got this completely wrong? What if death was not the catastrophe it is made out to be but an essential aspect of life, rife with spiritual possibilities for transcendence? For the first time, someone is saying just that."
    },
    {
        id:14,
        img:'https://kinsta.com/wp-content/uploads/2021/10/zero-to-one-book.jpg',
        title:"Zero to One",
        author:"Peter Thiel",
        subject:'Business & Economics / Entrepreneurship',
        breif:"Thiel starts from the bold premise that we live in an age of technological stagnation, even if we're too distracted by our new mobile devices to notice. Progress has stalled in every industry except computers, and globalization is hardly the revolution people think it is. It's true that the world can get marginally richer by building new copies of old inventions, making horizontal progress from 1 to n."
    },
    {
        id:15,
        img:'https://i.insider.com/5df14aacfd9db226e74356c2?width=1000&format=jpeg&auto=webp',
        title:"Business Adventures",
        author:"John Brooks",
        subject:'Business & Economics / Commerce',
        breif:"'The best business book I've ever read.' Bill Gates, Wall Street Journal 'The Michael Lewis of his day.' New York Times What do the $350 million Ford Motor Company disaster known as the Edsel, the fast and incredible rise of Xerox, and the unbelievable scandals at General Electric and Texas Gulf Sulphur have in common? Each is an example of how an iconic company was defined by a particular moment of fame or notoriety."
    },
    {
        id:16,
        img:'https://i.insider.com/615b5af8b414c1001863ae33?width=1000&format=jpeg&auto=webp',
        title:"The High 5 Habit",
        author:"Mel Robbins",
        subject:'Business & Economics / Motivational',
        breif:"The New York Times bestseller now in paperback! In her global phenomenon The 5 Second Rule, Mel Robbins taught millions of people around the world the five second secret to motivation. And in her latest bestseller, she shares another simple, proven tool you can use to take control of your life: The High 5 Habit."
    },
]

export default books;