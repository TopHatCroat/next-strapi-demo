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
yarn dev
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

## 🚀 Deployment

// TODO

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
