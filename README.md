## About This App

#### This app is one of the simplest ways to check today's top stories from [Hacker News](https://news.ycombinator.com/) :newspaper:

Rather than open the original, why not look over news quickly and comfortably on this app?

![Top](https://user-images.githubusercontent.com/74521093/114793509-79a66c00-9dc5-11eb-9575-5e4775ee0844.png)

(Bootstrapped with [Create React App](https://github.com/facebook/create-react-app))

## Demo

| Scroll                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------- |
| ![hackernews-scroll](https://user-images.githubusercontent.com/74521093/114796260-7ada9780-9dcb-11eb-99f0-1f279efe3693.gif) |

| Bottom                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| ![Bottom](https://user-images.githubusercontent.com/74521093/114796392-ca20c800-9dcb-11eb-8dd4-76d115accc1b.png) |

## Tech Stack

#### TypeScript x React



#### [`Hacker News API`](https://github.com/HackerNews/API)

- top stories

"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

```typescript
// Example //
[ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]
```

- a story

"https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"

```typescript
// Example //
[ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]
```

"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

```typescript
// Example //
{
  "by" : "python_kiss",
  "descendants" : 1,
  "id" : 1123,
  "kids" : [ 1193 ],
  "score" : 6,
  "time" : 1172467702,
  "title" : "Too many companies are like bad marriages",
  "type" : "story",
  "url" : "http://headrush.typepad.com/creating_passionate_users/2007/02/too_many_compan.html"
}
```

## Check It on Local

```
$ git clone
$ cd wp-frontend
$ npm install
$ npm start
```

## :copyright: License

#### This App is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

Thanks for reading me. Have a nice day!
