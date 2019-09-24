const { WebhookClient } = require("dialogflow-fulfillment");
const mongoose = require("mongoose");
const Demand = mongoose.model("demand");
const Coupon = mongoose.model("coupon");

module.exports = app => {
  app.post("/", async (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });

    function pikachu(agent) {
      agent.add("Welcome to Pikachu fulfillment");
    }

    async function learn(agent) {
      Demand.findOne({ course: agent.parameters.Course }, function(
        err,
        course
      ) {
        if (course !== null) {
          course.counter++;
          course.save();
        } else {
          const demand = new Demand({ course: agent.parameters.Course });
          demand.save();
        }
      });
      let responseText = `You want to learn about ${agent.parameters.Course}. Here is a link to all my courses: https://www.google.com`;

      let coupon = await Coupon.findOne({ course: agent.parameters.Course });
      if (coupon != null) {
        responseText = `You want learn about ${agent.parameters.Course}. Here is a link to the course: ${coupon.link}`;
      }
      agent.add(responseText);
    }

    function fallback(agent) {
      agent.add("I didn't understand");
      agent.add("I'm sorry, can you try again? ");
    }

    let intentMap = new Map();
    intentMap.set("Pikachu", pikachu);
    intentMap.set("learn courses", learn);
    intentMap.set("Default Fallback Intent", fallback);

    agent.handleRequest(intentMap);
  });
};
