This project isfrom frontendmentor.io. Its about making a website for people to give their feedbacks or their thoughts of an app or some problems online
![image](https://user-images.githubusercontent.com/73646983/138652116-4792f255-5985-406d-812b-4993487ba2b2.png)

Here is the link to my website, lets add some feedbacks so we can get to know each other 😂
https://feedbacks-5728d.web.app/

I didnt try to build it as close to the original as possible. I was just having fun when making it.

I have learned a bunch of libraries from making this project. 
All the libraries i have used in this React project are Styled-Components for css with Javascript. Material-UI for plugin components, icons, grid system, responsive layout. Framer-motion for magical animations. React Router for routing.

I added a lot of animations and it might gave you some headaches.

I used ContextAPI to passing props to components. After a while, i have realized that it makes all my components render a lot even though some of them weren't doing anything, and it affects a lots to my web performance.

I am currently learning to use Redux to manage state. In my next project, i will replace ContextAPI with Redux for better performance.

At first, i use mock-api server for my API server. But my VietNam country is a bit too far away from the mock-api server. Every time i did an update on the server, it took double 70ms to reach their server and went back to my website.

Finally, i choose to use firebase again and everything was faster and simpler.
