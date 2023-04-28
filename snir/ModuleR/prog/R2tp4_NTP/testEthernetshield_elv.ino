/*  PROGRAM TO TEST IF ARDUINO BOARD WITH ETHERNET SHIELD IS VISIBLE 
 */

#include <SPI.h>
#include <Ethernet.h>

const uint8_t LED_PIN = LED_BUILTIN;

const uint8_t SPI_SS_ETHERNET_PIN = N; // choice depends of the Arduino board 

byte macAddress[] = {0xHH, 0xHH, 0xHH, 0xHH, 0xXHH, 0xHH}; // look at the sticker on the shield

// No IP address array => DHCP requiered 

void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  Serial.begin(115200);

  Ethernet.init(SPI_SS_ETHERNET_PIN);  // DHCP connexion mode
  if (Ethernet.begin(macAddress)) {
  	Serial.println("Network connection successful :)");
  	Serial.print("IPv4    = "); Serial.println(Ethernet.localIP());
		Serial.print("Gateway = "); Serial.println(Ethernet.gatewayIP());
		Serial.print("DNS     = "); Serial.println(Ethernet.dnsServerIP());
		Serial.println(""); 
		Serial.flush();
    nonStopBlink();     // Now, you should be able to ping the board :)
  }
  else {
  	Serial.println("Connection to network failed :(");
  	Serial.println("Check connectivity and reboot program...");
  	Serial.flush();
  	digitalWrite(LED_PIN, HIGH);
  }
}

void loop () {
	delay(5000);
}

void nonStopBlink() {
	while (1) {
		digitalWrite(LED_PIN, HIGH);
		delay(500);
		digitalWrite(LED_PIN, LOW);
		delay(500);
	}
}


