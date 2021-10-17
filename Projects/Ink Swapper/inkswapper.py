#Code:
"""
This program changes the colour of the ink, 
based on input provided by the user.
"""

from simpleimage import SimpleImage

DEFAULT_FILE = 'images/pen.jpg'
INTENSITY_THRESHOLD = 1.12

def avg_colour(pixel):
    """
    Returns the average of RGB values of that corresponding
    pixel.
    """
    return (pixel.red + pixel.blue + pixel.green) / 3

def ink_swap(image, colour):
    """
    This function identifies the "sufficiently blue" pixels i.e.
    the "Royal Blue" ink and changes its colour as per the input
    entered by the user.
    """
    for pixel in image:
        if pixel.blue >= avg_colour(pixel) * INTENSITY_THRESHOLD:
            if colour == 'Red' or colour == 'red':
                pixel.red, pixel.green, pixel.blue = 172, 50, 53
            elif colour == 'Black' or colour == 'black':
                pixel.red, pixel.green, pixel.blue = 68, 65, 60
            elif colour == 'Green' or colour == 'green':
                pixel.red, pixel.green, pixel.blue = 17, 136, 123
            elif colour == 'Blue Black' or colour == 'blue black' or colour == 'Blue black':
                pixel.red, pixel.green, pixel.blue = 0, 0, 102
            elif colour == 'Purple' or colour == 'purple':
                pixel.red, pixel.green, pixel.blue = 154, 44, 160
            # elif colour == '<add your colour name>'
            #     pixel.red, pixel.green, pixel.blue = Red, Green, Blue

    return image

def main():
    filename = get_file()
    image = SimpleImage(filename)
    ink_swap_img = SimpleImage(filename)

    print('Choose a colour from the following options: ')
    print('a)','Black')
    print('b)','Red')
    print('c)','Green')
    print('d)','Blue Black')
    print('e)','Purple')
    colour = str(input('Your Choice: '))
    """
    Prints the error message if the following colour is not added in the function
    aforementioned above.
    """
    if colour != 'Red' and colour != 'red' and colour != 'Black' and colour != 'black' and colour != 'Green' and colour != 'green' and colour != 'Blue Black' and colour != 'blue black' and colour != 'Blue black' and colour != 'Purple' and colour != 'purple':
        print('Your choice is not present in our database.') 
        print('Switching to Blue-Black Ink instead.')
        colour = 'Blue Black'

    print('')
    print('Please wait...')
    ink_swap(ink_swap_img, colour)

    image.show()
    ink_swap_img.show()

def get_file():
    # Read image file path from user, or use the default file
    filename = input('Enter image file (or press enter for default): ')
    if filename == '':
        filename = DEFAULT_FILE
    return filename

if __name__ == '__main__':
    main()
