function Service(appClient) {
  this.appClient = appClient;
}

Service.prototype.connect = function() {
  // TODO connect to iotf here with this.appClient
	//this.appClient = new Client.IotfApplication(this.appClientConfig);
	this.appClient.connect();
  
  this.appClient.on('connect', function() {
    // TODO hook up device events here with this.appClient
	this.appClient.subscribeToDeviceEvents("+","+","temp");
  }.bind(this));

  // TODO act on device events and call handleTempEvent when the right type of event arrives
  this.appClient.on("deviceEvent", function(deviceType, deviceId, eventType, format, payload) {
	  //if(eventType=="display")
		  var temp = parseInt(payload.temp);
		if(temp!=process.env.cpuTemp)
		  this.handleTempEvent(temp);
  });
};

var old_temp = 0;

Service.prototype.handleTempEvent = function(temp) {
  // handle temperature changes here and call this.warningOn/this.warningOff accordingly
  var temp_old = old_temp || temp;
  var temp_new = temp;
  if(temp_new>29 && temp_old<29)
	  this.warningOn();
  else if(temp_new<=29 && temp_old>29)
	  this.warningOff();
  old_temp = temp_new;
};

Service.prototype.warningOn = function() {
  // TODO send a device commmand here
  var myData = {"screen" : "on" }
  myData = JSON.stringify(myData);
  this.appClient.publishDeviceCommand("raspberrySensor", "senb827ebfc87e8", "display", "json", myData);
};

Service.prototype.warningOff = function() {
  // TODO send a device commmand here
  var myData = {"screen" : "off" }
  myData = JSON.stringify(myData);
  this.appClient.publishDeviceCommand("raspberrySensor", "senb827ebfc87e8", "display", "json", myData);
};

module.exports = Service;
