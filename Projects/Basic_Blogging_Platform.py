import os
import time

class Blog:
    def __init__(self):
        self.posts = []

    def create_post(self, title, content):
        post = {
            'title': title,
            'content': content,
            'timestamp': time.strftime('%Y-%m-%d %H:%M:%S')
        }
        self.posts.append(post)

    def list_posts(self):
        for i, post in enumerate(self.posts, start=1):
            print(f"{i}. {post['title']} - {post['timestamp']}")

    def view_post(self, post_index):
        if 1 <= post_index <= len(self.posts):
            post = self.posts[post_index - 1]
            print(f"{post['title']} - {post['timestamp']}")
            print(post['content'])
        else:
            print("Invalid post index.")

    def run(self):
        while True:
            print("\nBlogging Platform Menu:")
            print("1. Create a new post")
            print("2. List all posts")
            print("3. View a post")
            print("4. Exit")
            choice = input("Enter your choice: ")

            if choice == '1':
                title = input("Enter post title: ")
                content = input("Enter post content: ")
                self.create_post(title, content)
            elif choice == '2':
                self.list_posts()
            elif choice == '3':
                post_index = int(input("Enter the post index to view: "))
                self.view_post(post_index)
            elif choice == '4':
                print("Exiting the program.")
                break
            else:
                print("Invalid choice. Please try again.")

if __name__ == "__main__":
    blog = Blog()
    blog.run()
