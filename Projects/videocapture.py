import cv2, time
video = cv2.VideoCapture(0)
a = 1
while True:
    a = a+1
    check, frame = video.read()
    print(frame)
    cv2.imshow("Capturing", frame)
    key = cv2.waitKey(1)
    if key == ord('q'):
        break
print(a)
video.release()
cv2.destroyAllWindows()
