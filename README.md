# Internet-of-Things---Interfacing-with-the-Raspberry-Pi
My experiment with the Internet of Things as a part of a Certification Course

I took up this project as a means of learning and experimenting with the Internet of Things

I have built and deployed a Cloud application on IBM Bluemix Cloud Platform using Node.js
I used Raspberry Pi as a device to interact with the Cloud platform. I built a senseHat Python API on top of the Raspberry Pi
The senseHat simulator has an 8X8 LED Matrix display. I get environment variables readings from the device and send them as events onto the cloud platform. The cloud application then issues commands back to the device based on the temperature readings.
The LED matrix displays the current senseHat temperature with a set color format based on a threshold for the temperature (red for temperatures greater than 29 and green for temperatures less than 29 degree celsius).

This project consists of 3 files:

RaspberryPi.py - This is the python API that issues events onto the Cloud and is responsible for controlling the senseHat simulator
Server.js - This is the Node.js application that is used to establish a connection with the device
Service.js - This is the Node.js file that consists of the function to analyse the data obtained from the device and issue commands back to the device.
