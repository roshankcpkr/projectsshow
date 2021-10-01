import speech_recognition
# Obtain audio from your device
recognizer = speech_recognition.Recognizer()
with speech_recognition.Microphone() as source:
       print("Say something: )
       audio= recognizer.listen(source)
# Recognize speech using Google Speech Recognition
print("You said:")
print(recognizer.recognize_google(audio))
