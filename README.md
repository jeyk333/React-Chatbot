# React Chatbot 
## Using Reactjs, Nodejs, MongoDB and Dialogflow(NLP)

An interactive web application chatbot to interact with the users, who visiting your application. This chatbot is made with MERN stack using Google's machine learning Dialogflow(NLP). Dialogflow uses Natural Language Processing(NLP) technique to make the bot understand the Human Language and to efficiently interact with users. I am ReactJs as the frontend and NodeJs as backend, which will interact between the Frontend and Dialogflow to get desired results.

## Prerequisite
- Node v10+
- NPM v6+

## Getting started
You need to create an Dialogflow agent, before you get start with coding and play with it to understand the process. Go the link to create an Dialogflow agent https://cloud.google.com/dialogflow/docs/quick/build-agent
```

Git clone https://github.com/jeyk333/React-Chatbot.git
cd React-Chatbot
npm install
npm start - (It will start the local server for nodejs. To connect the local server with dialogflow. You need to create an tunnel. I used ngrok to as an tunnel to connect backend with dialogflow)

```
### open another terminal and navigate to client folder to start the react app

```
cd client
npm install
npm start
```

### Make sure before you run the you added all the necessary keys in the keys file inside config folder

```
  googleProjectID: process.env.GOOGLE_PROJECT_ID,
  dialogFlowSessionID: process.env.DIALOGFLOW_SESSION_ID,
  dialogFlowSessionLanguageCode: process.env.DIALOGFLOW_LANGUAGE_CODE,
  googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
  googlePrivateKey: JSON.parse(process.env.GOOGLE_PRIVATE_KEY),
  mongoURI: process.env.MONGO_URI
```

### Dependencies Used
For Backend,
- actions-on-google - ^2.12.0
- body-parser - ^1.19.0
- dialogflow - ^0.10.3
- dialogflow-fulfillment - ^0.6.1
- express - ^4.17.1
- mongoose - ^5.6.11
- nodemon - ^1.19.1
- structjson - ^1.0.1

For Frontend,
- axios - ^0.19.0
- materialize-css - ^1.0.0
- react - ^16.9.0
- react-dom - ^16.9.0
- react-router-dom - ^5.0.1
- react-scripts - 3.1.1
- universal-cookie - ^4.0.2
- uuid - ^3.3.2
