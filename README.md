# ***HW1-CS510***

This readme file would help the graders to grade the assignment easily and also provide overview on the repo.

The task list can be found [here](https://github.ncsu.edu/skundal/HW1-CS510/issues/11)

## **1. REST CLIENT (60):**

The JavaScript file can be found [here](https://github.ncsu.edu/skundal/HW1-CS510/blob/master/index.js).

On running the command `npm test` the following output is obtained.

![](https://github.ncsu.edu/skundal/HW1-CS510/blob/master/CS510_HW1_1.png)

## **2. REST SERVER (20):**

The JavaScript file can be found [here](https://github.ncsu.edu/skundal/HW1-CS510/blob/master/server/index.js)

```bash
# Post content to server. Service returns retrieval link.
$ curl --request POST -H "Content-Type: application/json" --data '{"coffee":1,"milk":1,"sugar":1,"chocolate":1}' http://localhost:3000/share
$ curl http://localhost:3000/pgiPc2
$ curl http://localhost:3000/pgiPc2
```

The output is:
![](https://github.ncsu.edu/skundal/HW1-CS510/blob/master/server/CS510_HW1_2.png)

The screencast video demoing REST Server can be found [here](https://drive.google.com/open?id=16T__K9SJqpgsT89Kcv2sVLMzP3tFsb8F)

## **3. CONCEPTS (20):**

*Explain some additional concerns related to using REST apis.*
- Difficult to debug the errors: The description of errors are not accurate or vague forces user to check the entire code to fix the issue.
- Less documentation on integration with Git using : The documentation of using Git with REST API in platforms like javaScript is less.
- Over fetches / under fetches the data: if we require a particular subset of data or we require data from more than one resource, RESTful architecture doesn't support the mentioned concerns.

*Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language.*
- Benefits of RESTful Arch:
  * Takes advantage of existing protocols.
  * Widely adopted.
  * Different status codes for each scenario.
  * Has caching capabilities.
- Disadvantage of RESTful Arch:
  * Requires multi round trips when data is coming from 2 or more resources.
  * Returns full set of data when only subset of it is required.
- Benefits of Graph QL:
  * Limit the response (able to select the subset of data required)
  * Specify fields to be included (to reduce the round trips)
- Disadvantage of Graph QL:
  * Queries always return a HTTP status code of 200, irrespective of whether it was successful or not.
  * Lack of built-in caching support.

