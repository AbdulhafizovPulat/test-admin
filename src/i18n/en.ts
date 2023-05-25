import englishMessages from "ra-language-english";

export const en = {
  ...englishMessages,
  resources: {
    posts: {
      name: "Post |||| Posts",
      fields: {
        title: "Title",
        body: "Body",
        userId: "UserId",
        id: "Id",
      },
    },
    comments: {
      name: "Comment |||| Comments",
      fields: {
        email: "E-mail",
        id: "Id",
        name: "Name",
        body: "Body",
        postId: "PostId",
      },
    },
    photos: {
      name: "Photo |||| Photos",
      fields: {
        albumId: "AlbumId",
        id: "id",
        title: "Title",
        url: "URL",
        thumbnailUrl: "ThumbnailUrl",
      },
    },
    users: {
      name: "User |||| Users",
      fields: {
        id: "id",
        name: "Name",
        username: "Username",
        email: "E-mail",
        address: {
          street: "Address street",
          suite: "Address suite",
          city: "Address city",
          zipcode: "Zipcode",
          geo: {
            lat: "Lat",
            lng: "Lng",
          },
        },
        phone: "Phone",
        website: "Website",
        company: {
          name: "Company name",
          catchPhrase: "CatchPhrase",
          bs: "Bs",
        },
      },
    },
  },
  
  saved_queries:{
    subscribed_to_newsletter: 'Subscribed to newsletter',
    yes: 'Yes',
    no: 'No',
    category: 'CATEGORY',
    tests: 'Tests',
    news: 'News',
    deals: 'Deals',
    tutorials: 'Tutorials',
  }
};
