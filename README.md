# AutoChair - Autonomous Wheelchair

AutoChair is an autonomous wheelchair system designed to enhance accessibility and mobility for visually impaired individuals. Traditional wheelchairs rely on assistance from others for navigation, but AutoChair empowers users to move independently through advanced sensor technology and software integration.

## Features

- **Advanced Object Detection:** Equipped with multiple sensors, AutoChair detects objects in its surroundings and navigates around them autonomously.
- **Voice-Controlled App:** The accompanying mobile app features a voice assistant that allows visually impaired users to request directions verbally.
- **Bluetooth and GPS Integration:** The app connects to AutoChair via Bluetooth and GPS, enabling seamless navigation to specified destinations.
- **Complete Phone Control:** Users can control their phone through voice commands, facilitating hands-free operation.
- **Loud Notification Reading:** AutoChair reads notifications aloud, ensuring users stay informed about important alerts.
- **Built-in Security Alerts:** The system includes security alerts for caregivers, providing peace of mind.
- **Night Vision:** AutoChair features night vision capabilities for object detection in low-light conditions.
- **Regional Language Support:** The app supports multiple regional languages for enhanced accessibility.
- **Additional Features:** Book doctor appointments and receive medication reminders for added convenience.

## Technology Stack

- **Mobile App (ChairMate):** Developed using React Native, the ChairMate app enables voice-controlled navigation and includes features such as map integration and a built-in chatbot.
- **Hardware Components:** Utilized Arduino Uno R3, Raspberry Pi, Bluetooth module, and GPS module for hardware integration.
- **Arduino EEPROM Usage:** Leveraged Arduino Uno R3's EEPROM to store navigation paths, allowing for reliable return to the starting point.
- **IR Sensors:** Integrated IR sensors for depth detection, ensuring AutoChair stops in the presence of obstacles like holes or staircases.
- **Machine Learning Model:** Developed a Python-based machine learning model for real-time object detection, aiding visually impaired users in finding lost items even in low-light conditions.

This repository contains the source code for the ChairMate Android App, the mobile application component of the AutoChair system.
