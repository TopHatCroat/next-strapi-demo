# NextJS + Strapi Starter

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Clone repository:

```bash
git clone https://github.com/TopHatCroat/nextjs-strapi-demo.git
```

2. Install turbo and install packages:

```bash
yarn global add turbo
yarn install
```

3. Run the development servers for both the frontend and backend

```bash
turbo dev
```

4. Access the UIs: 
   * Open [http://localhost:3000](http://localhost:3000) with your browser to see the UI
   * Open [http://localhost:1337](http://localhost:1337) with your browser to see the admin UI
     * If you are running the project for the first time you will be prompted to create an admin user

5. This project uses a git hook to enforce [conventional commits](https://github.com/qoomon/git-conventional-commits). To install the git hook, run the following command in the root directory of the project:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```

## 📜 API Documentation

API documentation is provided by [Strapi Documentation](https://github.com/strapi/strapi/tree/main/packages/plugins/documentation) plugin.
The full documentation is available in `apps/backend/src/extensions/documentation/documentation/0.1.0/full_documentation.json`.
It will be regenerated automatically on each server restart.


## 🚀 Deployment

// TODO

## 🤖 ChatGPT Code Review

We've integrated the innovative [ChatGPT Code Review](https://github.com/anc95/ChatGPT-CodeReview) for AI-powered,
automated code reviews. This feature provides real-time feedback on your code, helping improve code quality and catch
potential issues.

![image](https://user-images.githubusercontent.com/28964599/233685071-e1371edf-6359-41c3-a989-335d6ee09cb7.png)

## Contributing

Contributions are always welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes, and commit
4. Push your changes to the forked repository.
5. Create a pull request, and we'll review your changes.

## Acknowledgements

Thanks to [next-enterprise](https://github.com/Blazity/next-enterprise) for providing the base for the frontend.
Thanks to [Strapi](https://strapi.io/) for providing the backend for this project.
