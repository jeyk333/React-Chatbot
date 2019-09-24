"use strict";
const dialogflow = require("dialogflow");
const config = require("../config/keys");
const structjson = require("structjson");
const mongoose = require("mongoose");

const projectID = config.googleProjectID;
const sessionID = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;
const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivateKey
};

// Create a new session
const sessionClient = new dialogflow.SessionsClient({ projectID, credentials });

const Registration = mongoose.model("registration");

module.exports = {
  textQuery: async function(text, userID, parameters = {}) {
    let sessionPath = sessionClient.sessionPath(projectID, sessionID + userID);
    let self = module.exports;
    // The text query reque st.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: text,
          // The language used by the client (en-US)
          languageCode: languageCode
        },
        queryParams: {
          payload: {
            data: parameters
          }
        }
      }
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  eventQuery: async function(event, userID, parameters = {}) {
    let self = module.exports;
    let sessionPath = sessionClient.sessionPath(projectID, sessionID + userID);
    // The event query request.
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          // The query to send to the dialogflow agent
          name: event,
          parameters: structjson.jsonToStructProto(parameters),
          // The language used by the client (en-US)
          languageCode: languageCode
        }
      }
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },
  handleAction: function(responses) {
    let self = module.exports;
    let queryResult = responses[0].queryResult;
    switch (queryResult.action) {
      case "recommendcourses-yes":
        if (queryResult.allRequiredParamsPresent) {
          self.saveRegistration(queryResult.parameters.fields);
        }
        break;
    }
    return responses;
  },

  saveRegistration: async function(fields) {
    const registration = new Registration({
      name: fields.name.stringValue,
      email: fields.email.stringValue,
      phone: fields.phone.stringValue,
      address: fields.address.stringValue,
      registerDate: Date.now()
    });
    try {
      let reg = await registration.save();
      console.log(reg);
    } catch (err) {
      console.log(err);
    }
  }
};
