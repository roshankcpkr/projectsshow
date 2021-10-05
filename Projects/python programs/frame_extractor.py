import cv2
from pathlib import Path
from tqdm import tqdm

current_path = Path(__file__).parent


def extract_frame(video_path):
    video = cv2.VideoCapture(video_path)
    count = 0
    success, image = video.read()

    frames = video.get(cv2.CAP_PROP_FRAME_COUNT)

    frames_path = current_path.joinpath('extracted_frames').joinpath(Path(video_path).name.replace('.mp4', ''))

    if not Path.exists(frames_path):
        frames_path.mkdir(parents=True, exist_ok=True)

    pbar = tqdm(range(1, int(frames)), desc="Extracting: ")

    while success:
        cv2.imwrite(frames_path.joinpath(f"{count}.png").as_posix(), image)
        success, image = video.read()
        count += 1
        pbar.update()


if __name__ == '__main__':
    p = r'path\containing\videos'
    p_iter = Path(p).iterdir()

    for i in p_iter:
        if i.name.endswith('.mp4'):
            extract_frame(str(i))
