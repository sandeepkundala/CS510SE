# ***HW1-CS510***

This readme file would help the graders to grade the assignment easily and also provide overview on the repo.

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
