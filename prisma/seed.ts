const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// titles
const HIT_MAN = "Hit Man"

// roles
const ACTOR = "Actor"
const WRITER = "Writer"
const DIRECTOR = "Director"
const EDITOR = "Editor"
const DP = "Director of Photography"

const users = [
  {
    name: "Rocky",
    email: "Rocky@bullwinkle.com"
  },
  {
    name: "Glenn Powell",
    email: "glennpowell@gmail.com",
    imdb_link: "https://www.imdb.com/name/nm1412974/?ref_=tt_cl_t_1",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR,
          WRITER
        ]
      }
    ]
  },
  {
    name: "Adria Arjona",
    email: "adriaarjona@gmail.com",
    imdb_link: "https://www.imdb.com/name/nm5245722/?ref_=tt_cl_t_2",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR
        ]
      }
    ]
  },
  {
    name: "Retta",
    email: "retta@retta.org",
    imdb_link: "https://www.imdb.com/name/nm0802876/?ref_=tt_cl_t_3",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR
        ]
      }
    ]
  },
  {
    name: "Austin Amelio",
    email: "auiaeio@yahoo.com",
    imdb_link: "https://www.imdb.com/name/nm3994184/?ref_=tt_cl_t_4",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR
        ]
      }
    ]
  },
  {
    name: "Richard Linklater",
    email: "",
    imdb_link: "https://www.imdb.com/name/nm0000500/?ref_=tt_ov_dr",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          WRITER,
          DIRECTOR
        ]
      }
    ]
  },
  {
    name: "Skip Hollandsworth",
    email: "",
    imdb_link: "https://www.imdb.com/name/nm0390912/?ref_=tt_ov_wr",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR
        ]
      }
    ]
  },
]


const movies = [
  {
    title: HIT_MAN,
    description: "A professor moonlighting as a hit man of sorts for his city police department, descends into dangerous, dubious territory when he finds himself attracted to a woman who enlists his services.",
    imdb_link: "https://www.imdb.com/title/tt20215968/"

  }
]


Promise.all([
  
  // create users
  Promise.all(users.map(user => {
    try {
      prisma.user.create(
        {
          data: {
            name: user.name,
            email: user.email
          }
        }
      )
    } catch(err) {
      // pass
    }
  })),

  // create movies




  // create crew




  // create roles

])
.then(results => console.log("finished"))
.catch(err => console.log(err));