const menuItems = [
  {
    id: 1,
    link: "/",
    name: "home",
  },
  {
    id: 2,
    link: "/about",
    name: "about",
  },
  {
    id: 3,
    link: "/friends",
    name: "friends",
  },
]

const sloganWords = `There's more to life than Hustle & Grind`

const events = [
  // when create the Strapi Content Type - add Featured Boolean, Featured Image - Media - add Relation to Guests for Friends
  {
    id: 1,
    title: "Grilled Hotdogs",
    author: "Jason Lengstorf",
    information: {
      dinnerDate: "October 30, 2019",
      location: "Dogs and Fries",
      address: "SW 10th &, SW Mill St, Portland, OR 97201, USA",
      googleMap: "https://g.page/dogsandfries?share",
      time: "8:30pm",
    },
    details:
      "Bacon ipsum dolor amet dolore ipsum aliquip ut, tri-tip mollit meatball non qui brisket ham hock flank. Fatback tempor mollit cow. Venison dolore bresaola, sunt rump excepteur incididunt jowl sint pork pancetta veniam turducken. Meatball esse alcatra tongue, drumstick tri-tip cow dolor landjaeger.",
    image: "grilled-hot-dogs.jpg",
    slug: "grilled-hot-dogs",
    friends: [
      {
        friend: "Jason",
      },
      {
        friend: "Caroline",
      },
    ],
  },
  {
    id: 2,
    title: "French Pastry & Wine Dining",
    author: "Jason Lengstorf",
    information: {
      dinnerDate: "October 20, 2019",
      location: "Piece of Cake Bakery",
      address: "8306 SE 17th Ave, Portland, OR 97202, USA",
      googleMap: "https://goo.gl/maps/Fegtv8tA8NKdb3bNA",
      time: "7:30pm",
    },
    details:
      "Tail cupidatat adipisicing ex jerky doner dolor, chicken alcatra. Prosciutto esse sirloin pork belly exercitation, ground round t-bone pastrami cupim kielbasa filet mignon excepteur salami. Ipsum ball tip corned beef, alcatra short loin drumstick proident reprehenderit laborum consequat ex picanha andouille swine. Reprehenderit frankfurter strip steak magna capicola porchetta et prosciutto short ribs in.",
    image: "french-pastry.jpg",
    slug: "french-pastry",
    friends: [
      {
        friend: "Jason",
      },
      {
        friend: "David",
      },
      {
        friend: "Klervi",
      },
    ],
  },
  {
    id: 3,
    title: "Eggs And Salad",
    author: "Jason Lengstorf",
    information: {
      dinnerDate: "November 15, 2019",
      location: "Fried Egg I'm in Love",
      address: "3549 SE Hawthorne Blvd, Portland, OR 97214, USA",
      googleMap: "https://goo.gl/maps/qpbU41zK8LkaCzs39",
      time: "8:30pm",
    },
    details:
      "Laboris prosciutto meatball dolor veniam, deserunt magna in enim id pancetta. Dolor bacon alcatra sausage cow labore short ribs rump. Tenderloin shoulder enim, adipisicing landjaeger eu fatback jowl labore ham hock ex. Swine dolore magna, cupidatat burgdoggen shankle excepteur ribeye doner spare ribs. Ut labore salami, beef ribs aliquip ullamco tail chuck short ribs ipsum deserunt cow.",
    image: "eggs-and-salad.jpg",
    slug: "eggs-and-salad",
    friends: [
      {
        friend: "Jason",
      },
      {
        friend: "Caroline",
      },
      {
        friend: "Klervi",
      },
    ],
  },
  {
    id: 4,
    title: "Autumn Soup",
    author: "Jason Lengstorf",
    information: {
      dinnerDate: "January 15, 2020",
      location: "Savor Soup House",
      address: "7337 SE Foster Rd, Portland, OR 97206, USA",
      googleMap: "https://goo.gl/maps/Du8BE3ZsCQXLpaW26",
      time: "6:30pm",
    },
    details:
      "Sint tenderloin minim ball tip excepteur shank non in in labore ut chuck. Sunt in excepteur corned beef burgdoggen venison. Elit cupim salami, tempor strip steak dolore tenderloin quis in shankle frankfurter nostrud id. Andouille nulla chicken, doner boudin sausage tri-tip dolore ea consectetur eiusmod hamburger. Ullamco tail in, nulla magna qui bacon. Laboris shankle pancetta do quis ham turkey.",
    image: "autumn-soup.jpg",
    slug: "autumn-soup",
    friends: [
      {
        friend: "Jason",
      },
      {
        friend: "Caroline",
      },
      {
        friend: "John",
      },
    ],
  },
  {
    id: 5,
    title: "Steak Tacos",
    author: "Jason Lengstorf",
    information: {
      dinnerDate: "January 25, 2019",
      location: "Stella Taco",
      address: "3060 SE Division St, Portland, OR 97202, USA",
      googleMap: "https://goo.gl/maps/oEurHqe3Sjfk2VRZ7",
      time: "7:00pm",
    },
    details:
      "Rump laborum et laboris. Ipsum mollit ham landjaeger. Occaecat jerky pancetta elit kielbasa. Ex deserunt ut ullamco prosciutto. Culpa buffalo elit, spare ribs incididunt mollit capicola voluptate t-bone flank sed hamburger ullamco. Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!",
    image: "steak-tacos.jpg",
    slug: "steak-tacos",
    friends: [
      {
        friend: "Jason",
      },
      {
        friend: "Caroline",
      },
      {
        friend: "Lennart",
      },
    ],
  },
  {
    id: 6,
    title: "BBQ Chicken Time",
    author: "Jason Lengstorf",
    information: {
      dinnerDate: "October 10, 2019",
      location: "Reverend's BBQ",
      address: "7712 SE 13th Ave, Portland, OR 97202, USA",
      googleMap: "https://goo.gl/maps/R9dH1Hs6pBaYVx3h6",
      time: "8:00pm",
    },
    details:
      "Bacon ipsum dolor amet dolore ipsum aliquip ut, tri-tip mollit meatball non qui brisket ham hock flank. Fatback tempor mollit cow. Venison dolore bresaola, sunt rump excepteur incididunt jowl sint pork pancetta veniam turducken. Meatball esse alcatra tongue, drumstick tri-tip cow dolor landjaeger.",
    image: "bbq-chicken.jpg",
    slug: "bbq-chicken",
    friends: [
      {
        friend: "Jason",
      },
      {
        friend: "Caroline",
      },
      {
        friend: "Lennart",
      },
    ],
  },
  {
    id: 7,
    title: "Meatballs and Greens",
    author: "Jason Lengstorf",
    information: {
      dinnerDate: "December 1, 2019",
      location: "87th and Meatballs",
      address: "8737 N Lombard St, Portland, OR 97203, USA",
      googleMap: "https://goo.gl/maps/DMGjUEqiVkbsqUWq5",
      time: "8:00pm",
    },
    details:
      "Tail cupidatat adipisicing ex jerky doner dolor, chicken alcatra. Prosciutto esse sirloin pork belly exercitation, ground round t-bone pastrami cupim kielbasa filet mignon excepteur salami. Ipsum ball tip corned beef, alcatra short loin drumstick proident reprehenderit laborum consequat ex picanha andouille swine. Reprehenderit frankfurter strip steak magna capicola porchetta et prosciutto short ribs in.",
    image: "meatballs-and-greens.jpg",
    slug: "meatballs-and-greens",
    friends: [
      {
        friend: "Jason",
      },
      {
        friend: "Cyril",
      },
      {
        friend: "Derrick",
      },
      {
        friend: "Lennart",
      },
    ],
  },
]

const bioData = {
  author: "Jason & Kyle",
  headline: "About Us",
  content:
    "There is more to Life than Hustle & Grind. It is about spending time with those you care about, eating good food, drinking great drinks and simply enjoying life.",
}

const newsletterData = {
  headline: "Time to Eat",
  tagLine: "Sign up for Food with Friends.",
  buttonText: "Get Food with Friends Alerts",
  privacyText: "Zero Spam Policy. Just Alerts.",
}

module.exports = {
  events,
  bioData,
  menuItems,
  newsletterData,
  sloganWords,
}
