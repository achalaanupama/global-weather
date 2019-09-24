
Weather RESTFul API
===================

This is a RESTFul API developed using [LoopBack framework](http://loopback.io/) for an existing SOAP [service](https://github.com/enablement-me/code-challenge).

### Why LoopBack framework chosen for API?

LoopBack is a highly extensible, open-source Node.js framework developed by developers which enables developers to quickly create APIs and microservices.
It also provide many connectors out-of-the-box for SOAP, REST, Databases, etc.


### Challengers/issues that I faced and how I resolved them
I have never used LoopBack framework or the languages (TypeScripts, Node.js) earlier. Therefore, I decided to use this as an oppertunity to learn something new
over some other known frameworks and languages which I'm comfortable with.

Therefore, I decided to try out the tutorials first after finish reading all the key concepts and features of the LoopBack framework.
it really help me in quickly troubleshoot issues.

The main issues I faced was, Once some of the recent code changes were not reflected in runtime. It wasn't fixed even after clean build as well.
Finally I had to delete "dist" folder and rebuild to fix this issue.

### How to run locally

1. Clone the global weather repo from [git repo](https://github.com/enablement-me/code-challenge)

2. Run following command to run global weather SOAP service locally.
      ````
      npm install
      npm build
      npm start
      ````
3. Clone weather REST API service from [git repo](https://github.com/achalaanupama/global-weather)
4. Run following command to run it locally.
      ````
      npm install
      npm build
      npm start
      ````
      Alternatively you can choose to run in Docker as well.
      ````
      docker build -t weather .
      docker run -p 3000:3000 -d weather

      ````

5. RESTFul Service can be access from http://localhost:3000/ in the browser which will provide Swagger Open API documentation.
6. Services can be run as follows.
http://localhost:3000/weather?CityName=MEL&CountryName=AU
http://localhost:3000/weather/cities/AU









