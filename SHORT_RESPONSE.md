# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim.

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content).

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

When a function, such as `fetch()`, is "asynchronous", it means that the function takes time, and runs in the background. This means that you can have these kind of functions running in the background, and it won't need to finish running/executing before other parts of your code. It is highly important to execute code asynchronously, because it does not require blocking the rest of the code, meaning that you can various parts of your code at the same time, instead of "synchronously" or one line at a time.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

The different between a `GET` request and a `POST` request, is that a `GET` request is requesting to **read** data, whereas a `POST` request is used to **create or send** new data. An example of a `GET` request would be a user attempting to reach a website, such as instagram, by typing in the URL and pressing search or enter. The user send a `GET` request to see the website. An example of a `POST` request would be creating a post on your instagram, where the data of the post is send to the server to create the new post.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Vite** is a build tool, that allows a user to simulate a development server. Utilizing Vite enables the use of **HTTP** over local files, avoids **CORS** errors, in addition to automatic reloads, bypassing the need to refresh to see changes made. It also bundles code, and uses **ES modules** to import and export code. An example of another build tool, would be **WebPack**
